<template>
  <div class="legal-page">
    <section class="page-hero">
      <div class="container">
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.updated }}</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="legal-content">
          <p class="intro">{{ doc.intro }}</p>

          <template v-for="(b, i) in doc.blocks" :key="i">
            <h2 v-if="b.type === 'h2'">{{ b.text }}</h2>
            <h3 v-else-if="b.type === 'h3'">{{ b.text }}</h3>
            <p v-else-if="b.type === 'p'">
              <a v-if="b.href" :href="b.href" target="_blank" rel="noopener">{{ b.text }}</a>
              <template v-else>{{ b.text }}</template>
            </p>
            <ul v-else-if="b.type === 'ul'">
              <li v-for="(it, ii) in b.items" :key="ii">
                <strong v-if="it.strong">{{ it.strong }}：</strong>
                <a v-if="it.href" :href="it.href" target="_blank" rel="noopener">{{ it.text }}</a>
                <template v-else>{{ it.text }}</template>
              </li>
            </ul>
            <ol v-else-if="b.type === 'ol'">
              <li v-for="(it, ii) in b.items" :key="ii">
                <strong v-if="it.strong">{{ it.strong }}：</strong>
                <a v-if="it.href" :href="it.href" target="_blank" rel="noopener">{{ it.text }}</a>
                <template v-else>{{ it.text }}</template>
              </li>
            </ol>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { localeFromPath } from '../../locales'
import { getPrivacyDoc, getTermsDoc } from '../../content'
import type { NormalizedDoc } from '../../content/types'

const props = defineProps<{
  /** 文档类型：隐私政策 / 用户协议 */
  doc: 'privacy' | 'terms'
}>()

const route = useRoute()
const doc = computed<NormalizedDoc>(() =>
  props.doc === 'privacy'
    ? getPrivacyDoc(localeFromPath(route.path))
    : getTermsDoc(localeFromPath(route.path)),
)
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

.legal-content h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 24px;
  margin-bottom: 10px;
}

.legal-content p {
  margin-bottom: 16px;
}

.legal-content ul,
.legal-content ol {
  margin: 12px 0 20px;
  padding-left: 4px;
  list-style: none;
}

.legal-content ol {
  list-style: decimal;
  padding-left: 22px;
}

.legal-content li {
  padding: 6px 0 6px 24px;
  position: relative;
}

.legal-content ol li {
  padding-left: 6px;
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

.legal-content ol li::before {
  display: none;
}

.legal-content strong {
  color: var(--text-primary);
  font-weight: 600;
}

.legal-content a {
  word-break: break-all;
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

  .legal-content h3 {
    font-size: 15px;
  }
}
</style>
