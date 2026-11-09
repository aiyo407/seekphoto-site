/** 应用版本（更新日志页与下载链接的唯一来源，与客户端 Cargo.toml 保持一致） */
export const APP_VERSION = '0.14.3'

/** 显示用版本号（带 v 前缀，如 "v0.9.0"） */
export const APP_VERSION_DISPLAY = `v${APP_VERSION}`

/**
 * 下载链接：指向带版本号的安装包，与服务器 latest.json 中的 url 完全一致。
 *
 * 为什么不用固定软链入口（seekphoto-setup.exe）：
 * 带版本号后，浏览器下载记录与服务器日志都能直接看出下发的是哪一版，
 * 避免出现「官网显示新版本、实际下发旧包」的错配。
 *
 * 发布顺序要求：先上传版本化安装包，再更新官网 dist；
 * 反序会让官网链接短暂指向尚未上传的文件（404）。
 */
export const DOWNLOAD_URL = `/downloads/seekphoto_${APP_VERSION}_x64-setup.exe`
