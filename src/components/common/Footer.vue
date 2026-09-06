<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <img :src="logo" alt="觅影" class="logo-img" />
            <span class="logo-text">觅影</span>
          </router-link>
          <p>用一句话，找到那张照片</p>
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
          </div>
          <div class="footer-col">
            <h4>说明</h4>
            <router-link to="/privacy">隐私政策</router-link>
            <router-link to="/terms">使用说明</router-link>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 觅影 · 本地 AI 图片搜索</p>
        <p class="icp">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备2026111543号-1</a>
          <a class="mps-beian" href="https://beian.mps.gov.cn/#/query/webSearch?code=44011802001527" target="_blank" rel="noopener noreferrer">
            <img class="beian-icon" :src="beianIcon" alt="公安备案图标" />
            <span>粤公网安备44011802001527号</span>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from '../../assets/logo.png'
import beianIcon from '../../assets/备案图标.png'
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-bottom .icp .mps-beian {
  display: inline-flex;
  align-items: center;
}

.footer-bottom .icp .beian-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  flex-shrink: 0;
  display: block;
  object-fit: contain;
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
