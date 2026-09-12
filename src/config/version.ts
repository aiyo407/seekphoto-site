/** 应用版本（仅更新日志页展示用，与下载链接无关） */
export const APP_VERSION = '0.11.4'

/** 显示用版本号（带 v 前缀，如 "v0.9.0"） */
export const APP_VERSION_DISPLAY = `v${APP_VERSION}`

/**
 * 下载链接（固定入口，永不变更）
 * 服务器上 seekphoto-setup.exe 是软链接，指向最新版本化安装包；
 * 发版时 publish-update.ps1 自动执行 ln -sfn 切换指向，官网无需改动。
 */
export const DOWNLOAD_URL = '/downloads/seekphoto-setup.exe'
