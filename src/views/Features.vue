<template>
  <div class="features-page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('features.heroTitle') }}</h1>
        <p>{{ t('features.heroDesc') }}</p>
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
            {{ t(cat.labelKey) }}
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
              <span class="feature-item-tag" :class="feature.category">{{ t(feature.tag) }}</span>
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
            <span class="feature-tag">{{ t('features.tagCore') }}</span>
            <h2>{{ t('features.detailTextTitle') }}</h2>
            <p class="feature-desc">{{ t('features.detailTextDesc') }}</p>
            <ul class="feature-list">
              <li v-for="pt in tm('features.detailTextList')" :key="pt">{{ pt }}</li>
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

    <!-- 详细功能演示：以图搜图 -->
    <section class="feature-section alt">
      <div class="container">
        <div class="feature-row reverse">
          <div class="feature-text">
            <span class="feature-tag">{{ t('features.tagCore') }}</span>
            <h2>{{ t('features.detailImageTitle') }}</h2>
            <p class="feature-desc">{{ t('features.detailImageDesc') }}</p>
            <ul class="feature-list">
              <li v-for="pt in tm('features.detailImageList')" :key="pt">{{ pt }}</li>
            </ul>
          </div>
          <div class="feature-visual">
            <div class="visual-card visual-sidebar">
              <div class="visual-sidebar-header">
                <span>{{ t('features.demoSimilar') }}</span>
                <span class="visual-count">{{ t('features.demoCount') }}</span>
              </div>
              <div class="person-list">
                <div class="person-item" v-for="i in 5" :key="i" :class="{ selected: i === 1 }">
                  <div class="person-avatar" :style="{ background: getFaceGradient(i) }">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                  <div class="person-info">
                    <span class="person-name">photo_0{{ i }}</span>
                    <span class="person-count">{{ 95 - i * 3 }}% 相似</span>
                  </div>
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
          <span class="section-label">{{ t('features.techLabel') }}</span>
          <h2 class="section-title">{{ t('features.techTitle') }}</h2>
          <p class="section-desc">{{ t('features.techDesc') }}</p>
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
          <h2>{{ t('features.ctaTitle') }}</h2>
          <p>{{ t('features.ctaDesc') }}</p>
          <router-link :to="loc('/download')" class="btn btn-primary btn-large">
            {{ t('common.downloadWindows') }}
          </router-link>
          <span class="cta-note">{{ t('features.ctaNote') }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { localeFromPath, localizedPath } from '../i18n'

type Category = 'core' | 'advanced' | 'tool'

const { t, tm } = useI18n({ useScope: 'global' })
const route = useRoute()
const currentLocale = localeFromPath(route.path)
const loc = (b: string) => localizedPath(b, currentLocale)

// 分类标签（文案走 i18n）
const categories = [
  { key: 'all' as const, labelKey: 'features.catAll' },
  { key: 'core' as const, labelKey: 'features.catCore' },
  { key: 'advanced' as const, labelKey: 'features.catAdvanced' },
  { key: 'tool' as const, labelKey: 'features.catTool' },
]

const activeCategory = ref<'all' | Category>('all')

// 每个功能的「分类 / 标签 / 图标」是语言无关的，留在组件内
const featureMeta: Record<string, { category: Category; tagKey: string; icon: string }> = {
  textSearch: { category: 'core', tagKey: 'features.tagCore', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
  ocr: { category: 'advanced', tagKey: 'features.tagAdvanced', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="14" y2="17"/></svg>' },
  timeline: { category: 'core', tagKey: 'features.tagCore', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
  map: { category: 'core', tagKey: 'features.tagCore', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' },
  tags: { category: 'core', tagKey: 'features.tagCore', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>' },
  albums: { category: 'core', tagKey: 'features.tagCore', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' },
  imageSearch: { category: 'advanced', tagKey: 'features.tagAdvanced', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' },
  dedup: { category: 'advanced', tagKey: 'features.tagAdvanced', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="13" height="13"/><rect x="8" y="8" width="13" height="13"/></svg>' },
  export: { category: 'tool', tagKey: 'features.tagTool', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' },
  history: { category: 'tool', tagKey: 'features.tagTool', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>' },
}

const features = computed(() =>
  (tm('features.features') as unknown as any[]).map((f) => {
    const m = featureMeta[f.key]
    return { ...f, category: m.category, tag: m.tagKey, icon: m.icon }
  })
)

const filteredFeatures = computed(() => {
  if (activeCategory.value === 'all') return features.value
  return features.value.filter((f) => f.category === activeCategory.value)
})

const getFeaturesByCategory = (cat: string) => {
  if (cat === 'all') return features.value
  return features.value.filter((f) => f.category === cat)
}

// 技术优势图标（按 key）
const techIcons: Record<string, string> = {
  local: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  privacy: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  talk: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  auto: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  timeline: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  update: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
}
const techs = computed(() =>
  (tm('features.techs') as unknown as any[]).map((tc) => ({ ...tc, icon: techIcons[tc.key] }))
)

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
