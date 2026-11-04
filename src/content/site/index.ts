/**
 * 站点文案出口（按语言取内容）。
 *
 * 官网不使用 vue-i18n：三种语言各自是独立的 TS 模块，路由按 URL 前缀决定用哪一份，
 * SSG 把每种语言的每个页面预渲染成独立 HTML（/、/zh-tw/、/en/）。
 * 结构一致性由 TypeScript 保证 —— zh-TW 与 en-US 都用 `satisfies SiteContent` 校验，
 * 少一个键或类型不符都会在构建期报错，不会像旧的运行时 fallback 那样静默显示简体。
 */

import zhCN from './zh-CN'
import zhTW from './zh-TW'
import enUS from './en-US'
import type { SiteContent } from './types'
import type { SiteLocale } from '../../locales'

const zhTWContent = zhTW satisfies SiteContent
const enUSContent = enUS satisfies SiteContent

/** 三种语言的文案表 */
export const SITE_CONTENT: Record<SiteLocale, SiteContent> = {
  'zh-CN': zhCN,
  'zh-TW': zhTWContent,
  'en-US': enUSContent,
}

/** 取指定语言的站点文案 */
export function getSiteContent(locale: SiteLocale): SiteContent {
  return SITE_CONTENT[locale]
}

export type { SiteContent }
