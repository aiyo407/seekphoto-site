/**
 * 官网站点文案类型基准。
 *
 * 官网不使用 vue-i18n：文案以纯 TS 模块形式存在于 `src/content/site/<语言>.ts`，
 * 每种语言导出结构完全一致的常量对象。类型基准取自简体中文模块，
 * 其余语言用 `satisfies SiteContent` 在编译期校验 —— 少一个键、类型不符都会构建失败，
 * 不再依赖运行时 fallback（旧 vue-i18n 的 fallback 会让缺键静默显示简体文案）。
 */

import type zhCN from './zh-CN'

/** 站点文案完整结构（由简体中文模块推导） */
export type SiteContent = typeof zhCN
