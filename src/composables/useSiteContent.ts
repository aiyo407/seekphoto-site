import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getSiteContent } from '../content/site'
import { localeFromPath } from '../locales'
import type { SiteContent } from '../content/site'
import type { SiteLocale } from '../locales'

/**
 * 取当前路由语言的站点文案。
 *
 * 官网不使用 vue-i18n：文案是每种语言一份的纯 TS 对象，路由（URL 前缀）决定用哪一份，
 * SSG 把每种语言的每个页面预渲染成独立 HTML。模板里直接读属性（c.home.heroTitle），
 * 没有消息 key、没有运行时查表、没有 fallback —— 缺文案在构建期就会被类型检查拦下。
 *
 * 语言优先取路由 meta（由 router 生成，最权威），回退到按路径前缀推断。
 */
export function useSiteContent() {
  const route = useRoute()
  return computed<SiteContent>(() => {
    const metaLocale = route.meta.locale as SiteLocale | undefined
    return getSiteContent(metaLocale ?? localeFromPath(route.path))
  })
}

/** 当前路由语言 */
export function useSiteLocale() {
  const route = useRoute()
  return computed<SiteLocale>(
    () => (route.meta.locale as SiteLocale | undefined) ?? localeFromPath(route.path),
  )
}
