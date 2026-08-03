/**
 * 百度统计封装
 *
 * 使用前：
 * 1. 在百度统计 (tongji.baidu.com) 添加网站 https://www.seekphoto.cn
 * 2. 获取统计代码中的 site ID（hm.js? 后面的 32 位字符串）
 * 3. 替换 index.html 中 hm.js? 后的 BAIDU_TONGJI_ID 占位符
 *
 * PV/UV 由 hm.js 自动统计，SPA 路由切换在 main.ts 的 router.afterEach 中推送。
 * 事件追踪调用 trackEvent()。
 */

declare global {
  interface Window {
    _hmt?: any[]
  }
}

/**
 * 追踪自定义事件（如下载点击）
 * @param category 事件类别（如 "download"）
 * @param action 事件操作（如 "click"）
 * @param label 事件标签（如 "windows_setup"）
 * @param value 事件数值（可选，如版本号）
 */
export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: string | number
) {
  if (typeof window === 'undefined' || !window._hmt) return
  const args: any[] = ['_trackEvent', category, action]
  if (label !== undefined) args.push(label)
  if (value !== undefined) args.push(value)
  window._hmt.push(args)
}

/**
 * 推送 SPA 页面浏览（路由切换时调用）
 * @param path 页面路径（如 "/download"）
 */
export function trackPageView(path: string) {
  if (typeof window === 'undefined' || !window._hmt) return
  window._hmt.push(['_trackPageview', path])
}
