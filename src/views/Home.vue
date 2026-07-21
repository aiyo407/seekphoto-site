<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="badge">免费 · 本地运行</span>
          <h1 class="hero-title">
            用一句话，<br>找到那张照片
          </h1>
          <p class="hero-subtitle">
            觅影 SeekPhoto 是一款 AI 图片管理工具。<br>
            支持文字找图、时间线浏览，所有数据只存储在你的电脑上。
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
            <a href="https://github.com/aiyo407/seekphoto-site" target="_blank" class="btn btn-secondary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
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
          <p class="section-desc">三大 AI 功能，帮你从海量照片中快速找到想要的那一张</p>
        </div>

        <div class="feature-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.title" :class="{ soon: feature.soon }">
            <div class="feature-icon" v-html="feature.icon"></div>
            <h3>{{ feature.title }}<span v-if="feature.soon" class="soon-badge">即将推出</span></h3>
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

const features: { title: string; desc: string; icon: string; soon?: boolean }[] = [
  {
    title: '文字找图',
    desc: '输入一句话描述你想找的照片，比如海边日落、宝宝的笑容，AI 就能帮你找到。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  },
  {
    title: '人物分类',
    desc: '自动识别照片中的人物，把同一个人的照片归到一起。点击人物即可查看所有相关照片。',
    soon: true,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    title: '时间线浏览',
    desc: '按拍摄时间自动整理照片，快速找到某个日期拍摄的照片，重温回忆。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  }
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
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
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
  display: flex;
  align-items: center;
  gap: 8px;
}

.soon-badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--primary);
  background: var(--primary-light);
  border-radius: 999px;
  white-space: nowrap;
}

.feature-card.soon {
  opacity: 0.7;
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

/* Privacy */
.privacy {
  padding: 120px 0;
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
  background: linear-gradient(135deg, var(--primary) 0%, #6366f1 100%);
  border-radius: var(--radius-xl);
  padding: 80px 40px;
  color: #ffffff;
}

.cta-card h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 36px;
  font-weight: 700;
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

  .features,
  .demo,
  .privacy {
    padding: 80px 0;
  }

  .demo-results {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-app {
    padding: 20px;
  }

  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}
</style>
