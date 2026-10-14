<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('terms.heroTitle') }}</h1>
        <p>{{ t('terms.heroDate') }}</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="legal-content">
          <p class="intro">{{ t('terms.intro') }}</p>

          <h2>{{ t('terms.h1') }}</h2>
          <p>{{ t('terms.p1') }}</p>

          <h2>{{ t('terms.h2') }}</h2>
          <p>{{ t('terms.p2') }}</p>
          <ul>
            <li v-for="(it, i) in termsPermit" :key="i">{{ it }}</li>
          </ul>
          <p>{{ t('terms.p2b') }}</p>
          <ul>
            <li v-for="(it, i) in termsForbid" :key="i">{{ it }}</li>
          </ul>

          <h2>{{ t('terms.h3') }}</h2>
          <p>{{ t('terms.p3') }}</p>
          <ul>
            <li v-for="(it, i) in termsNorm" :key="i"><strong>{{ it.strong }}</strong>：{{ it.text }}</li>
          </ul>

          <h2>{{ t('terms.h4') }}</h2>
          <p>{{ t('terms.p4') }}</p>
          <p>{{ t('terms.p4b') }}</p>
          <p>{{ t('terms.p4c') }}</p>

          <h2>{{ t('terms.h5') }}</h2>
          <ul>
            <li v-for="(it, i) in termsDisclaimer" :key="i"><strong>{{ it.strong }}</strong>：{{ it.text }}</li>
          </ul>

          <h2>{{ t('terms.h6') }}</h2>
          <p>{{ t('terms.p6') }}</p>
          <p>{{ t('terms.p6b') }}</p>
          <ul>
            <li v-for="(it, i) in termsEnable" :key="i">{{ it }}</li>
          </ul>

          <h2>{{ t('terms.h7') }}</h2>
          <p>{{ t('terms.p7') }}</p>

          <h2>{{ t('terms.h8') }}</h2>
          <p>{{ t('terms.p8') }}</p>

          <h2>{{ t('terms.h9') }}</h2>
          <p>{{ t('terms.p9') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'global' })
const termsPermit = computed(() => tm('terms.permitList') as unknown as string[])
const termsForbid = computed(() => tm('terms.forbidList') as unknown as string[])
const termsNorm = computed(() => tm('terms.normList') as unknown as any[])
const termsDisclaimer = computed(() => tm('terms.disclaimerList') as unknown as any[])
const termsEnable = computed(() => tm('terms.enableList') as unknown as string[])
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
  margin-bottom: 12px;
}

.page-hero p {
  font-size: 15px;
  color: var(--text-secondary);
}

.content-section {
  padding: 64px 0 120px;
}

.legal-content {
  max-width: 760px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
}

.intro {
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 32px;
  padding: 20px 24px;
  background: var(--bg);
  border-radius: var(--radius);
  border-left: 3px solid var(--primary);
}

.legal-content h2 {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 40px;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.legal-content p {
  margin-bottom: 16px;
}

.legal-content ul {
  margin: 12px 0 20px;
  padding-left: 4px;
  list-style: none;
}

.legal-content li {
  padding: 6px 0 6px 24px;
  position: relative;
}

.legal-content li::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 14px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.legal-content strong {
  color: var(--text-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 40px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .content-section {
    padding: 40px 0 80px;
  }

  .legal-content {
    font-size: 14px;
  }

  .legal-content h2 {
    font-size: 19px;
  }
}
</style>
