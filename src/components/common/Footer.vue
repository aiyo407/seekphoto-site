<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="var(--primary)" stroke-width="2"/>
              <circle cx="16" cy="16" r="6" fill="var(--primary)"/>
            </svg>
            <span>觅影 SeekPhoto</span>
          </router-link>
          <p>用一句话，找到那张照片</p>
        </div>

        <div class="footer-links">
          <router-link to="/">首页</router-link>
          <router-link to="/features">功能</router-link>
          <router-link to="/download">下载</router-link>
          <a href="https://github.com/aiyo407/seekphoto" target="_blank">GitHub</a>
          <a href="https://github.com/aiyo407/seekphoto/issues" target="_blank">问题反馈</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 SeekPhoto. 基于 MIT 协议开源。</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  padding: 48px 0 32px;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 32px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links {
    gap: 16px;
  }
}
</style>
