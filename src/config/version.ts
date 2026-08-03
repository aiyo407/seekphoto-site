/** 应用版本与下载配置（版本升级时只需改这一处） */
export const APP_VERSION = '0.9.0'

/** 显示用版本号（带 v 前缀，如 "v0.9.0"） */
export const APP_VERSION_DISPLAY = `v${APP_VERSION}`

/** 下载文件名 */
export const DOWNLOAD_FILE = `seekphoto_${APP_VERSION}_x64-setup.exe`

/** 下载链接（相对路径，由 Nginx 提供 /downloads/ 静态文件） */
export const DOWNLOAD_URL = `/downloads/${DOWNLOAD_FILE}`
