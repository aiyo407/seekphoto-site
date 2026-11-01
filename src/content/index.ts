import type { AppLocale } from '../i18n'
import { normalizeDoc, type LegalDoc, type NormalizedDoc } from './types'
import privacyZhCN from './privacy.zh-CN'
import privacyZhTW from './privacy.zh-TW'
import termsZhCN from './terms.zh-CN'
import termsZhTW from './terms.zh-TW'

/**
 * 法律文档正文出口。
 *
 * 官网为唯一事实源：正文只在这里维护一次，客户端不再内嵌副本，仅跳转对应页面。
 */
const DOCS: Record<AppLocale, { privacy: LegalDoc; terms: LegalDoc }> = {
  'zh-CN': { privacy: privacyZhCN, terms: termsZhCN },
  'zh-TW': { privacy: privacyZhTW, terms: termsZhTW },
}

/** 取隐私政策正文（已归一化为可渲染的块序列） */
export function getPrivacyDoc(locale: AppLocale): NormalizedDoc {
  return normalizeDoc(DOCS[locale].privacy)
}

/** 取用户协议正文（已归一化为可渲染的块序列） */
export function getTermsDoc(locale: AppLocale): NormalizedDoc {
  return normalizeDoc(DOCS[locale].terms)
}
