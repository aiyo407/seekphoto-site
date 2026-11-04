/**
 * 站点语言定义与路径工具。
 *
 * 官网不使用 vue-i18n：每种语言是独立的静态页面（SSG 预渲染成各自的 HTML），
 * 语言由 URL 前缀决定：
 * - 简体中文  →  https://www.seekphoto.cn/pricing
 * - 繁體中文  →  https://www.seekphoto.cn/zh-tw/pricing
 * - English   →  https://www.seekphoto.cn/en/pricing
 *
 * 客户端按自身语言设置跳到对应语言的页面（见客户端 src/utils/site.ts 的 siteUrl）。
 */

export type SiteLocale = 'zh-CN' | 'zh-TW' | 'en-US'

export const SITE_LOCALES: SiteLocale[] = ['zh-CN', 'zh-TW', 'en-US']

/** 各语言对应的路由前缀（简体无前缀，繁体 /zh-tw，英文 /en） */
export const LOCALE_PREFIX: Record<SiteLocale, string> = {
  'zh-CN': '',
  'zh-TW': '/zh-tw',
  'en-US': '/en',
}

/** 各语言对应的 hreflang / html lang 值（繁体用 zh-Hant 更利于 SEO） */
export const LOCALE_HREFLANG: Record<SiteLocale, string> = {
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-Hant',
  'en-US': 'en-US',
}

/** 语言切换按钮上显示的短标签 */
export const LOCALE_SHORT_LABEL: Record<SiteLocale, string> = {
  'zh-CN': '简',
  'zh-TW': '繁',
  'en-US': 'EN',
}

/** 语言切换按钮的完整名称（无障碍标签用） */
export const LOCALE_FULL_LABEL: Record<SiteLocale, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en-US': 'English',
}

export function isSiteLocale(v: string): v is SiteLocale {
  return v === 'zh-CN' || v === 'zh-TW' || v === 'en-US'
}

/** 由当前路径前缀推断语言 */
export function localeFromPath(path: string): SiteLocale {
  if (path.startsWith('/zh-tw')) return 'zh-TW'
  if (path.startsWith('/en')) return 'en-US'
  return 'zh-CN'
}

/** 去掉路径中可能带的语言前缀，返回「基础路径」（语言无关） */
export function stripLocale(path: string): string {
  let base = path
  for (const prefix of ['/zh-tw', '/en']) {
    if (base.startsWith(prefix)) {
      const rest = base.slice(prefix.length)
      base = rest === '' ? '/' : rest
      break
    }
  }
  // 去掉尾部斜杠：路由表里没有尾斜杠（/features 而非 /features/）。
  // 不统一的话，语言切换器会生成 /features/ 这类路径 —— 与路由表不一致，
  // 刷新时还要让 nginx 再补一次 301，同一页面出现两个 URL。
  if (base.length > 1 && base.endsWith('/')) base = base.slice(0, -1)
  return base
}

/** 给「基础路径」加上目标语言前缀，得到完整路由路径 */
export function localizedPath(basePath: string, locale: SiteLocale): string {
  const prefix = LOCALE_PREFIX[locale]
  if (!prefix) return basePath
  return basePath === '/' ? prefix : prefix + basePath
}
