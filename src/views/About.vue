<template>
  <div class="about-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>关于觅影</h1>
        <p>一款本地 AI 图片搜索工具</p>
      </div>
    </section>

    <!-- 项目故事 -->
    <section class="story">
      <div class="container">
        <div class="story-content">
          <span class="section-label">项目故事</span>
          <h2 class="section-title">从需求出发，做一款懂照片的工具</h2>
          <div class="story-text">
            <p>觅影诞生于一个简单的需求：在海量照片中快速找到想要的那一张。</p>
            <p>我们希望有一款工具能真正理解照片内容，而不是只靠文件名和日期。</p>
            <p>于是觅影诞生了——一款完全本地运行、隐私优先的 AI 图片搜索工具。</p>
            <p>觅影免费提供给同样热爱摄影与图片管理的朋友使用，希望它能让你的照片管理更轻松。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 设计理念 -->
    <section class="principles">
      <div class="container">
        <div class="section-header">
          <span class="section-label">设计理念</span>
          <h2 class="section-title">三个原则，贯穿始终</h2>
          <p class="section-desc">隐私、智能、易用，是觅影始终坚守的设计准则</p>
        </div>
        <div class="principle-grid">
          <div class="principle-card" v-for="item in principles" :key="item.title">
            <div class="principle-icon" v-html="item.icon"></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术如何为你工作 -->
    <section class="tech-stack">
      <div class="container">
        <div class="section-header">
          <span class="section-label">技术支撑</span>
          <h2 class="section-title">它靠什么做到这些</h2>
          <p class="section-desc">觅影用一套本地 AI 与轻量技术，把复杂的搜索变成你随手可用的能力</p>
        </div>
        <div class="tech-list">
          <div class="tech-row" v-for="tech in techs" :key="tech.label">
            <div class="tech-row-icon" v-html="tech.icon"></div>
            <div class="tech-row-body">
              <div class="tech-row-label">{{ tech.label }}</div>
              <p class="tech-row-desc">{{ tech.desc }}</p>
              <div class="tech-row-tags">
                <span class="tech-tag" v-for="tag in tech.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>开始使用觅影</h2>
          <p>免费下载，即刻体验 AI 图片搜索</p>
          <router-link to="/download" class="btn btn-primary btn-large">
            下载 Windows 版
          </router-link>
          <span class="cta-note">支持 Windows 10/11 · 约 60MB</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const principles: { title: string; desc: string; icon: string }[] = [
  {
    title: '隐私优先',
    desc: '所有数据本地存储，不上传任何服务器',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  },
  {
    title: 'AI 驱动',
    desc: '用人工智能理解照片内容，让搜索更智能',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  },
  {
    title: '简单易用',
    desc: '无需复杂配置，打开就能用',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  }
]

const techs: { label: string; desc: string; tags: string[]; icon: string }[] = [
  {
    label: 'AI 看懂照片内容',
    desc: '用 AI 理解每张照片的画面，所以你可以用一句话描述来搜图，而不是靠文件名或日期。',
    tags: ['Chinese-CLIP 语义模型'],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.07 7.07l4.24 4.24M1 12h6m10 0h6M4.22 19.78l4.24-4.24m7.07-7.07l4.24-4.24"/></svg>'
  },
  {
    label: '图片里的文字也能搜',
    desc: '自动识别照片中的文字（招牌、文档、截图），让带文字的图片也变得可搜索。',
    tags: ['PP-OCRv4 文字识别'],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/></svg>'
  },
  {
    label: '几十万张也能秒出',
    desc: '把照片转成向量存储，相似度检索毫秒级返回，照片再多也不卡。',
    tags: ['LanceDB 向量数据库'],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
  },
  {
    label: '轻量不占内存',
    desc: '用 Rust 与 Tauri 打造，比传统 Electron 应用更省资源、启动更快。',
    tags: ['Rust', 'Tauri'],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    label: '数据不出本机',
    desc: 'AI 模型在你的电脑上运行，照片永不离开本机，无需联网也能用。',
    tags: ['ONNX Runtime', '离线推理'],
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  }
]
</script>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
}

.page-hero h1 {
  font-family: var(--font-sans);
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 18px;
  color: var(--text-secondary);
}

/* Story */
.story {
  padding: 120px 0;
}

.story-content {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.story-content .section-label {
  display: inline-block;
  padding: 6px 14px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 13px;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 16px;
}

.story-content .section-title {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
}

.story-text {
  text-align: left;
}

.story-text p {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 16px;
}

.story-text p:last-child {
  margin-bottom: 0;
}

/* Principles */
.principles {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.principle-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.principle-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  text-align: center;
  transition: all 0.2s ease;
}

.principle-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.principle-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: var(--primary);
}

.principle-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.principle-card p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
}

/* Tech Stack */
.tech-stack {
  padding: 120px 0;
}

.tech-list {
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tech-row {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px 32px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all 0.2s ease;
}

.tech-row-body {
  flex: 1;
  min-width: 0;
}

.tech-row-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 6px 0 12px;
}

.tech-row:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.tech-row-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.tech-row-label {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  width: 80px;
  flex-shrink: 0;
}

.tech-row-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 6px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* CTA */
.cta {
  padding: 0 0 120px;
}

.cta-card {
  text-align: center;
  background: var(--brand-gradient);
  border-radius: var(--radius-xl);
  padding: 80px 40px;
  color: #ffffff;
}

.cta-card h2 {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.cta-card p {
  font-size: 17px;
  opacity: 0.9;
  margin-bottom: 32px;
}

.cta-card .btn-primary {
  background: #ffffff;
  color: var(--primary);
}

.cta-card .btn-primary:hover {
  background: #f8fafc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.cta-note {
  display: block;
  margin-top: 16px;
  font-size: 14px;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 968px) {
  .principle-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .story,
  .principles,
  .tech-stack {
    padding: 80px 0;
  }

  .story-content .section-title {
    font-size: 28px;
  }

  .story-text p {
    font-size: 15px;
  }

  .tech-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 24px;
  }

  .tech-row-label {
    width: auto;
  }


  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}
</style>
