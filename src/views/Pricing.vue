<template>
  <div class="pricing-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="badge">{{ c.pricing.badge }}</span>
        <h1>{{ c.pricing.heroTitle }}</h1>
        <p>{{ c.pricing.heroDesc }}</p>
      </div>
    </section>

    <!-- 三档方案 -->
    <section class="plans">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ c.pricing.plansTitle }}</h2>
          <p class="section-desc">{{ c.pricing.plansDesc }}</p>
        </div>

        <div class="plan-grid">
          <div
            v-for="p in plans"
            :key="p.key"
            class="plan-card"
            :class="{ 'plan-card--pro': p.key === 'pro' }"
          >
            <div class="plan-head">
              <span class="plan-name">{{ p.name }}</span>
              <span v-if="p.key === 'pro'" class="plan-flag">{{ c.pricing.popular }}</span>
            </div>
            <div class="plan-price">
              <span class="plan-price-current">{{ p.price }}</span>
              <span v-if="p.originalPrice" class="plan-price-original">{{ p.originalPrice }}</span>
            </div>
            <span class="plan-period">{{ p.period }}</span>
            <p class="plan-desc">{{ p.desc }}</p>
            <ul class="plan-features">
              <li v-for="f in p.features" :key="f">
                <svg
                  class="check-ico"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="promo-note">{{ c.pricing.promoNote }}</p>
      </div>
    </section>

    <!-- 功能对比表 -->
    <section class="compare">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ c.pricing.compareTitle }}</h2>
          <p class="section-desc">{{ c.pricing.compareDesc }}</p>
        </div>

        <div class="compare-table">
          <div class="compare-row compare-row--head">
            <span class="compare-feature"></span>
            <span class="compare-cell">{{ c.pricing.free.name }}</span>
            <span class="compare-cell">{{ c.pricing.standard.name }}</span>
            <span class="compare-cell compare-cell--pro">{{ c.pricing.pro.name }}</span>
          </div>
          <div v-for="row in c.pricing.compareRows" :key="row.feature" class="compare-row">
            <span class="compare-feature">{{ row.feature }}</span>
            <span class="compare-cell">{{ row.free }}</span>
            <span class="compare-cell">{{ row.standard }}</span>
            <span class="compare-cell compare-cell--pro">{{ row.pro }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 购买与授权 FAQ -->
    <section class="faq">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ c.pricing.faqTitle }}</h2>
        </div>
        <div class="faq-list">
          <div v-for="f in c.pricing.faqs" :key="f.q" class="faq-item">
            <h3>{{ f.q }}</h3>
            <p>{{ f.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <h2>{{ c.pricing.ctaTitle }}</h2>
        <p>{{ c.pricing.ctaDesc }}</p>
        <router-link :to="loc('/download')" class="btn btn-primary btn-large">
          {{ c.common.downloadWindows }}
        </router-link>
        <p class="cta-note">{{ c.pricing.ctaNote }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { localeFromPath, localizedPath } from '../locales'
import { useSiteContent } from '../composables/useSiteContent'

const c = useSiteContent()
const route = useRoute()
// computed：组件创建早于路由首次解析，一次性求值会把语言冻结在 '/'（=简体）→ 链接丢前缀
const currentLocale = computed(() => localeFromPath(route.path))
// 站内链接保持当前语言
const loc = (b: string) => localizedPath(b, currentLocale.value)

// 三档统一带 originalPrice（免费版为空串），模板无需判空
const plans = computed(() => [
  { key: 'free', ...c.value.pricing.free, originalPrice: '' },
  { key: 'standard', ...c.value.pricing.standard, originalPrice: c.value.pricing.standard.originalPrice ?? '' },
  { key: 'pro', ...c.value.pricing.pro, originalPrice: c.value.pricing.pro.originalPrice ?? '' },
])
</script>

<style scoped>
.page-hero {
  padding: 160px 0 70px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
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

.page-hero h1 {
  font-family: var(--font-sans);
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 17px;
  color: var(--text-secondary);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.7;
}

.plans,
.compare,
.faq {
  padding: 72px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 12px;
}

.section-desc {
  font-size: 15px;
  color: var(--text-secondary);
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;
}

.plan-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  background: var(--bg-elevated);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.plan-card--pro {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary);
}

.plan-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.plan-name {
  font-size: 18px;
  font-weight: 700;
}

.plan-flag {
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  background: var(--primary);
  padding: 3px 10px;
  border-radius: 999px;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.plan-price-current {
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.plan-price-original {
  font-size: 15px;
  color: var(--text-muted);
  text-decoration: line-through;
}

.plan-period {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: -6px;
}

.plan-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  margin: 4px 0 0;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.55;
}

.plan-features .check-ico {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 3px;
}

.promo-note {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
  margin: 24px 0 0;
}

.compare {
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.compare-table {
  max-width: 860px;
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.compare-row {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--border);
}

.compare-row:last-child {
  border-bottom: none;
}

.compare-row--head {
  background: var(--bg);
  font-weight: 600;
}

.compare-row--head .compare-cell,
.compare-row--head .compare-feature {
  font-size: 14px;
}

.compare-feature,
.compare-cell {
  padding: 12px 16px;
  font-size: 13.5px;
  color: var(--text-secondary);
  border-right: 1px solid var(--border);
}

.compare-feature {
  color: var(--text-primary);
  font-weight: 500;
}

.compare-cell:last-child,
.compare-feature:last-child {
  border-right: none;
}

.compare-cell--pro {
  background: rgba(91, 83, 232, 0.04);
}

.faq-list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.faq-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0;
}

.cta {
  padding: 80px 0 100px;
  text-align: center;
}

.cta h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}

.cta > .container > p {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.cta-note {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 14px;
}

@media (max-width: 900px) {
  .plan-grid {
    grid-template-columns: 1fr;
  }

  .compare-row {
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    font-size: 12px;
  }

  .compare-feature,
  .compare-cell {
    padding: 10px 10px;
    font-size: 12px;
  }
}
</style>
