import { createI18n } from 'vue-i18n'
import type { Locale } from 'vue-i18n'
import zhCN from './zh-CN'
import zhTW from './zh-TW'

export type AppLocale = 'zh-CN' | 'zh-TW'

export const SUPPORTED_LOCALES: AppLocale[] = ['zh-CN', 'zh-TW']

// 各语言对应的路由前缀（简体无前缀，繁体加 /zh-tw）
export const LOCALE_PREFIX: Record<AppLocale, string> = {
  'zh-CN': '',
  'zh-TW': '/zh-tw',
}

// 各语言对应的 hreflang / html lang 值（繁体用 zh-Hant 更利于 SEO）
export const LOCALE_HREFLANG: Record<AppLocale, string> = {
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-Hant',
}

export function isAppLocale(v: string): v is AppLocale {
  return v === 'zh-CN' || v === 'zh-TW'
}

// 由当前路径前缀推断语言
export function localeFromPath(path: string): AppLocale {
  return path.startsWith('/zh-tw') ? 'zh-TW' : 'zh-CN'
}

// 去掉路径中可能带的语言前缀，返回「基础路径」（语言无关）
export function stripLocale(path: string): string {
  if (path.startsWith('/zh-tw')) {
    const rest = path.slice('/zh-tw'.length)
    return rest === '' ? '/' : rest
  }
  return path
}

// 给「基础路径」加上目标语言前缀，得到完整路由路径
export function localizedPath(basePath: string, locale: AppLocale): string {
  const prefix = LOCALE_PREFIX[locale]
  if (!prefix) return basePath
  return basePath === '/' ? prefix : prefix + basePath
}

// 完整 i18n 实例（legacy:false → 组合式 API）
export const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN' as Locale,
  fallbackLocale: 'zh-CN' as Locale,
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
  },
})
