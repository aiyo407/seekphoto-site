// vite-ssg 默认产出扁平 .html（features.html、zh-tw/features.html 等）。
// 但标准 SPA nginx 配置 `try_files $uri $uri/ /index.html` 只会把 /features 回退到首页壳，吃不到子页预渲染。
// 本步骤把所有非 index 的 .html 转成嵌套结构（features/index.html、zh-tw/features/index.html），
// 使现有 nginx 配置无需改动即可直接伺服子页预渲染 HTML（资源均为绝对路径 /assets/*，挪目录不受影响）。
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist')

let moved = 0

// 递归遍历 dist：先把当前目录下的扁平 html 转为 name/index.html，再深入子目录。
async function processDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  // 先处理文件（移动扁平 html），避免移动时新建的目录干扰后续遍历
  for (const e of entries) {
    if (e.isFile() && e.name.endsWith('.html') && e.name !== 'index.html') {
      const full = path.join(dir, e.name)
      const name = e.name.slice(0, -'.html'.length)
      const targetDir = path.join(dir, name)
      await fs.mkdir(targetDir, { recursive: true })
      const target = path.join(targetDir, 'index.html')
      // 目标 index.html 若存在（理论上不会），先删后移，保证幂等
      await fs.rm(target, { force: true })
      await fs.rename(full, target)
      moved++
    }
  }
  // 再递归子目录
  for (const e of entries) {
    if (e.isDirectory()) {
      await processDir(path.join(dir, e.name))
    }
  }
}

await processDir(dist)
console.log(`[postbuild-ssg] 转换 ${moved} 个扁平 html 为嵌套目录结构`)
