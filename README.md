# SeekPhoto 官网

[seekphoto.cn](https://www.seekphoto.cn) 的源码仓库。本仓库只包含**官网工程**；桌面客户端的源码与技术架构见应用仓库。

官网是**隐私政策、用户协议、更新日志、联系支持、定价**的唯一事实源，客户端相关页面只负责跳转到本站对应页面，不在应用内重复维护正文。

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Vue 3 + TypeScript |
| 构建 | Vite + `vite-ssg`（静态预渲染） |
| 路由 | `vue-router`，URL 前缀是语言唯一真源 |
| 多语言 | 三语言独立静态内容，**未使用 vue-i18n** |

语言路由：`/` 简体中文、`/zh-tw` 繁体中文、`/en` 英文。「记住语言偏好」只在首次整页加载落到裸根 `/` 时生效。

## 内容位置

```
src/content/site/{zh-CN,zh-TW,en-US}.ts   首页 / 功能 / 指南 / 关于 / 定价 / FAQ 文案
src/content/{privacy,terms}.*.ts          隐私政策、用户协议三语言正文
src/views/Changelog.vue                   更新日志（旧条目保留，最新一条标 latest）
src/config/version.ts                     APP_VERSION，与客户端版本号同步
public/llms.txt                           面向 LLM 的站点说明
```

改动官网功能宣称时，必须逐条对齐客户端 `develop` 的实际代码；客户端增删功能后要同步检查上述内容源，避免继续宣传已下线的能力。

## 本地开发

```bash
npm install
npm run dev        # 开发服务器
npm run build      # vue-tsc + vite-ssg 预渲染 + postbuild-ssg 扁平化，产物在 dist/
npm run preview    # 预览
```

> Windows 构建时若遇到沙箱拦截清空 `dist/`，加环境变量 `CODEBUDDY_SAFE_DELETE_ENABLED=0`。

## 版本与发版

客户端版本号唯一源是应用仓库的 `src-tauri/Cargo.toml`。发新版时需同步：

- 本仓库 `src/config/version.ts` 的 `APP_VERSION`
- 本仓库 `src/views/Changelog.vue` 新增条目，并把上一条的 `latest` 改为 `feature`
- 应用仓库的 `Cargo.toml` / `Cargo.lock` / 仓库根 `CHANGELOG.md`

更新日志中的历史条目不做删改。

---

© SeekPhoto · 由个人开发者维护
