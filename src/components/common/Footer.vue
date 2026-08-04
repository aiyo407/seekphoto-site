<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <img :src="logo" alt="觅影" class="logo-img" />
            <span class="logo-text">觅影 <span>随笔</span></span>
          </router-link>
          <p>用一句话，找到那张照片</p>
          <p class="footer-contact">联系：aiyo407@163.com</p>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>导航</h4>
            <router-link to="/">首页</router-link>
            <router-link to="/features">功能</router-link>
            <router-link to="/guide">使用教程</router-link>
            <router-link to="/download">下载</router-link>
            <router-link to="/changelog">更新日志</router-link>
          </div>
          <div class="footer-col">
            <h4>关于</h4>
            <router-link to="/about">关于本站</router-link>
            <a href="mailto:aiyo407@163.com">联系我</a>
            <a href="mailto:aiyo407@163.com?subject=觅影随笔%20意见反馈">意见反馈</a>
          </div>
          <div class="footer-col">
            <h4>说明</h4>
            <router-link to="/privacy">隐私政策</router-link>
            <router-link to="/terms">使用说明</router-link>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 觅影随笔 · 个人作品 · 仅供学习交流</p>
        <p class="icp">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备2026XXXXXX号-1</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from '../../assets/logo.png'
</script>

<style scoped>
.footer {
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  padding: 48px 0 32px;
}

.footer-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
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
}

.logo-img {
  height: 44px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-text {
  margin-left: 12px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.logo-text span {
  font-weight: 500;
  color: var(--text-secondary);
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 14px;
}

.footer-contact {
  font-size: 13px !important;
  color: var(--text-muted) !important;
}

.footer-links {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.footer-col h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.footer-col a {
  display: block;
  color: var(--text-secondary);
  font-size: 14px;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: var(--primary);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 13px;
}

.footer-bottom .icp {
  font-size: 12px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .footer-links {
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
