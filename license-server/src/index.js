/**
 * SeekPhoto 许可证在线验证服务
 *
 * 功能：
 * - POST /api/license/verify   验证许可证是否有效（含吊销检查）
 * - POST /api/license/revoke   吊销许可证（admin only）
 * - GET  /api/license/list     列出已吊销许可证（admin only）
 * - GET  /api/license/health   健康检查
 *
 * 环境变量（.env）：
 * - PORT: 监听端口（默认 3210）
 * - ADMIN_SECRET: 管理员密钥（吊销操作需要）
 * - DB_PATH: SQLite 数据库路径（默认 ./data/license.db）
 */

import express from 'express';
import crypto from 'crypto';
import { initDb, isRevoked, revokeLicense, listRevoked, recordActivation, isKnownLicense } from './db.js';

const PORT = process.env.PORT || 3210;
const ADMIN_SECRET = process.env.ADMIN_SECRET || '';

if (!ADMIN_SECRET) {
  console.warn('[WARN] ADMIN_SECRET 未设置，吊销接口将不可用。请在 .env 中配置 ADMIN_SECRET');
}

// 初始化数据库
initDb();

const app = express();
app.use(express.json());

// 请求日志
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// 健康检查
app.get('/api/license/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * 验证许可证
 *
 * 请求体: { license_id, device_fingerprint }
 * 响应: { valid, revoked, message }
 *
 * 验证逻辑：
 * 1. license_id 在吊销列表中 → { valid: false, revoked: true }
 * 2. license_id 已知且未吊销 → { valid: true, revoked: false }
 * 3. license_id 未知（未记录）→ { valid: true, revoked: false }（给 benefit of doubt）
 *    客户端已用 RSA 公钥验证签名，服务端只需检查吊销
 */
app.post('/api/license/verify', (req, res) => {
  const { license_id, device_fingerprint } = req.body;

  if (!license_id || typeof license_id !== 'string') {
    return res.status(400).json({ error: 'license_id is required' });
  }
  if (!device_fingerprint || typeof device_fingerprint !== 'string') {
    return res.status(400).json({ error: 'device_fingerprint is required' });
  }

  // 检查吊销状态
  if (isRevoked(license_id)) {
    console.log(`[Verify] license_id=${license_id} REVOKED`);
    return res.json({
      valid: false,
      revoked: true,
      message: '许可证已被吊销',
    });
  }

  // 记录激活信息（首次验证时记录设备绑定）
  recordActivation(license_id, device_fingerprint);

  console.log(`[Verify] license_id=${license_id} VALID`);
  res.json({
    valid: true,
    revoked: false,
  });
});

/**
 * 管理员认证中间件
 */
function requireAdmin(req, res, next) {
  const provided = req.headers['x-admin-secret'] || req.body?.admin_secret;
  if (!ADMIN_SECRET) {
    return res.status(503).json({ error: '服务器未配置 ADMIN_SECRET' });
  }
  // 恒定时间比较，防止计时攻击
  const a = Buffer.from(provided || '');
  const b = Buffer.from(ADMIN_SECRET);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(403).json({ error: '管理员认证失败' });
  }
  next();
}

/**
 * 吊销许可证
 *
 * 请求体: { license_id, admin_secret, reason? }
 * 响应: { success, revoked_at }
 */
app.post('/api/license/revoke', requireAdmin, (req, res) => {
  const { license_id, reason } = req.body;

  if (!license_id || typeof license_id !== 'string') {
    return res.status(400).json({ error: 'license_id is required' });
  }

  if (isRevoked(license_id)) {
    return res.status(409).json({ error: '许可证已被吊销', already_revoked: true });
  }

  revokeLicense(license_id, reason || 'admin_revoke');
  console.log(`[Revoke] license_id=${license_id} reason=${reason || 'admin_revoke'}`);
  res.json({
    success: true,
    revoked_at: new Date().toISOString(),
  });
});

/**
 * 列出已吊销许可证（管理用）
 *
 * 响应: { revoked: [{ license_id, reason, revoked_at }] }
 */
app.get('/api/license/list', requireAdmin, (_req, res) => {
  const revoked = listRevoked();
  res.json({ revoked });
});

// 全局错误处理
app.use((err, _req, res, _next) => {
  console.error('[ERROR]', err);
  res.status(500).json({ error: '内部服务器错误' });
});

app.listen(PORT, () => {
  console.log(`[SeekPhoto License Server] listening on port ${PORT}`);
  console.log(`  Health:  GET  /api/license/health`);
  console.log(`  Verify:  POST /api/license/verify`);
  console.log(`  Revoke:  POST /api/license/revoke (admin)`);
  console.log(`  List:    GET  /api/license/list   (admin)`);
});
