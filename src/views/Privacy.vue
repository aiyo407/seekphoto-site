<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ t('privacy.heroTitle') }}</h1>
        <p>{{ t('privacy.heroDate') }}</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="legal-content">
          <p class="intro">{{ t('privacy.intro') }}</p>

          <h2>{{ t('privacy.h1') }}</h2>
          <p>{{ t('privacy.p1') }}</p>

          <h2>{{ t('privacy.h2') }}</h2>
          <p>{{ t('privacy.p2') }}<strong>{{ t('privacy.p2Strong') }}</strong></p>
          <ul>
            <li v-for="(it, i) in privacyData" :key="i"><strong>{{ it.strong }}</strong>：{{ it.text }}</li>
          </ul>

          <h2>{{ t('privacy.h3') }}</h2>
          <p>{{ t('privacy.p3') }}</p>
          <ul>
            <li v-for="(it, i) in privacyProcess" :key="i"><strong>{{ it.strong }}</strong>：{{ it.text }}</li>
          </ul>

          <h2>{{ t('privacy.h4') }}</h2>
          <p>{{ t('privacy.p4') }}<strong>{{ t('privacy.p4Strong') }}</strong></p>
          <ul>
            <li v-for="(it, i) in privacyNet" :key="i"><strong>{{ it.strong }}</strong>：{{ it.text }}</li>
          </ul>
          <p>{{ t('privacy.p4b') }}<strong>{{ t('privacy.p4bStrong') }}</strong></p>

          <h2>{{ t('privacy.h5') }}</h2>
          <p>{{ t('privacy.p5') }}</p>
          <ul>
            <li v-for="(it, i) in privacyComp" :key="i"><strong>{{ it.strong }}</strong>：{{ it.text }}</li>
          </ul>
          <p>{{ t('privacy.p5b') }}</p>

          <h2>{{ t('privacy.h6') }}</h2>
          <p>{{ t('privacy.p6') }}</p>
          <ul>
            <li v-for="(it, i) in privacyRights" :key="i"><strong>{{ it.strong }}</strong>：{{ it.text }}</li>
          </ul>

          <h2>{{ t('privacy.h7') }}</h2>
          <p>{{ t('privacy.p7') }}</p>

          <h2>{{ t('privacy.h8') }}</h2>
          <p>{{ t('privacy.p8') }}</p>

          <h2>{{ t('privacy.h9') }}</h2>
          <p>{{ t('privacy.p9') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'global' })
const privacyData = computed(() => tm('privacy.dataList') as unknown as any[])
const privacyProcess = computed(() => tm('privacy.processList') as unknown as any[])
const privacyNet = computed(() => tm('privacy.netList') as unknown as any[])
const privacyComp = computed(() => tm('privacy.compList') as unknown as any[])
const privacyRights = computed(() => tm('privacy.rightsList') as unknown as any[])
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
