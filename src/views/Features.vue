<template>
  <div class="features-page">
    <section class="page-hero">
      <div class="container">
        <h1>核心功能</h1>
        <p>三大 AI 能力，重新定义图片管理</p>
      </div>
    </section>

    <!-- 语义搜索 -->
    <section class="feature-section">
      <div class="container">
        <div class="feature-row">
          <div class="feature-text">
            <span class="feature-tag">核心功能</span>
            <h2>语义搜索</h2>
            <p class="feature-desc">
              基于 Chinese-CLIP 模型，理解自然语言描述，精准匹配图片内容。
              无需记住文件名或标签，用日常语言描述即可找到目标图片。
            </p>
            <ul class="feature-list">
              <li>支持中英文混合搜索</li>
              <li>理解场景、物体、颜色、情感等语义</li>
              <li>毫秒级响应，万张图片瞬间检索</li>
              <li>支持以图搜图功能</li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="visual-card">
              <div class="visual-search-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span>海边的日落</span>
                <button>搜索</button>
              </div>
              <div class="visual-results">
                <div class="visual-result-card" v-for="i in 6" :key="i">
                  <div class="visual-result-thumb" :style="{ background: getGradient(i) }">
                    <span>{{ 97 - i * 3 }}%</span>
                  </div>
                  <div class="visual-result-name">photo_00{{ i }}.jpg</div>
                  <div class="visual-result-meta">2024.02.18</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 人脸识别 -->
    <section class="feature-section alt">
      <div class="container">
        <div class="feature-row reverse">
          <div class="feature-text">
            <span class="feature-tag">智能识别</span>
            <h2>人脸识别</h2>
            <p class="feature-desc">
              基于 InsightFace + YuNet 模型，自动检测照片中的人脸，
              按人物聚合分类，轻松管理家庭、朋友、同事的照片。
            </p>
            <ul class="feature-list">
              <li>自动检测并裁剪人脸缩略图</li>
              <li>按人物智能分组聚合</li>
              <li>支持自定义人物命名</li>
              <li>人脸数据本地存储，隐私安全</li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="visual-card visual-sidebar">
              <div class="visual-sidebar-header">
                <span>全部人物</span>
                <span class="visual-count">5 人</span>
              </div>
              <div class="person-list">
                <div class="person-item" v-for="i in 5" :key="i" :class="{ selected: i === 1 }">
                  <div class="person-avatar" :style="{ background: getFaceGradient(i) }">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div class="person-info">
                    <span class="person-name">人物 {{ i }}</span>
                    <span class="person-count">{{ 32 - i * 5 }} 张照片</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 时间线 -->
    <section class="feature-section">
      <div class="container">
        <div class="feature-row">
          <div class="feature-text">
            <span class="feature-tag">时光回溯</span>
            <h2>时间线浏览</h2>
            <p class="feature-desc">
              自动提取 EXIF 拍摄时间，按时间轴整理照片，
              快速定位历史照片，重温美好回忆。
            </p>
            <ul class="feature-list">
              <li>自动提取 EXIF 拍摄时间</li>
              <li>支持文件名时间戳解析</li>
              <li>按年/月/日分组展示</li>
              <li>显示相机型号、镜头、GPS 等信息</li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="visual-card visual-sidebar">
              <div class="visual-sidebar-header">
                <span>时间线</span>
              </div>
              <div class="timeline-list">
                <div class="timeline-year" v-for="year in [2024, 2023]" :key="year">
                  <div class="year-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                    <span>{{ year }} 年</span>
                  </div>
                  <div class="month-list">
                    <div class="month-item" v-for="month in ['1月', '2月', '3月']" :key="month">
                      <span>{{ month }}</span>
                      <span class="month-count">{{ Math.floor(Math.random() * 80 + 20) }} 张</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈 -->
    <section class="tech-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">技术栈</span>
          <h2 class="section-title">现代技术，稳定可靠</h2>
          <p class="section-desc">基于成熟技术构建，性能与安全兼顾</p>
        </div>
        <div class="tech-grid">
          <div class="tech-card" v-for="tech in techs" :key="tech.name">
            <div class="tech-icon" v-html="tech.icon"></div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const techs = [
  {
    name: 'Tauri 2',
    desc: '轻量级桌面框架，比 Electron 更小更快',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  },
  {
    name: 'Vue 3',
    desc: '渐进式 JavaScript 框架，响应式 UI',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
  },
  {
    name: 'Rust',
    desc: '高性能后端语言，内存安全',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'
  },
  {
    name: 'Chinese-CLIP',
    desc: '中文图文匹配模型，语义搜索核心',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  },
  {
    name: 'LanceDB',
    desc: '向量数据库，毫秒级相似度检索',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
  },
  {
    name: 'InsightFace',
    desc: '人脸识别模型，高精度检测',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  }
]

const getGradient = (i: number) => {
  const gradients = [
    'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    'linear-gradient(135deg, #4ecdc4, #44bd9e)',
    'linear-gradient(135deg, #a29bfe, #6c5ce7)',
    'linear-gradient(135deg, #fdcb6e, #e17055)',
  ]
  return gradients[i - 1]
}

const getFaceGradient = (i: number) => {
  const gradients = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #30cfd0, #330867)',
  ]
  return gradients[i - 1]
}

</script>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
}

.page-hero h1 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 18px;
  color: var(--text-secondary);
}

.feature-section {
  padding: 120px 0;
}

.feature-section.alt {
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-row.reverse {
  direction: rtl;
}

.feature-row.reverse > * {
  direction: ltr;
}

.feature-tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;
}

.feature-text h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.feature-desc {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  padding: 8px 0 8px 24px;
  position: relative;
  color: var(--text-secondary);
}

.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 15px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.visual-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-lg);
}

.visual-search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 4px 4px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  margin-bottom: 16px;
  color: var(--text-secondary);
}

.visual-search-box span {
  flex: 1;
  color: var(--text-primary);
  font-size: 14px;
}

.visual-search-box button {
  padding: 8px 16px;
  background: var(--primary);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.visual-results {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.visual-result-card {
  background: var(--bg);
  border-radius: var(--radius);
  overflow: hidden;
  transition: all 0.2s ease;
}

.visual-result-card:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.visual-result-thumb {
  position: relative;
  aspect-ratio: 1;
  background: var(--bg-tertiary);
}

.visual-result-thumb span {
  position: absolute;
  bottom: 6px;
  left: 6px;
  padding: 2px 6px;
  background: rgba(15, 23, 42, 0.75);
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  border-radius: 999px;
}

.visual-result-name {
  padding: 8px 8px 0;
  font-size: 11px;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.visual-result-meta {
  padding: 2px 8px 8px;
  font-size: 10px;
  color: var(--text-muted);
}

.visual-sidebar {
  padding: 0;
  overflow: hidden;
}

.visual-sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.visual-count {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 400;
}

.person-list {
  padding: 8px;
}

.person-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.15s ease;
}

.person-item:hover {
  background: var(--bg);
}

.person-item.selected {
  background: var(--primary-light);
}

.person-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.person-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.person-name {
  font-size: 14px;
  color: var(--text-primary);
}

.person-count {
  font-size: 12px;
  color: var(--text-secondary);
}

.timeline-list {
  padding: 8px 0;
}

.timeline-year {
  border-bottom: 1px solid var(--border);
}

.timeline-year:last-child {
  border-bottom: none;
}

.year-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.year-row svg {
  color: var(--text-secondary);
}

.month-list {
  background: var(--bg);
  padding: 4px 0;
}

.month-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px 9px 34px;
  font-size: 13px;
  color: var(--text-primary);
  cursor: pointer;
  transition: background 0.15s ease;
}

.month-item:hover {
  background: var(--bg-elevated);
}

.month-count {
  font-size: 12px;
  color: var(--text-secondary);
}

.tech-section {
  padding: 120px 0;
  background: linear-gradient(180deg, var(--bg) 0%, #ffffff 100%);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.tech-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
  transition: all 0.2s ease;
}

.tech-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.tech-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: var(--primary);
}

.tech-card h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
}

.tech-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 968px) {
  .feature-row {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .feature-row.reverse {
    direction: ltr;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 568px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }

  .visual-results {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
