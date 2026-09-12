<template>
  <div class="changelog-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>更新日志</h1>
        <p>持续优化，让觅影更好用</p>
      </div>
    </section>

    <!-- 版本列表 -->
    <section class="versions">
      <div class="container">
        <div class="timeline">
          <div class="version-item" v-for="item in versions" :key="item.version">
            <div class="version-dot" :class="item.tagType"></div>
            <div class="version-card">
              <div class="version-header">
                <div class="version-title">
                  <h3>{{ item.version }}</h3>
                  <span class="version-tag" :class="item.tagType">{{ item.tag }}</span>
                </div>
                <span class="version-date">{{ item.date }}</span>
              </div>
              <ul class="version-changes">
                <li v-for="change in item.changes" :key="change">{{ change }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>更新到最新版本</h2>
          <p>体验 {{ APP_VERSION_DISPLAY }} 带来的全新功能与优化</p>
          <router-link to="/download" class="btn btn-primary btn-large">
            下载最新版本
          </router-link>
          <span class="cta-note">支持 Windows 10/11 · 约 60MB</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { APP_VERSION_DISPLAY } from '../config/version'

interface Version {
  version: string
  date: string
  tag: string
  tagType: 'latest' | 'feature' | 'initial'
  changes: string[]
}

const versions: Version[] = [
  {
    version: APP_VERSION_DISPLAY,
    date: '2026-09-12',
    tag: '关键修复',
    tagType: 'latest',
    changes: [
      '搜索去重：同一关键词的重复搜索不再排队重复执行，后台任务繁忙时反复点击也能快速返回',
      'CPU 索引提速修复：显卡判死回退 CPU 后批次大小真正恢复，修复 0.11.5 中被降批设置短路的问题',
      '缩略图计数修正：修复「已生成」数量虚高（同张照片的渐进加载副本被重复统计）',
      '更新提示纠偏：下载被后台任务阻断时如实提示任务进行中，不再误报「检查更新失败」'
    ]
  },
  {
    version: 'v0.11.5',
    date: '2026-09-12',
    tag: '关键修复',
    tagType: 'feature',
    changes: [
      '索引回退 CPU 后速度修复：显卡不可用时不再被误降为逐张处理，索引速度恢复约 10 倍',
      '外接硬盘限流更可靠：部分移动硬盘不再绕过慢速盘保护，缩略图生成更快',
      '日志降噪：缩略图后台任务不再产生大量重复刷屏日志'
    ]
  },
  {
    version: 'v0.11.4',
    date: '2026-09-12',
    tag: '功能更新',
    tagType: 'feature',
    changes: [
      'GPU 加速兼容性增强：优先使用独立显卡加速索引，自动规避老旧核显驱动问题',
      '启动提速：修复数据库统计重复查询 3 次（单次 4.5 秒）的问题',
      '移动硬盘缩略图提速：自动限制慢速盘并发读取，减少磁头寻道，整体更快',
      '按显卡显存自动调整索引批次大小，索引日志新增实时吞吐显示',
      'GPU 恢复更聪明：显卡反复被真实负载压垮时稳定回退 CPU，不再无效循环重试'
    ]
  },
  {
    version: 'v0.11.3',
    date: '2026-09-12',
    tag: '最新版本',
    tagType: 'latest',
    changes: [
      'GPU 自动恢复：显卡瞬时重置导致索引回退 CPU 后，每 5 分钟自动探测，恢复后立即切回 GPU 加速',
      '后台索引开销大幅降低：进度无变化不再重复推送，索引期间浏览更流畅',
      '修正三档套餐功能说明：OCR 文字搜索全版本可用（限量），相似去重与自动标签需标准版'
    ]
  },
  {
    version: 'v0.11.2',
    date: '2026-09-11',
    tag: '关键修复',
    tagType: 'feature',
    changes: [
      '修复自动更新失败的问题：旧版本因签名校验配置错误无法在线升级',
      '注意：0.11.1 及更早版本需从官网手动下载安装一次本版本，之后的自动更新将正常工作'
    ]
  },
  {
    version: 'v0.11.1',
    date: '2026-09-10',
    tag: '功能更新',
    tagType: 'feature',
    changes: [
      '修复缩略图补齐：后台批量生成遇到系统保留目录不再静默失败，缺失的预览图可自动补齐',
      '索引进度实时可见：后台自动续跑索引时不再停留在「正在准备」，实时显示已识别张数',
      'GPU 更稳定：显卡瞬时重置不再永久禁用 DirectML，自动降批重试并保留 GPU 加速，索引速度大幅恢复',
      '修复活动中心进度显示自相矛盾、内存占用显示为 0 的问题',
      '活动中心「并发」改为「执行中」，真实反映正在干活的任务数'
    ]
  },
  {
    version: 'v0.11.0',
    date: '2026-09-06',
    tag: '功能更新',
    tagType: 'feature',
    changes: [
      '改版为内置离线矢量地图，无需联网、无需授权即可查看照片足迹',
      '升级 AI 模型：Chinese-CLIP 语义引擎 + PP-OCRv4 文字识别',
      '移除人脸分组功能，专注照片内容理解',
      '优化 AI 搜索精度，支持更复杂的语义描述',
      '新增批量导出功能',
      '优化启动速度，减少白屏时间'
    ]
  },
  {
    version: 'v0.8.0',
    date: '2026-06-15',
    tag: '功能更新',
    tagType: 'feature',
    changes: [
      '新增自动标签功能',
      '新增相似照片去重',
      '优化时间线浏览体验',
      '改进缩略图加载速度'
    ]
  },
  {
    version: 'v0.7.0',
    date: '2026-04-20',
    tag: '功能更新',
    tagType: 'feature',
    changes: [
      '新增人脸识别与人物相册',
      '新增以图搜图功能',
      '优化搜索结果排序',
      '改进设置界面'
    ]
  },
  {
    version: 'v0.6.0',
    date: '2026-02-10',
    tag: '首个公开版本',
    tagType: 'initial',
    changes: [
      'AI 语义搜索（文字找图）',
      '时间线浏览',
      '标签管理',
      '相册整理',
      '本地存储，隐私保护'
    ]
  }
]
</script>

<style scoped>
.page-hero {
  padding: 160px 0 80px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
}

.page-hero h1 {
  font-family: var(--font-sans);
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.page-hero p {
  font-size: 18px;
  color: var(--text-secondary);
}

/* Versions Timeline */
.versions {
  padding: 120px 0;
}

.timeline {
  max-width: 820px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--border);
}

.version-item {
  position: relative;
  padding-left: 48px;
  margin-bottom: 32px;
}

.version-item:last-child {
  margin-bottom: 0;
}

.version-dot {
  position: absolute;
  left: 0;
  top: 32px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 3px solid var(--text-muted);
  z-index: 1;
}

.version-dot.latest {
  border-color: var(--primary);
  background: var(--primary);
  box-shadow: 0 0 0 4px var(--primary-light);
}

.version-dot.feature {
  border-color: var(--success);
  background: var(--success);
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15);
}

.version-dot.initial {
  border-color: var(--text-secondary);
  background: var(--text-secondary);
  box-shadow: 0 0 0 4px rgba(100, 116, 139, 0.15);
}

.version-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: all 0.2s ease;
}

.version-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.version-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.version-title {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.version-title h3 {
  font-family: var(--font-sans);
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.version-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
}

.version-tag.latest {
  background: var(--primary-light);
  color: var(--primary);
}

.version-tag.feature {
  background: rgba(16, 185, 129, 0.12);
  color: var(--success);
}

.version-tag.initial {
  background: var(--bg);
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.version-date {
  font-size: 14px;
  color: var(--text-secondary);
  font-variant-numeric: tabular-nums;
}

.version-changes {
  list-style: none;
}

.version-changes li {
  position: relative;
  padding: 8px 0 8px 24px;
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.version-changes li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

/* CTA */
.cta {
  padding: 0 0 120px;
}

.cta-card {
  text-align: center;
  background: var(--brand-gradient);
  border-radius: var(--radius-xl);
  padding: 80px 40px;
  color: #ffffff;
}

.cta-card h2 {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.cta-card p {
  font-size: 17px;
  opacity: 0.9;
  margin-bottom: 32px;
}

.cta-card .btn-primary {
  background: #ffffff;
  color: var(--primary);
}

.cta-card .btn-primary:hover {
  background: #f8fafc;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.cta-note {
  display: block;
  margin-top: 16px;
  font-size: 14px;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 60px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .versions {
    padding: 80px 0;
  }

  .version-item {
    padding-left: 36px;
  }

  .version-dot {
    left: -2px;
    top: 28px;
    width: 16px;
    height: 16px;
  }

  .version-card {
    padding: 24px;
  }

  .version-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .version-title h3 {
    font-size: 19px;
  }

  .version-changes li {
    font-size: 14px;
  }

  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}
</style>