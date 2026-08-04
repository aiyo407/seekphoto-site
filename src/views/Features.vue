<template>
  <div class="features-page">
    <section class="page-hero">
      <div class="container">
        <h1>核心功能</h1>
        <p>八大智能功能，帮你轻松管理海量照片</p>
      </div>
    </section>

    <!-- 功能分类导航 -->
    <section class="feature-nav">
      <div class="container">
        <div class="nav-tabs">
          <button
            v-for="cat in categories"
            :key="cat.key"
            :class="['nav-tab', { active: activeCategory === cat.key }]"
            @click="activeCategory = cat.key"
          >
            {{ cat.label }}
            <span class="tab-count">{{ getFeaturesByCategory(cat.key).length }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 功能卡片网格 -->
    <section class="feature-cards-section">
      <div class="container">
        <div class="feature-cards-grid">
          <div
            class="feature-item"
            v-for="feature in filteredFeatures"
            :key="feature.title"
          >
            <div class="feature-item-icon" v-html="feature.icon"></div>
            <div class="feature-item-content">
              <span class="feature-item-tag" :class="feature.category">{{ feature.tag }}</span>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
              <ul class="feature-item-list">
                <li v-for="point in feature.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 详细功能演示：文字找图 -->
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
              <li>支持中文自然语言搜索</li>
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

    <!-- 详细功能演示：人物分类 -->
    <section class="feature-section alt">
      <div class="container">
        <div class="feature-row reverse">
          <div class="feature-text">
            <span class="feature-tag">扩展功能</span>
            <h2>人物分类</h2>
            <p class="feature-desc">
              自动识别照片中的人物，把同一个人的照片归到一起。
              家人、朋友、同事的照片，都能轻松找到。
            </p>
            <ul class="feature-list">
              <li>自动生成每个人的头像</li>
              <li>同一个人的照片自动归为一组</li>
              <li>可以给每个人自定义名字</li>
              <li>支持合并和拆分人物</li>
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

    <!-- 详细功能演示：照片地图 -->
    <section class="feature-section">
      <div class="container">
        <div class="feature-row">
          <div class="feature-text">
            <span class="feature-tag">核心功能</span>
            <h2>照片地图</h2>
            <p class="feature-desc">
              在地图上查看带有 GPS 位置的照片，旅行足迹一目了然。
              点击地图上的标记，快速查看该位置拍摄的所有照片。
            </p>
            <ul class="feature-list">
              <li>自动读取照片 GPS 信息</li>
              <li>在地图上显示拍照位置</li>
              <li>点击标记查看该位置照片</li>
              <li>重温旅行足迹</li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="visual-card visual-map">
              <div class="map-placeholder">
                <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
                  <rect width="200" height="160" fill="var(--bg)"/>
                  <path d="M0 80 Q50 60 100 80 T200 80" stroke="var(--border)" stroke-width="2" fill="none"/>
                  <path d="M0 120 Q50 100 100 120 T200 120" stroke="var(--border)" stroke-width="2" fill="none"/>
                  <circle cx="40" cy="50" r="6" fill="var(--primary)"/>
                  <circle cx="90" cy="70" r="6" fill="var(--primary)"/>
                  <circle cx="140" cy="45" r="6" fill="var(--primary)"/>
                  <circle cx="170" cy="100" r="6" fill="var(--primary)"/>
                  <circle cx="60" cy="120" r="6" fill="var(--primary)"/>
                </svg>
                <div class="map-info">
                  <span>5 个位置 · 28 张照片</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性优势 -->
    <section class="tech-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">特性优势</span>
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
import { ref, computed } from 'vue'

type Category = 'core' | 'advanced' | 'tool'

interface Feature {
  title: string
  desc: string
  icon: string
  category: Category
  tag: string
  points: string[]
}

const categories = [
  { key: 'all' as const, label: '全部功能' },
  { key: 'core' as const, label: '核心功能' },
  { key: 'advanced' as const, label: '扩展功能' },
  { key: 'tool' as const, label: '实用工具' },
]

const activeCategory = ref<'all' | Category>('all')

const features: Feature[] = [
  {
    title: '文字找图',
    desc: '输入一句话描述，AI 理解语义并找到匹配照片。支持中文搜索，像聊天一样自然。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    category: 'core',
    tag: '核心',
    points: ['中文自然语言', '语义理解', '毫秒级响应']
  },
  {
    title: '人物分类',
    desc: '自动识别照片中的人脸，把同一个人的照片归到一起。家人朋友的照片轻松找到。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    category: 'advanced',
    tag: '扩展',
    points: ['人脸识别', '自动分组', '自定义命名']
  },
  {
    title: '时间线浏览',
    desc: '按拍摄时间自动整理照片，年月分组快速定位，重温每个时刻的回忆。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    category: 'core',
    tag: '核心',
    points: ['年月分组', '快速定位', '文件名识别']
  },
  {
    title: '照片地图',
    desc: '在地图上查看带 GPS 位置的照片，旅行足迹一目了然，地理位置快速定位。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    category: 'core',
    tag: '核心',
    points: ['GPS 定位', '足迹可视化', '位置筛选']
  },
  {
    title: '标签管理',
    desc: '给照片添加自定义标签，按主题分类整理，配合搜索快速找到目标照片。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    category: 'core',
    tag: '核心',
    points: ['自定义标签', '主题分类', '快速筛选']
  },
  {
    title: '相册整理',
    desc: '创建自定义相册，按主题或项目归类照片，批量导出分享，整理井井有条。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    category: 'core',
    tag: '核心',
    points: ['自定义相册', '批量管理', '一键导出']
  },
  {
    title: '以图搜图',
    desc: '用一张照片找到相似的照片，快速定位同场景、同主题的图片。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    category: 'advanced',
    tag: '扩展',
    points: ['相似搜索', '视觉匹配', '快速定位']
  },
  {
    title: '相似照片去重',
    desc: '自动识别重复或高度相似的照片，帮你清理冗余，节省存储空间。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="13" height="13"/><rect x="8" y="8" width="13" height="13"/></svg>',
    category: 'advanced',
    tag: '扩展',
    points: ['重复检测', '智能识别', '一键清理']
  },
  {
    title: '批量导出',
    desc: '选中多张照片批量导出，支持原图和缩略图，方便分享和备份。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    category: 'tool',
    tag: '工具',
    points: ['批量操作', '原图导出', '快速分享']
  },
  {
    title: '搜索历史',
    desc: '自动记录搜索历史，一键重复搜索，节省输入时间。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>',
    category: 'tool',
    tag: '工具',
    points: ['历史记录', '一键重搜', '快速访问']
  }
]

const filteredFeatures = computed(() => {
  if (activeCategory.value === 'all') return features
  return features.filter(f => f.category === activeCategory.value)
})

const getFeaturesByCategory = (cat: string) => {
  if (cat === 'all') return features
  return features.filter(f => f.category === cat)
}

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
    'var(--brand-gradient)',
    'linear-gradient(135deg, #5B53E8, #7C3AED)',
    'linear-gradient(135deg, #6366F1, #8B5CF6)',
    'linear-gradient(135deg, #8B5CF6, #A855F7)',
    'linear-gradient(135deg, #7C3AED, #6366F1)',
    'linear-gradient(135deg, #5B53E8, #8B5CF6)',
  ]
  return gradients[i - 1]
}
</script>

<style scoped>
.page-hero {
  padding: 160px 0 60px;
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

/* 功能分类导航 */
.feature-nav {
  padding: 32px 0;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 72px;
  z-index: 10;
}

.nav-tabs {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--bg);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-tab:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.nav-tab.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
}

.tab-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 999px;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: 11px;
  font-weight: 600;
}

.nav-tab.active .tab-count {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

/* 功能卡片网格 */
.feature-cards-section {
  padding: 64px 0;
}

.feature-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-item {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: all 0.2s ease;
}

.feature-item:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.feature-item-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary);
}

.feature-item-content {
  position: relative;
}

.feature-item-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-item-tag.core {
  background: var(--primary-light);
  color: var(--primary);
}

.feature-item-tag.advanced {
  background: #FEF3C7;
  color: #D97706;
}

.feature-item-tag.tool {
  background: #E0E7FF;
  color: #4338CA;
}

.feature-item h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.feature-item p {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 16px;
}

.feature-item-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.feature-item-list li {
  padding: 3px 10px;
  background: var(--bg);
  border-radius: 999px;
  font-size: 12px;
  color: var(--text-secondary);
}

/* 详细功能演示 */
.feature-section {
  padding: 100px 0;
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
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
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

/* 地图演示 */
.visual-map {
  padding: 0;
  overflow: hidden;
}

.map-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: var(--bg);
  min-height: 280px;
}

.map-info {
  margin-top: 16px;
  padding: 8px 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 13px;
  color: var(--text-secondary);
}

/* 特性优势 */
.tech-section {
  padding: 100px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.tech-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  transition: all 0.2s ease;
}

.tech-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.tech-icon {
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

.tech-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.tech-card p {
  color: var(--text-secondary);
  font-size: 14px;
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

/* Responsive */
@media (max-width: 968px) {
  .feature-cards-grid,
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 40px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .feature-nav {
    top: 64px;
    padding: 20px 0;
  }

  .nav-tabs {
    overflow-x: auto;
    justify-content: flex-start;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .nav-tab {
    flex-shrink: 0;
  }

  .feature-cards-grid,
  .tech-grid {
    grid-template-columns: 1fr;
  }

  .feature-section,
  .tech-section {
    padding: 64px 0;
  }

  .feature-text h2 {
    font-size: 28px;
  }

  .feature-row.reverse {
    direction: ltr;
  }

  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}
</style>
