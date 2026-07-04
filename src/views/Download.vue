<template>
  <div class="download-page">
    <section class="page-hero">
      <div class="container">
        <h1>下载觅影</h1>
        <p>免费开源，即刻开始智能图片管理</p>
      </div>
    </section>

    <section class="download-section">
      <div class="container">
        <div class="download-card">
          <div class="download-main">
            <div class="download-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <h2>SeekPhoto v0.1.0</h2>
            <p class="version-info">Windows 10/11 64-bit · 约 150MB</p>
            <a href="https://github.com/aiyo407/seekphoto/releases/latest" target="_blank" class="btn btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              从 GitHub 下载
            </a>
            <p class="download-note">
              下载 .exe 安装包，双击运行即可安装
            </p>
          </div>
        </div>

        <!-- 系统要求 -->
        <div class="requirements">
          <h2>系统要求</h2>
          <div class="req-grid">
            <div class="req-card">
              <div class="req-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>操作系统</h3>
              <p>Windows 10/11 64-bit</p>
            </div>
            <div class="req-card">
              <div class="req-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                  <rect x="9" y="9" width="6" height="6"/>
                  <line x1="9" y1="1" x2="9" y2="4"/>
                  <line x1="15" y1="1" x2="15" y2="4"/>
                  <line x1="9" y1="20" x2="9" y2="23"/>
                  <line x1="15" y1="20" x2="15" y2="23"/>
                  <line x1="20" y1="9" x2="23" y2="9"/>
                  <line x1="20" y1="14" x2="23" y2="14"/>
                  <line x1="1" y1="9" x2="4" y2="9"/>
                  <line x1="1" y1="14" x2="4" y2="14"/>
                </svg>
              </div>
              <h3>处理器</h3>
              <p>Intel/AMD 双核以上</p>
            </div>
            <div class="req-card">
              <div class="req-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>内存</h3>
              <p>4GB 以上（推荐 8GB）</p>
            </div>
            <div class="req-card">
              <div class="req-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>存储空间</h3>
              <p>500MB 可用空间</p>
            </div>
          </div>
        </div>

        <!-- 安装指南 -->
        <div class="install-guide">
          <h2>安装指南</h2>
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>下载安装包</h3>
                <p>点击上方按钮，从 GitHub Releases 下载最新的 .exe 安装文件</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>运行安装程序</h3>
                <p>双击下载的 .exe 文件，按照向导完成安装</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>配置图片目录</h3>
                <p>首次启动后，在设置中添加你的图片文件夹路径</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>开始使用</h3>
                <p>等待索引完成后，即可使用语义搜索、人脸识别等功能</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="faq">
          <h2>常见问题</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3>安装时提示"Windows 已保护你的电脑"？</h3>
              <p>这是因为应用尚未获得 Microsoft 签名。点击"更多信息" → "仍要运行"即可继续安装。</p>
            </div>
            <div class="faq-item">
              <h3>需要联网才能使用吗？</h3>
              <p>不需要。觅影完全本地运行，所有数据处理都在本地完成，无需联网。首次下载模型需要网络，之后可离线使用。</p>
            </div>
            <div class="faq-item">
              <h3>支持哪些图片格式？</h3>
              <p>目前支持 JPG、JPEG、PNG、BMP、WebP 格式。后续版本将增加更多格式支持。</p>
            </div>
            <div class="faq-item">
              <h3>数据安全吗？</h3>
              <p>非常安全。所有数据（包括图片索引、人脸数据、向量数据库）都存储在你的本地电脑上，不会上传到任何服务器。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
  text-align: center;
  background: linear-gradient(180deg, var(--bg-darker) 0%, var(--bg-dark) 100%);
}

.page-hero h1 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 20px;
  color: var(--text-secondary);
}

.download-section {
  padding: 80px 0;
}

.download-card {
  max-width: 600px;
  margin: 0 auto 80px;
}

.download-main {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
}

.download-icon {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--primary), #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: var(--bg-dark);
}

.download-main h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
}

.version-info {
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.btn-large {
  padding: 18px 48px;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.download-note {
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
}

/* Requirements */
.requirements {
  margin-bottom: 80px;
}

.requirements h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.req-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.req-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
}

.req-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(0, 217, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: var(--primary);
}

.req-card h3 {
  font-size: 16px;
  margin-bottom: 8px;
}

.req-card p {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Install Guide */
.install-guide {
  margin-bottom: 80px;
}

.install-guide h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.steps {
  max-width: 700px;
  margin: 0 auto;
}

.step {
  display: flex;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.step:last-child {
  border-bottom: none;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--bg-dark);
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.step-content p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* FAQ */
.faq h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.faq-list {
  max-width: 700px;
  margin: 0 auto;
}

.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
}

.faq-item h3 {
  font-size: 16px;
  margin-bottom: 12px;
  color: var(--primary);
}

.faq-item p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 768px) {
  .req-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .download-main {
    padding: 40px 24px;
  }
  
  .step {
    flex-direction: column;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .req-grid {
    grid-template-columns: 1fr;
  }
}
</style>
