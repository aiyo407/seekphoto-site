<template>
  <div class="guide-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="badge">{{ t('guide.badge') }}</span>
        <h1>{{ t('guide.heroTitle') }}</h1>
        <p>{{ t('guide.heroDesc') }}</p>
      </div>
    </section>

    <!-- 快速上手 -->
    <section class="quick-start">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('guide.quickLabel') }}</span>
          <h2 class="section-title">{{ t('guide.quickTitle') }}</h2>
          <p class="section-desc">{{ t('guide.quickDesc') }}</p>
        </div>

        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in steps" :key="step.title">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon" v-html="step.icon"></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 进阶技巧 -->
    <section class="tips">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('guide.tipsLabel') }}</span>
          <h2 class="section-title">{{ t('guide.tipsTitle') }}</h2>
          <p class="section-desc">{{ t('guide.tipsDesc') }}</p>
        </div>

        <div class="tips-grid">
          <div class="tip-card" v-for="tip in tips" :key="tip.title">
            <div class="tip-icon" v-html="tip.icon"></div>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 搜索语法示例 -->
    <section class="search-examples">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('guide.examplesLabel') }}</span>
          <h2 class="section-title">{{ t('guide.examplesTitle') }}</h2>
          <p class="section-desc">{{ t('guide.examplesDesc') }}</p>
        </div>

        <div class="examples-grid">
          <div class="example-card" v-for="group in searchExamples" :key="group.category">
            <div class="example-header">
              <span class="example-icon" v-html="group.icon"></span>
              <h3>{{ group.category }}</h3>
            </div>
            <div class="example-tags">
              <span class="example-tag" v-for="tag in group.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="faq">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ t('guide.faqLabel') }}</span>
          <h2 class="section-title">{{ t('guide.faqTitle') }}</h2>
          <p class="section-desc">{{ t('guide.faqDesc') }}</p>
        </div>

        <div class="faq-list">
          <div class="faq-item" v-for="item in faqs" :key="item.q">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>{{ t('guide.ctaTitle') }}</h2>
          <p>{{ t('guide.ctaDesc') }}</p>
          <router-link :to="loc('/download')" class="btn btn-primary btn-large">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {{ t('common.download') }}
          </router-link>
          <span class="cta-note">{{ t('guide.ctaNote') }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { localeFromPath, localizedPath } from '../i18n'

const { t, tm } = useI18n({ useScope: 'global' })
const route = useRoute()
const currentLocale = localeFromPath(route.path)
const loc = (b: string) => localizedPath(b, currentLocale)

// 图标按 key 映射（语言无关）
const stepIcons: Record<string, string> = {
  install: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  setup: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',
  index: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><polyline points="21 4 21 10 15 10"/></svg>',
  search: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
}
const tipIcons: Record<string, string> = {
  imageSearch: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  ocr: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  calendar: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  cleanup: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  map: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  album: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
}
const exampleIcons: Record<string, string> = {
  scene: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2 4 4 8-8 4 4"/><path d="M3 21h18"/></svg>',
  people: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  object: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  color: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  time: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  text: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
}

const steps = computed(() =>
  (tm('guide.steps') as unknown as any[]).map((s) => ({ ...s, icon: stepIcons[s.key] }))
)

const tips = computed(() =>
  (tm('guide.tips') as unknown as any[]).map((s) => ({ ...s, icon: tipIcons[s.key] }))
)

const searchExamples = computed(() =>
  (tm('guide.searchExamples') as unknown as any[]).map((s) => ({ ...s, icon: exampleIcons[s.key] }))
)

const faqs = computed(() => tm('guide.faqs') as unknown as any[])
</script>

<style scoped>
/* Page Hero */
.page-hero {
  padding: 160px 0 80px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
}

.page-hero .badge {
  display: inline-block;
  padding: 6px 16px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 13px;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 20px;
}

.page-hero h1 {
  font-family: var(--font-sans);
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.page-hero p {
  font-size: 18px;
  color: var(--text-secondary);
}

/* 快速上手 */
.quick-start {
  padding: 120px 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.step-card {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  transition: all 0.2s ease;
}

.step-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.step-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: var(--font-sans);
  font-size: 40px;
  font-weight: 700;
  color: var(--primary-light);
  line-height: 1;
}

.step-icon {
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

.step-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.step-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 进阶技巧 */
.tips {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.tip-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  transition: all 0.2s ease;
}

.tip-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.tip-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary);
}

.tip-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.tip-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 搜索语法示例 */
.search-examples {
  padding: 120px 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.example-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all 0.2s ease;
}

.example-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
}

.example-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.example-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.example-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.example-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.example-tag {
  font-size: 13px;
  padding: 6px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-secondary);
  transition: all 0.15s ease;
  cursor: default;
}

.example-tag:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
}

/* 常见问题 */
.faq {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.faq-list {
  max-width: 760px;
  margin: 0 auto;
}

.faq-item {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px 28px;
  margin-bottom: 16px;
  transition: all 0.2s ease;
}

.faq-item:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow);
}

.faq-item:last-child {
  margin-bottom: 0;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.faq-item h3::before {
  content: 'Q';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.faq-item p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-left: 30px;
}

/* CTA */
.cta {
  padding: 120px 0;
}

.cta-card {
  text-align: center;
  background: var(--brand-gradient);
  border-radius: var(--radius-xl);
  padding: 72px 40px;
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
  opacity: 0.85;
}

/* Responsive */
@media (max-width: 968px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 130px 0 60px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .page-hero p {
    font-size: 16px;
  }

  .quick-start,
  .tips,
  .search-examples,
  .faq,
  .cta {
    padding: 80px 0;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    padding: 28px 20px;
  }

  .step-number {
    font-size: 32px;
    top: 16px;
    right: 16px;
  }

  .tip-card,
  .example-card {
    padding: 24px 20px;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item p {
    padding-left: 0;
  }

  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
