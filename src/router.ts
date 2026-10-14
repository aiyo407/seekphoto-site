import { RouteRecordRaw } from 'vue-router'
import { LOCALE_PREFIX, SUPPORTED_LOCALES, type AppLocale } from './i18n'

// 页面清单：基础路径（语言无关）+ 对应视图 + meta 用 pageKey
const pages: { path: string; file: string; pageKey: string }[] = [
  { path: '/', file: 'Home', pageKey: 'home' },
  { path: '/features', file: 'Features', pageKey: 'features' },
  { path: '/guide', file: 'Guide', pageKey: 'guide' },
  { path: '/download', file: 'Download', pageKey: 'download' },
  { path: '/about', file: 'About', pageKey: 'about' },
  { path: '/changelog', file: 'Changelog', pageKey: 'changelog' },
  { path: '/privacy', file: 'Privacy', pageKey: 'privacy' },
  { path: '/terms', file: 'Terms', pageKey: 'terms' },
]

// 懒加载视图（用 import.meta.glob 让 Vite 能静态分析）
const viewModules = import.meta.glob('./views/*.vue')

// 为每种语言生成一套路由，共享同一视图组件，仅前缀与 meta.locale 不同。
export const routes: RouteRecordRaw[] = []
for (const locale of SUPPORTED_LOCALES) {
  const prefix = LOCALE_PREFIX[locale]
  for (const p of pages) {
    const fullPath = p.path === '/' ? (prefix || '/') : `${prefix}${p.path}`
    const loader = viewModules[`./views/${p.file}.vue`]
    routes.push({
      path: fullPath,
      component: loader,
      meta: { locale: locale as AppLocale, pageKey: p.pageKey },
    })
  }
}
