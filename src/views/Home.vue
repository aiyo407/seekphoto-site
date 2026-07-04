<template>
  <div class="home">
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="hero-bg">
        <div class="grid-overlay"></div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-badge">开源 · 免费 · 本地优先</div>
        <h1 class="hero-title">
          <span class="gradient-text">用一句话</span><br>
          找到那张照片
        </h1>
        <p class="hero-subtitle">
          觅影 SeekPhoto 是一款基于 AI 的智能图片搜索管理工具<br>
          支持语义搜索、人脸识别、时间线浏览，所有数据本地存储
        </p>
        <div class="hero-actions">
          <router-link to="/download" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            免费下载
          </router-link>
          <a href="https://github.com/aiyo407/seekphoto" target="_blank" class="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- 核心特性 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">核心特性</h2>
        <p class="section-desc">三大 AI 能力，让图片管理变得简单</p>
        <div class="feature-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.title">
            <div class="feature-icon" v-html="feature.icon"></div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
            <div class="feature-example">{{ feature.example }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 搜索演示 -->
    <section class="demo">
      <div class="container">
        <h2 class="section-title">体验语义搜索</h2>
        <p class="section-desc">输入自然语言描述，AI 帮你找到匹配的图片</p>
        <div class="demo-box">
          <div class="demo-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span class="demo-text">{{ currentKeyword }}</span>
            <span class="demo-cursor">|</span>
          </div>
          <div class="demo-results">
            <div class="demo-result-item" v-for="i in 6" :key="i" :style="{ animationDelay: `${i * 0.1}s` }">
              <div class="demo-thumb" :style="{ background: thumbColors[i-1] }"></div>
              <div class="demo-score">{{ (95 - i * 5) }}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 隐私承诺 -->
    <section class="privacy">
      <div class="container">
        <div class="privacy-card">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <h2>隐私至上</h2>
          <p>所有数据本地存储，不上传云端<br>你的照片，只属于你</p>
          <div class="privacy-tags">
            <span>本地存储</span>
            <span>无需联网</span>
            <span>数据自主</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 下载 CTA -->
    <section class="cta">
      <div class="container">
        <h2>开始使用觅影</h2>
        <p>免费下载，即刻体验 AI 图片搜索</p>
        <router-link to="/download" class="btn btn-primary btn-large">
          下载 for Windows
        </router-link>
        <span class="cta-note">支持 Windows 10/11 · 约 150MB</span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const features = [
  {
    title: '语义搜索',
    desc: '用自然语言描述你想找的图片，AI 理解语义并返回匹配结果。支持中英文混合搜索。',
    example: '"海边的日落" · "穿红衣服的人" · "可爱的猫咪"',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  },
  {
    title: '人脸识别',
    desc: '自动检测照片中的人脸，按人物聚合分类。点击人物即可查看所有相关照片。',
    example: '自动识别人脸 · 按人物分组 · 智能缩略图',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    title: '时间线浏览',
    desc: '按拍摄时间自动整理照片，支持 EXIF 信息提取，快速定位历史照片。',
    example: 'EXIF 提取 · 拍摄时间 · 相机型号 · GPS 定位',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  }
]

const keywords = ['海边的日落', '穿红衣服的人', '城市夜景', '可爱的猫咪', '春天的花朵']
const currentKeyword = ref('')
let keywordIndex = 0
let charIndex = 0
let typeTimer: ReturnType<typeof setTimeout> | null = null
let pauseTimer: ReturnType<typeof setTimeout> | null = null

const thumbColors = [
  'linear-gradient(135deg, #ff6b6b, #ee5a24)',
  'linear-gradient(135deg, #4ecdc4, #44bd9e)',
  'linear-gradient(135deg, #a29bfe, #6c5ce7)',
  'linear-gradient(135deg, #fdcb6e, #e17055)',
  'linear-gradient(135deg, #00cec9, #0984e3)',
  'linear-gradient(135deg, #fd79a8, #e84393)',
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
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 217, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 217, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
}

.glow-1 {
  width: 600px;
  height: 600px;
  background: rgba(0, 217, 255, 0.08);
  top: -200px;
  right: -100px;
}

.glow-2 {
  width: 400px;
  height: 400px;
  background: rgba(0, 153, 204, 0.06);
  bottom: -100px;
  left: -100px;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 80px;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 32px;
  animation: fadeInUp 0.8s ease;
}

.hero-title {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 72px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), #66efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  animation: fadeInUp 0.8s ease 0.6s both;
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

.section-title {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
}

.section-desc {
  text-align: center;
  color: var(--text-secondary);
  font-size: 18px;
  margin-bottom: 60px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 40px 32px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(0, 217, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--primary);
}

.feature-card h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.feature-example {
  font-size: 13px;
  color: var(--primary);
  padding: 10px 16px;
  background: rgba(0, 217, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(0, 217, 255, 0.1);
}

/* Demo */
.demo {
  padding: 120px 0;
}

.demo-box {
  max-width: 700px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.demo-search {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
}

.demo-text {
  font-size: 18px;
  color: var(--text-primary);
  min-width: 200px;
}

.demo-cursor {
  color: var(--primary);
  animation: blink 1s infinite;
}

.demo-results {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 24px;
}

.demo-result-item {
  border-radius: 8px;
  overflow: hidden;
  animation: fadeIn 0.5s ease both;
}

.demo-thumb {
  aspect-ratio: 1;
  border-radius: 8px;
}

.demo-score {
  text-align: center;
  font-size: 12px;
  color: var(--primary);
  padding: 6px 0;
}

/* Privacy */
.privacy {
  padding: 80px 0;
}

.privacy-card {
  text-align: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 80px 40px;
}

.privacy-card h2 {
  font-size: 36px;
  margin: 24px 0 16px;
}

.privacy-card p {
  color: var(--text-secondary);
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 32px;
}

.privacy-tags {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.privacy-tags span {
  padding: 8px 20px;
  border-radius: 20px;
  background: rgba(0, 217, 255, 0.1);
  color: var(--primary);
  font-size: 14px;
  border: 1px solid rgba(0, 217, 255, 0.2);
}

/* CTA */
.cta {
  padding: 120px 0;
  text-align: center;
}

.cta h2 {
  font-family: 'Outfit', 'Noto Sans SC', sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
}

.cta p {
  color: var(--text-secondary);
  font-size: 18px;
  margin-bottom: 32px;
}

.btn-large {
  padding: 18px 48px;
  font-size: 18px;
}

.cta-note {
  display: block;
  margin-top: 16px;
  color: var(--text-secondary);
  font-size: 14px;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Responsive */
@media (max-width: 768px) {
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
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .demo-results {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
