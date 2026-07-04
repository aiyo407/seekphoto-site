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
            <div class="feature-demo">
              <div class="demo-input">
                <span class="demo-label">试试搜索：</span>
                <code>"海边日落"</code>
                <code>"穿红衣服的人"</code>
                <code>"可爱的猫咪"</code>
              </div>
            </div>
          </div>
          <div class="feature-visual">
            <div class="visual-card search-demo">
              <div class="search-bar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span>海边的日落</span>
              </div>
              <div class="search-results">
                <div class="result-item" v-for="i in 4" :key="i">
                  <div class="result-thumb" :style="{ background: getGradient(i) }"></div>
                  <div class="result-info">
                    <div class="result-name">photo_{{ i }}.jpg</div>
                    <div class="result-score">{{ 98 - i * 3 }}% 匹配</div>
                  </div>
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
            <div class="feature-stats">
              <div class="stat">
                <span class="stat-value">99%</span>
                <span class="stat-label">检测准确率</span>
              </div>
              <div class="stat">
                <span class="stat-value">&lt;100ms</span>
                <span class="stat-label">单张处理</span>
              </div>
            </div>
          </div>
          <div class="feature-visual">
            <div class="visual-card face-demo">
              <div class="face-grid">
                <div class="face-item" v-for="i in 6" :key="i">
                  <div class="face-avatar" :style="{ background: getFaceGradient(i) }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <span class="face-name">人物 {{ i }}</span>
                  <span class="face-count">{{ 20 - i * 2 }} 张</span>
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
            <div class="feature-tech">
              <h4>技术实现</h4>
              <p>三级优先级时间提取：EXIF 核心时间 → 文件名解析 → 文件系统时间</p>
            </div>
          </div>
          <div class="feature-visual">
            <div class="visual-card timeline-demo">
              <div class="timeline-item" v-for="i in 3" :key="i">
                <div class="timeline-date">
                  <span class="date-year">2024</span>
                  <span class="date-month">{{ ['一月', '二月', '三月'][i-1] }}</span>
                </div>
                <div class="timeline-photos">
                  <div class="photo-thumb" v-for="j in 4" :key="j" :style="{ background: getTimelineGradient(i, j) }"></div>
                </div>
                <div class="timeline-count">{{ 50 - i * 10 }} 张照片</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈 -->
    <section class="tech-section">
      <div class="container">
        <h2>技术栈</h2>
        <p class="section-desc">基于现代技术构建，性能与安全兼顾</p>
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
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  },
  {
    name: 'Vue 3',
    desc: '渐进式 JavaScript 框架，响应式 UI',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
  },
  {
    name: 'Rust',
    desc: '高性能后端语言，内存安全',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'
  },
  {
    name: 'Chinese-CLIP',
    desc: '中文图文匹配模型，语义搜索核心',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  },
  {
    name: 'LanceDB',
    desc: '向量数据库，毫秒级相似度检索',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
  },
  {
    name: 'InsightFace',
    desc: '人脸识别模型，高精度检测',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
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

const getTimelineGradient = (i: number, j: number) => {
  const base = [
    ['#ff6b6b', '#ee5a24'],
    ['#4ecdc4', '#44bd9e'],
    ['#a29bfe', '#6c5ce7'],
  ]
  const [c1, c2] = base[i - 1]
  return `linear-gradient(${135 + j * 15}deg, ${c1}, ${c2})`
}
</script>

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

.feature-section {
  padding: 100px 0;
}

.feature-section.alt {
  background: var(--bg-darker);
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
  border-radius: 16px;
  background: rgba(0, 217, 255, 0.1);
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
  margin-bottom: 24px;
}

.feature-list li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  color: var(--text-secondary);
}

.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 14px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
}

.feature-demo {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
}

.demo-label {
  color: var(--text-secondary);
  font-size: 14px;
  margin-right: 12px;
}

.demo-input code {
  display: inline-block;
  padding: 6px 12px;
  margin: 4px;
  background: rgba(0, 217, 255, 0.1);
  border-radius: 6px;
  color: var(--primary);
  font-size: 13px;
}

.feature-stats {
  display: flex;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.feature-tech {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
}

.feature-tech h4 {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.feature-tech p {
  font-size: 14px;
  color: var(--text-primary);
}

/* Visual Cards */
.visual-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Search Demo */
.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--bg-darker);
  border-radius: 12px;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.search-bar span {
  color: var(--text-primary);
}

.search-results {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  background: var(--bg-darker);
  border-radius: 10px;
}

.result-thumb {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.result-info {
  flex: 1;
}

.result-name {
  font-size: 14px;
  margin-bottom: 4px;
}

.result-score {
  font-size: 12px;
  color: var(--primary);
}

/* Face Demo */
.face-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.face-item {
  text-align: center;
}

.face-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  color: white;
}

.face-name {
  display: block;
  font-size: 13px;
  margin-bottom: 2px;
}

.face-count {
  font-size: 12px;
  color: var(--text-secondary);
}

/* Timeline Demo */
.timeline-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-date {
  display: flex;
  flex-direction: column;
  min-width: 80px;
}

.date-year {
  font-size: 12px;
  color: var(--text-secondary);
}

.date-month {
  font-size: 16px;
  font-weight: 600;
}

.timeline-photos {
  display: flex;
  gap: 8px;
  flex: 1;
}

.photo-thumb {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.timeline-count {
  font-size: 13px;
  color: var(--text-secondary);
}

/* Tech Section */
.tech-section {
  padding: 100px 0;
  background: var(--bg-darker);
}

.tech-section h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.tech-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

.tech-icon {
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

.tech-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.tech-card p {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 968px) {
  .feature-row {
    grid-template-columns: 1fr;
    gap: 40px;
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
  
  .face-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
