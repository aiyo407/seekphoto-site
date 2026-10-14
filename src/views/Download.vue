<template>
  <div class="download-page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('download.heroTitle') }}</h1>
        <p>{{ t('download.heroDesc') }}</p>
      </div>
    </section>

    <section class="download-section">
      <div class="container">
        <div class="download-card">
          <div class="download-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <h2>{{ t('download.cardTitle') }}</h2>
          <p class="version-info">{{ t('download.versionInfo', { v: APP_VERSION_DISPLAY }) }}</p>
          <a :href="DOWNLOAD_URL" class="btn btn-primary btn-large" @click="trackDownload">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {{ t('common.download') }}
          </a>
          <p class="download-note">{{ t('download.downloadNote') }}</p>
        </div>

        <!-- 系统要求 -->
        <div class="requirements">
          <div class="section-header">
            <span class="section-label">{{ t('download.reqLabel') }}</span>
            <h2 class="section-title">{{ t('download.reqTitle') }}</h2>
          </div>
          <div class="req-grid">
            <div class="req-card">
              <div class="req-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>{{ t('download.reqOs') }}</h3>
              <p>{{ t('download.reqOsDesc') }}</p>
            </div>
            <div class="req-card">
              <div class="req-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                  <rect x="9" y="9" width="6" height="6"/>
                  <line x1="9" y1="1" x2="9" y2="4"/>
                  <line x1="15" y1="1" x2="15" y2="4"/>
                  <line x1="9" y1="20" x2="9" y2="23"/>
                  <line x1="15" y1="20" x2="15" y2="23"/>
                  <line x1="20" y1="9" x2="23" y2="9"/>
                  <line x1="20" y1="14" x2="23" y2="14"/>
                  <line x1="1" y1="9" x2="4" y2="9"/>
                  <line x1="1" y1="14" x2="4" y2="14"/>
                </svg>
              </div>
              <h3>{{ t('download.reqCpu') }}</h3>
              <p>{{ t('download.reqCpuDesc') }}</p>
            </div>
            <div class="req-card">
              <div class="req-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>{{ t('download.reqMem') }}</h3>
              <p>{{ t('download.reqMemDesc') }}</p>
            </div>
            <div class="req-card">
              <div class="req-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>{{ t('download.reqDisk') }}</h3>
              <p>{{ t('download.reqDiskDesc') }}</p>
            </div>
          </div>
        </div>

        <!-- 安装指南 -->
        <div class="install-guide">
          <div class="section-header">
            <span class="section-label">{{ t('download.guideLabel') }}</span>
            <h2 class="section-title">{{ t('download.guideTitle') }}</h2>
          </div>
          <div class="steps">
            <div class="step" v-for="(step, index) in steps" :key="index">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="faq">
          <div class="section-header">
            <span class="section-label">{{ t('download.faqLabel') }}</span>
            <h2 class="section-title">{{ t('download.faqTitle') }}</h2>
          </div>
          <div class="faq-list">
            <div class="faq-item" v-for="(item, index) in faqs" :key="index">
              <h3>{{ item.q }}</h3>
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { trackEvent } from '../utils/analytics'
import { DOWNLOAD_URL, APP_VERSION_DISPLAY } from '../config/version'

const { t, tm } = useI18n({ useScope: 'global' })

// 百度统计：追踪下载点击事件
function trackDownload() {
  trackEvent('download', 'click', 'windows_setup')
}

const steps = computed(() => tm('download.steps') as unknown as any[])
const faqs = computed(() => tm('download.faqs') as unknown as any[])
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

.download-section {
  padding: 80px 0 120px;
}

.download-card {
  max-width: 560px;
  margin: 0 auto 100px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 56px 40px;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.download-icon {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-lg);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: var(--primary);
}

.download-card h2 {
  font-family: var(--font-sans);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.version-info {
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.btn-large {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.download-note {
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
}

/* Requirements */
.requirements {
  margin-bottom: 100px;
}

.req-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}

.req-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 20px;
  text-align: center;
  transition: all 0.2s ease;
}

.req-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
}

.req-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
  color: var(--primary);
}

.req-card h3 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
}

.req-card p {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Install Guide */
.install-guide {
  margin-bottom: 100px;
}

.steps {
  max-width: 640px;
  margin: 48px auto 0;
}

.step {
  display: flex;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.step:last-child {
  border-bottom: none;
}

.step-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 6px;
}

.step-content p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* FAQ */
.faq-list {
  max-width: 720px;
  margin: 48px auto 0;
}

.faq-item {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 16px;
}

.faq-item h3 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.faq-item p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 968px) {
  .req-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .download-card {
    padding: 40px 24px;
    margin-bottom: 80px;
  }

  .download-card h2 {
    font-size: 24px;
  }

  .req-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .step {
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .req-grid {
    grid-template-columns: 1fr;
  }
}
</style>
