<template>
  <div class="features-page">
    <section class="page-hero">
      <div class="container">
        <h1>核心功能</h1>
        <p>三种方式，帮你轻松管理海量照片</p>
      </div>
    </section>

    <!-- 文字找图 -->
    <section class="feature-section">
      <div class="container">
        <div class="feature-row">
          <div class="feature-text">
            <span class="feature-tag">核心功能</span>
            <h2>文字找图</h2>
            <p class="feature-desc">
              输入一句话描述你想找的照片，AI 就能理解你的意思，从海量图片中找出最匹配的结果。
              不用记住文件名，也不用一张张翻看。
            </p>
            <ul class="feature-list">
              <li>支持中文搜索</li>
              <li>能听懂日常描述，比如海边、人物、颜色</li>
              <li>找照片像搜索网页一样快</li>
              <li>也能用一张照片找到相似照片</li>
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
                  <div class="visual-result-thumb">
                    <img :src="getImage(i)" alt="搜索结果示例" />
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

    <!-- 人物分类 -->
    <section class="feature-section alt">
      <div class="container">
        <div class="feature-row reverse">
          <div class="feature-text">
            <span class="feature-tag">智能识别</span>
            <h2>人物分类</h2>
            <p class="feature-desc">
              自动识别照片中的人物，把同一个人的照片归到一起。
              家人、朋友、同事的照片，都能轻松找到。
            </p>
            <ul class="feature-list">
              <li>自动生成每个人的头像</li>
              <li>同一个人的照片自动归为一组</li>
              <li>可以给每个人自定义名字</li>
              <li>人物数据只保存在你的电脑上</li>
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
              自动读取照片的拍摄时间，按时间轴整理照片。
              无论是去年的旅行，还是十年前的回忆，都能快速找到。
            </p>
            <ul class="feature-list">
              <li>自动读取照片拍摄时间</li>
              <li>也能从文件名中识别时间</li>
              <li>按年、月、日分组浏览</li>
              <li>查看拍摄设备、地点等信息</li>
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

    <!-- 产品优势 -->
    <section class="tech-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">产品优势</span>
          <h2 class="section-title">简单易用，安全可靠</h2>
          <p class="section-desc">无需复杂设置，打开就能用</p>
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
    name: '完全本地',
    desc: '照片、数据都保存在你的电脑上，不会上传到任何服务器',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  },
  {
    name: '隐私保护',
    desc: '不上传你的照片，AI 处理也在本地完成，保护个人隐私',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
  },
  {
    name: '说话就能找',
    desc: '不用记住文件名，输入一句话描述，AI 帮你找到想要的照片',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  },
  {
    name: '人物自动整理',
    desc: '自动把同一个人的照片归到一起，查找某个人的照片更方便',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    name: '时间轴浏览',
    desc: '按拍摄时间自动整理，快速找到某个年份、月份的照片',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    name: '持续更新',
    desc: '我们会持续优化搜索效果和使用体验，让找照片越来越简单',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
  }
]

const base = import.meta.env.BASE_URL

const getImage = (i: number) => {
  const images = [
    `${base}images/sunset.jpg`,
    `${base}images/baby.jpg`,
    `${base}images/red-dress.jpg`,
    `${base}images/city-night.jpg`,
    `${base}images/cat.jpg`,
    `${base}images/flowers.jpg`,
  ]
  return images[i - 1]
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
  overflow: hidden;
}

.visual-result-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
