/**
 * 官网法律文档（隐私政策 / 用户协议）的结构化内容模型。
 *
 * 单一事实源：客户端「设置 → 关于」不再内嵌法律正文，一律跳转到官网对应页面；
 * 正文只在此处维护一次，官网页面与客户端外链共用同一份内容。
 */

/** 列表项：纯文本，或「加粗小标题 + 说明」，可选附带超链接 */
export type RawItem =
  | string
  | { strong?: string; text: string; href?: string }

/** 文档内容块 */
export interface RawBlock {
  type: 'h3' | 'p' | 'ul' | 'ol'
  text?: string
  /** p 块可选：把整段渲染为超链接 */
  href?: string
  items?: RawItem[]
}

/** 章节：一级标题 + 若干内容块 */
export interface RawSection {
  title: string
  blocks: RawBlock[]
}

/** 法律文档原文（内容文件里书写的形态） */
export interface LegalDoc {
  title: string
  updated: string
  intro: string
  sections: RawSection[]
}

/** 归一化后的列表项 */
export interface DocItem {
  strong: string
  text: string
  href: string
}

/** 归一化后的内容块（text / href / items 恒存在，模板无需类型收窄） */
export interface DocBlock {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol'
  text: string
  href: string
  items: DocItem[]
}

/** 归一化后的文档（章节拍平为块序列） */
export interface NormalizedDoc {
  title: string
  updated: string
  intro: string
  blocks: DocBlock[]
}

function normalizeItem(raw: RawItem): DocItem {
  if (typeof raw === 'string') {
    return { strong: '', text: raw, href: '' }
  }
  return {
    strong: raw.strong ?? '',
    text: raw.text,
    href: raw.href ?? '',
  }
}

/** 把「章节数组」拍平成「块数组」，并把章节标题提升为 h2 */
export function normalizeDoc(doc: LegalDoc): NormalizedDoc {
  const blocks: DocBlock[] = []
  for (const section of doc.sections) {
    blocks.push({ type: 'h2', text: section.title, href: '', items: [] })
    for (const b of section.blocks) {
      blocks.push({
        type: b.type,
        text: b.text ?? '',
        href: b.href ?? '',
        items: (b.items ?? []).map(normalizeItem),
      })
    }
  }
  return {
    title: doc.title,
    updated: doc.updated,
    intro: doc.intro,
    blocks,
  }
}
