# 官网示例图替换指南

> 用途：本仓库首页 / 功能页引用的示例图当前是**占位真实照片**，如需精确匹配文案主题，按本文档替换即可。

## 当前状态

- 图片来源：构建期从 `public/` 复制到 `dist/`，已被 SSG 预渲染页直接引用。
- 当前文件：用 **Picsum**（图源 Unsplash 作品，**CC0 免费可商用**）按固定 seed 下载的随机真实照片。
  - 优点：真实照片、免费、与 SSG 改造无关、每次构建结果一致。
  - 缺点：**内容不按关键词走**——首页打字机打「可爱的猫咪」配的可能是风景图，仅能正常显示、与文案不完全对应。

## 文件清单（文件名即契约，替换请同名覆盖）

| 文件路径 | 主题（代码中引用意图） | 建议尺寸 |
|---|---|---|
| `public/images/sunset.jpg` | 海边日落 | 1024×1024 |
| `public/images/baby.jpg` | 婴儿/小孩 | 1024×1024 |
| `public/images/red-dress.jpg` | 穿红衣服的人 | 1024×1024 |
| `public/images/city-night.jpg` | 城市夜景 | 1024×1024 |
| `public/images/cat.jpg` | 猫 | 1024×1024 |
| `public/images/flowers.jpg` | 花 | 1024×1024 |
| `public/images/mountain.jpg` | 雪山/山景 | 1024×1024 |
| `public/images/coffee.jpg` | 咖啡 | 1024×1024 |
| `public/og-image.png` | 社交分享卡片（OG/Twitter） | **1200×630**，PNG |

> ⚠️ `og-image.png` 在 `public/` **根目录**（不是 `public/images/`）。`index.html` 的 `og:image` 引用的是根路径 `/og-image.png`，放错目录会导致社交分享无图。

## 推荐图源（均免费可商用，需留意各自授权细则）

| 站点 | 授权 | 取图方式 |
|---|---|---|
| [Unsplash](https://unsplash.com) | 免费可商用，无需署名 | 搜索主题 → 下载原图 → 同名覆盖 |
| [Pexels](https://www.pexels.com) | 免费可商用，无需署名 | 搜索主题 → 下载 → 同名覆盖 |
| [Pixabay](https://pixabay.com) | CC0 公共领域 | 搜索主题 → 下载 → 同名覆盖 |

> 沙箱外网白名单限制下无法从以上站点直接下载，需在本机操作。下载时请确认所选图片的授权允许商用、可修改。

## 替换步骤

1. 在 Unsplash / Pexels / Pixabay 搜索对应主题，下载合适图片。
2. **同名覆盖**上表对应文件（保持 `.jpg` / `.png` 扩展名与文件名不变，避免改代码）。
3. （可选）统一裁剪到建议尺寸，避免首页网格比例不一致。
4. 重新构建：

   ```bash
   cd D:\code\clipdemo\website
   npm run build          # SSG 预渲染 8 页 + 把 public/ 复制进 dist/
   python D:\code\clipdemo\_pack_site.py   # 打包校验，产出 seekphoto-site-dist-<版本>.zip
   ```

5. 把新 zip 解压上传到 nginx 目录（标准 SPA 配置无需改动）。

## 校验

- 本地预览：`cd dist && python -m http.server 8080`，开 `http://localhost:8080/`，右键「查看网页源代码」确认 `<body>` 内正文与 `<img>` 均渲染。
- 各图直链应返回 200：`/images/sunset.jpg` … `/images/coffee.jpg`、`/og-image.png`。

## 备注

- 这些图仅用于官网展示，不进应用安装包，与应用端版本号 / 签名流程无耦合。
- 若未来改用 SVG 渐变占位或产品真实截图，改 `src/views/Home.vue` 的 `thumbImages` 与 `src/views/Features.vue` 的 `getImage(i)` 即可，路径约定仍为 `${BASE_URL}images/<name>.jpg`（`BASE_URL` 默认 `/`）。
