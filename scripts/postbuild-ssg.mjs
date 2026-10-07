// vite-ssg 默认产出扁平 .html（features.html），但标准 SPA nginx 配置
// `try_files $uri $uri/ /index.html` 只会把 /features 回退到首页壳，吃不到子页预渲染。
// 本步骤把扁平 html 转成嵌套结构（features/index.html），使现有 nginx 配置
// 无需改动即可直接伺服子页预渲染 HTML（资源均为绝对路径 /assets/*，挪目录不受影响）。
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist')

const files = await fs.readdir(dist)
let moved = 0
for (const f of files) {
  if (!f.endsWith('.html') || f === 'index.html') continue
  const name = f.slice(0, -'.html'.length)
  const targetDir = path.join(dist, name)
  await fs.mkdir(targetDir, { recursive: true })
  await fs.rename(path.join(dist, f), path.join(targetDir, 'index.html'))
  moved++
}
console.log(`[postbuild-ssg] 转换 ${moved} 个扁平 html 为嵌套目录结构`)
