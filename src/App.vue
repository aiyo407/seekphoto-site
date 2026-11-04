<template>
  <div class="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { APP_VERSION } from './config/version'
import {
  localeFromPath,
  stripLocale,
  localizedPath,
  LOCALE_HREFLANG,
  SITE_LOCALES,
  type SiteLocale,
} from './locales'
import { getSiteContent } from './content/site'

const route = useRoute()
const SITE = 'https://www.seekphoto.cn'

/**
 * 按「路由语言」直接取文案。
 *
 * 官网不使用 vue-i18n：每种语言是一份独立的 TS 文案模块（src/content/site/<语言>.ts），
 * 路由 meta.locale 决定用哪一份。这里按路由语言取，避免 head 的响应式 getter
 * 在所有页面渲染完成后才求值时取到别的语言。
 */
function metaOf(locale: SiteLocale, pageKey: string): { title: string; description: string } {
  const meta = getSiteContent(locale).meta as Record<string, { title: string; description: string }>
  return meta[pageKey] ?? meta.home
}

// 按路由注入完整 head（title/description/OG/Twitter/canonical/hreflang）+ 结构化数据。
// 构建期由 vite-ssg 渲染进每页静态 HTML，爬虫无需执行 JS 即可读到。
useHead(() => {
  const locale = (route.meta.locale as SiteLocale) ?? localeFromPath(route.path)
  const pageKey = (route.meta.pageKey as string) || 'home'
  const { title, description } = metaOf(locale, pageKey)
  const base = stripLocale(route.path)
  const url = SITE + localizedPath(base, locale)

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      name: 'SeekPhoto',
      url: SITE,
      logo: { '@type': 'ImageObject', url: SITE + '/og-image.png', width: 1200, height: 630 },
      sameAs: ['https://qm.qq.com/q/VLdutsMlmU'],
    },
    {
      '@type': 'WebSite',
      url: SITE,
      name: 'SeekPhoto',
      description: metaOf(locale, 'home').description,
      inLanguage: locale,
    },
    {
      '@type': 'SoftwareApplication',
      name: 'SeekPhoto',
      url: SITE + '/download',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Windows 10, Windows 11',
      softwareVersion: APP_VERSION,
      description: metaOf(locale, 'download').description,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
      publisher: { '@type': 'Organization', name: 'SeekPhoto' },
    },
  ]

  // FAQ 结构化数据仅首页（与首页文案一致，直接喂 AI 问答）
  if (pageKey === 'home') {
    const faqs = getSiteContent(locale).home.faqs
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  // hreflang 备用链接：每种语言一份 + x-default（回退到简体）
  const alternates = SITE_LOCALES.map((loc) => ({
    rel: 'alternate',
    hreflang: LOCALE_HREFLANG[loc],
    href: SITE + localizedPath(base, loc),
  }))
  alternates.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: SITE + localizedPath(base, 'zh-CN'),
  })

  return {
    title,
    htmlAttrs: { lang: LOCALE_HREFLANG[locale] },
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SeekPhoto' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: SITE + '/og-image.png' },
      { property: 'og:locale', content: locale === 'zh-TW' ? 'zh_Hant' : 'zh_CN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: SITE + '/og-image.png' },
    ],
    link: [{ rel: 'canonical', href: url }, ...alternates],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      },
    ],
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #5B53E8;
  --primary-dark: #483FD6;
  --primary-light: #EEEAFF;
  --primary-purple: #8B5CF6;
  --brand-gradient: linear-gradient(135deg, #5B53E8 0%, #8B5CF6 100%);
  --bg: #fafafa;
  --bg-elevated: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  --border: #e2e8f0;
  --shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 10px 40px rgba(15, 23, 42, 0.06);
  --radius-sm: 8px;
  --radius: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  /* 系统字体栈：macOS 苹方 / Windows 微软雅黑 / 跨平台回退 */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', sans-serif;
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

a {
  color: var(--primary);
  text-decoration: none;
}

img {
  max-width: 100%;
}
</style>
