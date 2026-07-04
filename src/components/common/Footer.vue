<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>觅影 SeekPhoto</h3>
          <p>用一句话，找到那张照片</p>
        </div>
        
        <div class="footer-section">
          <h4>快速链接</h4>
          <router-link to="/">首页</router-link>
          <router-link to="/features">功能</router-link>
          <router-link to="/download">下载</router-link>
        </div>
        
        <div class="footer-section">
          <h4>资源</h4>
          <a href="https://github.com/aiyo407/seekphoto" target="_blank">GitHub</a>
          <a href="https://github.com/aiyo407/seekphoto/issues" target="_blank">问题反馈</a>
        </div>
        
        <div class="footer-section">
          <h4>技术栈</h4>
          <p>Tauri 2 + Vue 3 + Rust</p>
          <p>Chinese-CLIP + LanceDB</p>
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
  background: var(--bg-darker);
  border-top: 1px solid var(--border);
  padding: 60px 0 30px;
  margin-top: 80px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.footer-section h4 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  color: var(--text-secondary);
}

.footer-section p {
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-size: 14px;
}

.footer-section a {
  display: block;
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: var(--primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid var(--border);
}

.footer-bottom p {
  color: var(--text-secondary);
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
