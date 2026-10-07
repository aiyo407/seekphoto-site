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

const route = useRoute()
const SITE = 'https://www.seekphoto.cn'
const SITE_DESC =
  'SeekPhoto 是一款本地 AI 图片搜索管理工具，运行在 Windows 上。用一句话就能搜到照片：语义搜图、以图搜图、照片地图与文字识别（OCR），内置离线矢量地图，所有数据本地处理、不上传云端。'

// 按路由注入完整 head（title/description/OG/Twitter/canonical）+ 结构化数据。
// 构建期由 vite-ssg 渲染进每页静态 HTML，爬虫无需执行 JS 即可读到。
useHead(() => {
  const title = (route.meta.title as string) || 'SeekPhoto - 本地 AI 图片搜索'
  const description = (route.meta.description as string) || SITE_DESC
  const url = SITE + route.path

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      url: SITE,
      name: 'SeekPhoto',
      description: SITE_DESC,
      inLanguage: 'zh-CN',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'SeekPhoto',
      url: SITE + '/download',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Windows 10, Windows 11',
      softwareVersion: APP_VERSION,
      description: '本地 AI 图片搜索管理工具，支持语义搜图、以图搜图、照片地图与文字识别，所有数据本地处理。',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
      publisher: { '@type': 'Organization', name: 'SeekPhoto' },
    },
  ]

  // FAQ 结构化数据仅首页（与首页文案一致，直接喂 AI 问答）
  if (route.path === '/') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'SeekPhoto是什么？', acceptedAnswer: { '@type': 'Answer', text: 'SeekPhoto是一款运行在 Windows 上的本地 AI 图片搜索工具，用一句话描述就能从海量照片里找到想要的那一张。' } },
        { '@type': 'Question', name: 'SeekPhoto收费吗？', acceptedAnswer: { '@type': 'Answer', text: 'SeekPhoto免费下载使用，核心功能（语义搜图、以图搜图、照片地图、文字识别）都可免费体验，所有数据本地处理、不上传云端。' } },
        { '@type': 'Question', name: '我的照片安全吗？', acceptedAnswer: { '@type': 'Answer', text: '照片信息和 AI 索引都只保存在你的电脑上，不上传任何服务器；AI 模型也在本地运行，照片永不离开本机。' } },
        { '@type': 'Question', name: '支持哪些系统？', acceptedAnswer: { '@type': 'Answer', text: '目前支持 Windows 10 与 Windows 11 的 64 位系统。' } },
        { '@type': 'Question', name: '怎么用一句话搜图？', acceptedAnswer: { '@type': 'Answer', text: '在搜索框输入自然语言描述，例如“海边的日落”“穿红衣服的人”“可爱的猫咪”，AI 会理解语义并返回最匹配的照片。' } },
      ],
    })
  }

  return {
    title,
    htmlAttrs: { lang: 'zh-CN' },
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SeekPhoto' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: SITE + '/og-image.png' },
      { property: 'og:locale', content: 'zh_CN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: SITE + '/og-image.png' },
    ],
    link: [{ rel: 'canonical', href: url }],
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
