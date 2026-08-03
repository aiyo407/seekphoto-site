/**
 * SQLite 数据库模块
 *
 * 表结构：
 * - revoked_licenses: 已吊销的许可证
 * - license_activations: 许可证激活记录（首次验证时记录）
 */

import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

let db = null;

export function initDb() {
  const dbPath = process.env.DB_PATH || path.join(process.cwd(), 'data', 'license.db');
  const dbDir = path.dirname(dbPath);
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  db = new Database(dbPath);
  db.pragma('journal_mode = WAL');

  db.exec(`
    CREATE TABLE IF NOT EXISTS revoked_licenses (
      license_id   TEXT PRIMARY KEY,
      reason       TEXT,
      revoked_at   TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS license_activations (
      license_id         TEXT PRIMARY KEY,
      device_fingerprint TEXT NOT NULL,
      first_seen_at      TEXT NOT NULL,
      last_seen_at       TEXT NOT NULL,
      verify_count       INTEGER DEFAULT 1
    );
  `);

  console.log(`[DB] initialized at ${dbPath}`);
}

/**
 * 检查许可证是否已被吊销
 */
export function isRevoked(licenseId) {
  const row = db.prepare('SELECT 1 FROM revoked_licenses WHERE license_id = ?').get(licenseId);
  return !!row;
}

/**
 * 吊销许可证
 */
export function revokeLicense(licenseId, reason) {
  db.prepare(
    'INSERT OR IGNORE INTO revoked_licenses (license_id, reason, revoked_at) VALUES (?, ?, ?)'
  ).run(licenseId, reason, new Date().toISOString());
}

/**
 * 列出所有已吊销许可证
 */
export function listRevoked() {
  return db.prepare('SELECT license_id, reason, revoked_at FROM revoked_licenses ORDER BY revoked_at DESC').all();
}

/**
 * 记录激活信息（首次验证时记录，后续更新 last_seen_at 和 verify_count）
 */
export function recordActivation(licenseId, deviceFingerprint) {
  const now = new Date().toISOString();
  db.prepare(`
    INSERT INTO license_activations (license_id, device_fingerprint, first_seen_at, last_seen_at, verify_count)
    VALUES (?, ?, ?, ?, 1)
    ON CONFLICT(license_id) DO UPDATE SET
      last_seen_at = excluded.last_seen_at,
      verify_count = verify_count + 1
  `).run(licenseId, deviceFingerprint, now, now);
}

/**
 * 检查 license_id 是否已知（已记录过激活）
 */
export function isKnownLicense(licenseId) {
  const row = db.prepare('SELECT 1 FROM license_activations WHERE license_id = ?').get(licenseId);
  return !!row;
}
