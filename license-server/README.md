# SeekPhoto 许可证验证服务

独立 Node.js 服务，用于 SeekPhoto 桌面应用的许可证在线验证和吊销管理。

与官网（seekphoto-site）代码完全隔离，独立部署。

## 功能

| 接口 | 方法 | 认证 | 说明 |
|------|------|------|------|
| `/api/license/health` | GET | 无 | 健康检查 |
| `/api/license/verify` | POST | 无 | 验证许可证（客户端调用） |
| `/api/license/revoke` | POST | admin | 吊销许可证（退费/盗刷场景） |
| `/api/license/list` | GET | admin | 列出已吊销许可证 |

## 快速开始

```bash
cd license-server
cp .env.example .env
# 编辑 .env，设置 ADMIN_SECRET
npm install
npm start
```

服务默认监听 `http://localhost:3210`。

## API 文档

### POST /api/license/verify

验证许可证是否有效（含吊销检查）。

**请求体：**
```json
{
  "license_id": "SP-xxxxx",
  "device_fingerprint": "64位hex"
}
```

**响应：**
```json
{
  "valid": true,
  "revoked": false
}
```

吊销时返回：
```json
{
  "valid": false,
  "revoked": true,
  "message": "许可证已被吊销"
}
```

### POST /api/license/revoke

吊销许可证（管理员操作）。

**请求头：** `X-Admin-Secret: <ADMIN_SECRET>`

**请求体：**
```json
{
  "license_id": "SP-xxxxx",
  "reason": "用户退费",
  "admin_secret": "可选，也可用请求头认证"
}
```

**响应：**
```json
{
  "success": true,
  "revoked_at": "2026-08-03T12:00:00.000Z"
}
```

### GET /api/license/list

列出所有已吊销许可证。

**请求头：** `X-Admin-Secret: <ADMIN_SECRET>`

**响应：**
```json
{
  "revoked": [
    {
      "license_id": "SP-xxxxx",
      "reason": "用户退费",
      "revoked_at": "2026-08-03T12:00:00.000Z"
    }
  ]
}
```

## 部署

### 与官网同机部署（Nginx 反代）

在 nginx 配置中添加：

```nginx
# 许可证验证 API
location /api/license/ {
    proxy_pass http://127.0.0.1:3210;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}

# 官网其他路径走原有配置
location / {
    # 原有官网配置
}
```

### 独立部署

直接部署到任意 Node.js 服务器，通过端口访问。

## 数据存储

- SQLite 数据库（默认 `./data/license.db`）
- 两张表：
  - `revoked_licenses`：已吊销的许可证
  - `license_activations`：许可证激活记录（首次验证时记录设备绑定）

## 安全说明

- 管理员接口使用恒定时间比较验证 `ADMIN_SECRET`，防止计时攻击
- 客户端已用 RSA 公钥验证激活码签名，服务端只负责吊销检查
- 未知 license_id 默认返回 valid=true（给 benefit of doubt，因为客户端已做签名验证）
