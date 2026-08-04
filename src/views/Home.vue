<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="badge">免费下载 · 本地运行 · 隐私保护</span>
          <h1 class="hero-title">
            用一句话，<br>找到那张照片
          </h1>
          <p class="hero-subtitle">
            觅影随笔是一个个人开发的本地图片管理项目，支持文字找图、人脸识别、时间线浏览、照片地图。<br>
            所有数据只存储在你的电脑上，不上传任何服务器。
          </p>
          <div class="hero-actions">
            <router-link to="/download" class="btn btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              免费下载
            </router-link>
            <router-link to="/features" class="btn btn-secondary btn-large">
              查看功能
            </router-link>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">6+</span>
              <span class="stat-label">智能功能</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">100%</span>
              <span class="stat-label">本地处理</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">0</span>
              <span class="stat-label">数据上传</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心特性 -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-label">核心能力</span>
          <h2 class="section-title">让找照片变得简单</h2>
          <p class="section-desc">六大智能功能，帮你从海量照片中快速找到想要的那一张</p>
        </div>

        <div class="feature-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.title">
            <div class="feature-icon" v-html="feature.icon"></div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 搜索演示 -->
    <section class="demo">
      <div class="container">
        <div class="section-header">
          <span class="section-label">体验演示</span>
          <h2 class="section-title">像聊天一样搜索照片</h2>
          <p class="section-desc">输入自然语言描述，AI 即刻理解并返回最匹配的结果</p>
        </div>

        <div class="demo-app">
          <div class="demo-search-box">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span class="demo-text">{{ currentKeyword }}</span>
            <span class="demo-cursor"></span>
            <button class="demo-search-btn">搜索</button>
          </div>
          <div class="demo-tags">
            <span class="demo-tags-label">试试：</span>
            <span class="demo-tag">海边的日落</span>
            <span class="demo-tag">宝宝的笑容</span>
            <span class="demo-tag">穿红衣服的人</span>
            <span class="demo-tag">城市夜景</span>
            <span class="demo-tag">可爱的猫咪</span>
            <span class="demo-tag">春天的花朵</span>
          </div>
          <div class="demo-results">
            <div class="demo-result-card" v-for="i in 8" :key="i" :style="{ animationDelay: `${i * 0.06}s` }">
              <div class="demo-card-image">
                <img :src="thumbImages[i-1]" alt="示例照片" />
                <span class="demo-card-score">{{ 96 - i * 3 }}%</span>
              </div>
              <div class="demo-card-info">
                <div class="demo-card-name">photo_{{ String(i).padStart(3, '0') }}.jpg</div>
                <div class="demo-card-meta">2024.02.18 · 4.2 MB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用场景 -->
    <section class="scenarios">
      <div class="container">
        <div class="section-header">
          <span class="section-label">使用场景</span>
          <h2 class="section-title">觅影能帮你做什么</h2>
          <p class="section-desc">无论你的照片有多少，都能轻松管理</p>
        </div>

        <div class="scenario-grid">
          <div class="scenario-card" v-for="scenario in scenarios" :key="scenario.title">
            <div class="scenario-icon" v-html="scenario.icon"></div>
            <h3>{{ scenario.title }}</h3>
            <p>{{ scenario.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择觅影 -->
    <section class="compare">
      <div class="container">
        <div class="section-header">
          <span class="section-label">特性优势</span>
          <h2 class="section-title">为什么选择觅影</h2>
          <p class="section-desc">相比传统方式，觅影让照片管理更智能、更安全</p>
        </div>

        <div class="compare-table">
          <div class="compare-row compare-header">
            <div class="compare-cell compare-feature">对比项</div>
            <div class="compare-cell">传统文件夹</div>
            <div class="compare-cell">云端相册</div>
            <div class="compare-cell compare-highlight">觅影随笔</div>
          </div>
          <div class="compare-row" v-for="item in compareData" :key="item.feature">
            <div class="compare-cell compare-feature">{{ item.feature }}</div>
            <div class="compare-cell">
              <span v-if="item.folder === 'yes'" class="compare-yes">✓</span>
              <span v-else-if="item.folder === 'no'" class="compare-no">✗</span>
              <span v-else class="compare-mid">{{ item.folder }}</span>
            </div>
            <div class="compare-cell">
              <span v-if="item.cloud === 'yes'" class="compare-yes">✓</span>
              <span v-else-if="item.cloud === 'no'" class="compare-no">✗</span>
              <span v-else class="compare-mid">{{ item.cloud }}</span>
            </div>
            <div class="compare-cell compare-highlight">
              <span v-if="item.seek === 'yes'" class="compare-yes">✓</span>
              <span v-else-if="item.seek === 'no'" class="compare-no">✗</span>
              <span v-else class="compare-mid">{{ item.seek }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 隐私 -->
    <section class="privacy">
      <div class="container">
        <div class="privacy-grid">
          <div class="privacy-item">
            <div class="privacy-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3>本地存储</h3>
            <p>照片信息、人物数据都保存在你的电脑上</p>
          </div>
          <div class="privacy-item">
            <div class="privacy-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>无需联网</h3>
            <p>首次下载 AI 功能后，不联网也能正常使用</p>
          </div>
          <div class="privacy-item">
            <div class="privacy-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3>隐私可控</h3>
            <p>数据处理方式完全透明，你的照片始终由你掌控</p>
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
            下载 for Windows
          </router-link>
          <span class="cta-note">支持 Windows 10/11 · 约 60MB</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const features: { title: string; desc: string; icon: string }[] = [
  {
    title: '文字找图',
    desc: '输入一句话描述，AI 理解语义并找到匹配照片。支持中文搜索，像聊天一样自然。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  },
  {
    title: '人物分类',
    desc: '自动识别照片中的人脸，把同一个人的照片归到一起。家人朋友的照片轻松找到。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    title: '时间线浏览',
    desc: '按拍摄时间自动整理照片，年月分组快速定位，重温每个时刻的回忆。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    title: '照片地图',
    desc: '在地图上查看带 GPS 位置的照片，旅行足迹一目了然，地理位置快速定位。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  },
  {
    title: '标签管理',
    desc: '给照片添加自定义标签，按主题分类整理，配合搜索快速找到目标照片。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>'
  },
  {
    title: '相册整理',
    desc: '创建自定义相册，按主题或项目归类照片，批量导出分享，整理井井有条。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
  }
]

const scenarios: { title: string; desc: string; icon: string }[] = [
  {
    title: '整理旅行照片',
    desc: '旅行回来照片太多？用文字描述就能找到想要的那张，还能在地图上重温足迹。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  },
  {
    title: '记录宝宝成长',
    desc: '宝宝每天都在长大，用人脸识别把所有照片归到一起，见证每一个珍贵瞬间。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    title: '管理工作素材',
    desc: '作品图、设计稿、参考图混杂在一起？用标签和相册分类，快速找到需要的素材。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
  },
  {
    title: '回忆特殊时刻',
    desc: '生日、纪念日、毕业典礼...用时间线快速回到那一天，重温美好回忆。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  }
]

const compareData = [
  { feature: 'AI 语义搜索', folder: 'no', cloud: '部分', seek: 'yes' },
  { feature: '人脸识别分类', folder: 'no', cloud: 'yes', seek: 'yes' },
  { feature: '照片地图定位', folder: 'no', cloud: '部分', seek: 'yes' },
  { feature: '数据隐私保护', folder: 'yes', cloud: 'no', seek: 'yes' },
  { feature: '不限照片数量', folder: 'yes', cloud: 'no', seek: 'yes' },
  { feature: '离线使用', folder: 'yes', cloud: 'no', seek: 'yes' },
  { feature: '自动整理分类', folder: 'no', cloud: '部分', seek: 'yes' },
]

const keywords = ['海边的日落', '宝宝的笑容', '穿红衣服的人', '城市夜景', '可爱的猫咪', '春天的花朵', '山间小屋', '咖啡时光']
const currentKeyword = ref('')
let keywordIndex = 0
let charIndex = 0
let typeTimer: ReturnType<typeof setTimeout> | null = null
let pauseTimer: ReturnType<typeof setTimeout> | null = null

const base = import.meta.env.BASE_URL

const thumbImages = [
  `${base}images/sunset.jpg`,
  `${base}images/baby.jpg`,
  `${base}images/red-dress.jpg`,
  `${base}images/city-night.jpg`,
  `${base}images/cat.jpg`,
  `${base}images/flowers.jpg`,
  `${base}images/mountain.jpg`,
  `${base}images/coffee.jpg`,
]

const typeKeyword = () => {
  const target = keywords[keywordIndex]
  if (charIndex <= target.length) {
    currentKeyword.value = target.slice(0, charIndex)
    charIndex++
    typeTimer = setTimeout(typeKeyword, 120)
  } else {
    pauseTimer = setTimeout(() => {
      charIndex = 0
      keywordIndex = (keywordIndex + 1) % keywords.length
      typeKeyword()
    }, 2000)
  }
}

onMounted(() => {
  typeKeyword()
})

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer)
  if (pauseTimer) clearTimeout(pauseTimer)
})
</script>

<style scoped>
/* Hero */
.hero {
  padding: 180px 0 120px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
}

.hero-content {
  max-width: 760px;
  margin: 0 auto;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 13px;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 24px;
}

.hero-title {
  font-family: var(--font-sans);
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.hero-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 56px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-num {
  font-family: var(--font-sans);
  font-size: 32px;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border);
}

/* Features */
.features {
  padding: 120px 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  transition: all 0.2s ease;
}

.feature-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--primary);
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
}

/* Demo */
.demo {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.demo-app {
  max-width: 720px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-lg);
}

.demo-search-box {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 560px;
  margin: 0 auto;
  padding: 4px 4px 4px 18px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  transition: all 0.2s ease;
}

.demo-search-box:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px var(--primary-light);
}

.demo-search-box .search-icon {
  color: var(--text-muted);
}

.demo-text {
  flex: 1;
  font-size: 15px;
  color: var(--text-primary);
}

.demo-cursor {
  width: 2px;
  height: 18px;
  background: var(--primary);
  animation: blink 1s infinite;
}

.demo-search-btn {
  padding: 10px 20px;
  background: var(--primary);
  color: #ffffff;
  border: none;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.demo-tags {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 16px 0 24px;
  flex-wrap: wrap;
}

.demo-tags-label {
  font-size: 13px;
  color: var(--text-muted);
}

.demo-tag {
  font-size: 13px;
  padding: 5px 12px;
  background: var(--bg);
  border-radius: 999px;
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.demo-results {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.demo-result-card {
  background: var(--bg);
  border-radius: var(--radius);
  overflow: hidden;
  animation: fadeIn 0.4s ease both;
  transition: all 0.2s ease;
}

.demo-result-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.demo-card-image {
  position: relative;
  aspect-ratio: 1;
  background: var(--bg-tertiary);
  overflow: hidden;
}

.demo-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.demo-card-score {
  position: absolute;
  bottom: 8px;
  left: 8px;
  padding: 3px 8px;
  background: rgba(15, 23, 42, 0.75);
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 999px;
}

.demo-card-info {
  padding: 10px;
}

.demo-card-name {
  font-size: 12px;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}

.demo-card-meta {
  font-size: 11px;
  color: var(--text-muted);
}

/* Scenarios */
.scenarios {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.scenario-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  transition: all 0.2s ease;
}

.scenario-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.scenario-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--primary);
}

.scenario-card h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
}

.scenario-card p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
}

/* Compare */
.compare {
  padding: 120px 0;
}

.compare-table {
  max-width: 880px;
  margin: 48px auto 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-elevated);
}

.compare-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--border);
}

.compare-row:last-child {
  border-bottom: none;
}

.compare-row.compare-header {
  background: var(--bg);
  font-weight: 600;
  font-size: 15px;
}

.compare-cell {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--text-secondary);
}

.compare-cell.compare-feature {
  justify-content: flex-start;
  color: var(--text-primary);
  font-weight: 500;
}

.compare-cell.compare-highlight {
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 500;
}

.compare-row.compare-header .compare-cell.compare-highlight {
  color: var(--primary);
}

.compare-yes {
  color: var(--success);
  font-weight: 700;
  font-size: 18px;
}

.compare-no {
  color: var(--text-muted);
  font-size: 18px;
}

.compare-mid {
  font-size: 13px;
}

/* Privacy */
.privacy {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.privacy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.privacy-item {
  text-align: center;
  padding: 40px 24px;
}

.privacy-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--primary);
}

.privacy-item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.privacy-item p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
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

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Responsive */
@media (max-width: 968px) {
  .feature-grid,
  .privacy-grid {
    grid-template-columns: 1fr;
  }

  .scenario-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 140px 0 80px;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-subtitle br {
    display: none;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    gap: 20px;
  }

  .stat-num {
    font-size: 26px;
  }

  .features,
  .demo,
  .privacy,
  .scenarios,
  .compare {
    padding: 80px 0;
  }

  .demo-results {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-app {
    padding: 20px;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
  }

  .compare-table {
    font-size: 13px;
  }

  .compare-cell {
    padding: 10px 8px;
  }

  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}
</style>
