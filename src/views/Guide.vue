<template>
  <div class="guide-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="badge">从入门到精通</span>
        <h1>使用教程</h1>
        <p>四步开始使用觅影，轻松管理你的海量照片</p>
      </div>
    </section>

    <!-- 快速上手 -->
    <section class="quick-start">
      <div class="container">
        <div class="section-header">
          <span class="section-label">快速上手</span>
          <h2 class="section-title">四步开始使用</h2>
          <p class="section-desc">从下载到搜索，几分钟即可上手</p>
        </div>

        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in steps" :key="step.title">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon" v-html="step.icon"></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 进阶技巧 -->
    <section class="tips">
      <div class="container">
        <div class="section-header">
          <span class="section-label">进阶技巧</span>
          <h2 class="section-title">发挥觅影的全部能力</h2>
          <p class="section-desc">掌握这些技巧，让找照片变得更高效</p>
        </div>

        <div class="tips-grid">
          <div class="tip-card" v-for="tip in tips" :key="tip.title">
            <div class="tip-icon" v-html="tip.icon"></div>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 搜索语法示例 -->
    <section class="search-examples">
      <div class="container">
        <div class="section-header">
          <span class="section-label">搜索灵感</span>
          <h2 class="section-title">搜索语法示例</h2>
          <p class="section-desc">用自然语言描述，AI 会理解你的意思。试试下面这些关键词</p>
        </div>

        <div class="examples-grid">
          <div class="example-card" v-for="group in searchExamples" :key="group.category">
            <div class="example-header">
              <span class="example-icon" v-html="group.icon"></span>
              <h3>{{ group.category }}</h3>
            </div>
            <div class="example-tags">
              <span class="example-tag" v-for="tag in group.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="faq">
      <div class="container">
        <div class="section-header">
          <span class="section-label">常见问题</span>
          <h2 class="section-title">你可能想知道</h2>
          <p class="section-desc">关于觅影使用的常见疑问解答</p>
        </div>

        <div class="faq-list">
          <div class="faq-item" v-for="item in faqs" :key="item.q">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>准备好开始了吗</h2>
          <p>免费下载觅影，用 AI 重新发现你的照片库</p>
          <router-link to="/download" class="btn btn-primary btn-large">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            立即下载
          </router-link>
          <span class="cta-note">支持 Windows 10/11 · 免费 · 本地运行</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Step {
  title: string
  desc: string
  icon: string
}

interface Tip {
  title: string
  desc: string
  icon: string
}

interface SearchGroup {
  category: string
  tags: string[]
  icon: string
}

interface Faq {
  q: string
  a: string
}

const steps: Step[] = [
  {
    title: '下载安装',
    desc: '从本站下载安装包，双击运行即可完成安装。无需配置环境，开箱即用。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
  },
  {
    title: '首次引导',
    desc: '启动后会自动检测电脑里有照片的文件夹，点击一键添加即可，也可以稍后在设置中添加多个目录。照片始终留在原位置，觅影不会复制或移动它们。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>'
  },
  {
    title: '后台索引',
    desc: 'AI 自动分析照片、生成缩略图。底部活动中心实时显示「已识别 X/Y 张」，可随时暂停继续；空闲时还会自动补齐缺口，不打扰正常使用。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/><polyline points="21 4 21 10 15 10"/></svg>'
  },
  {
    title: '开始搜索',
    desc: '在顶部搜索框输入自然语言，比如「海边日落」，AI 立刻返回最匹配的照片；也可以点左侧时间线、拍摄日历、地图随意浏览。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  }
]

const tips: Tip[] = [
  {
    title: '以图搜图',
    desc: '右键任意照片选择「查找相似照片」，快速找出连拍、重复和同系列照片，整理冗余更轻松。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
  },
  {
    title: '图片文字搜索',
    desc: '觅影会识别照片里的文字内容，截图、单据、招牌上的字也能直接搜到，快速定位凭据和资料照片。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
  },
  {
    title: '拍摄日历',
    desc: '热力图汇总你每一天拍的照片数量，点击任意日期即可查看当天所有照片，回顾某段日子一目了然。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
  },
  {
    title: '照片清理',
    desc: '自动检测失焦、抖动的模糊照片，按模糊度排序预览，一键批量移入回收站，释放存储空间。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
  },
  {
    title: '照片地图与位置补全',
    desc: '带 GPS 的照片自动显示在地图上，内置离线地图无需联网；没有 GPS 的照片还能按拍摄时间一键推断补全位置，可随时撤销。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  },
  {
    title: '收藏、标签与智能相册',
    desc: '右键照片即可收藏、评分、添加标签或加入相册；还能创建智能相册自动归类，标准版及以上支持 AI 自动标签与分类。',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>'
  }
]

const searchExamples: SearchGroup[] = [
  {
    category: '场景类',
    tags: ['海边', '山景', '城市夜景', '咖啡馆', '办公室', '公园散步'],
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2 4 4 8-8 4 4"/><path d="M3 21h18"/></svg>'
  },
  {
    category: '人物类',
    tags: ['宝宝', '老人', '朋友聚会', '全家福', '毕业典礼', '生日派对'],
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    category: '物品类',
    tags: ['猫咪', '狗狗', '花朵', '咖啡', '美食', '汽车'],
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'
  },
  {
    category: '颜色类',
    tags: ['红色', '蓝色', '绿色', '黑白', '暖色调', '清新'],
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>'
  },
  {
    category: '时间类',
    tags: ['去年夏天', '春节期间', '圣诞节', '毕业旅行', '早晨', '黄昏'],
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    category: '文字内容类',
    tags: ['截图', '合同文件', '快递单', '名片', '门店招牌', '聊天记录'],
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
  }
]

const faqs: Faq[] = [
  {
    q: '觅影会移动或修改我的照片吗？',
    a: '不会。觅影只在原位置读取照片做索引和展示，不复制、不搬运、不改写原图；扫描和删除类操作也只进入系统回收站，随时可以还原。'
  },
  {
    q: '索引需要多长时间？',
    a: '取决于照片数量和电脑性能：有独立显卡（DirectML 加速）时可达每分钟数百张，仅用 CPU 时约每分钟 20-40 张。索引在后台自动进行，底部活动中心实时显示进度，可随时暂停；缩略图缺口还会在空闲时自动补齐。'
  },
  {
    q: '支持哪些图片格式？',
    a: '支持 JPG、PNG、BMP、WebP、GIF、TIFF，以及 iPhone 的 HEIC/HEIF 格式；还支持常见相机 RAW 格式（佳能 CR2/CR3、尼康 NEF、索尼 ARW、Adobe DNG、松下 RW2、奥林巴斯 ORF、富士 RAF、宾得 PEF 等）。'
  },
  {
    q: '照片会被上传吗？',
    a: '不会。觅影完全在本地运行，照片、索引与 AI 模型都在你的电脑上处理。没有任何数据会上传到服务器，隐私绝对安全。'
  },
  {
    q: '如何更新到新版本？',
    a: '觅影会在启动后自动检查更新（需要联网），也可以在「设置 - 关于」中手动检查。发现新版本后会提示下载安装，更新过程保留所有数据。注意：0.11.1 及更早的版本因签名配置问题无法在线升级，需从官网手动下载安装一次。'
  },
  {
    q: '数据存储在哪里？',
    a: '所有数据存储在系统的应用数据目录中（Windows 下为 %APPDATA%/seekphoto/）。包括缩略图、向量数据库等。删除应用不会删除照片原件。'
  }
]
</script>

<style scoped>
/* Page Hero */
.page-hero {
  padding: 160px 0 80px;
  text-align: center;
  background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
}

.page-hero .badge {
  display: inline-block;
  padding: 6px 16px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 13px;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 20px;
}

.page-hero h1 {
  font-family: var(--font-sans);
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.page-hero p {
  font-size: 18px;
  color: var(--text-secondary);
}

/* 快速上手 */
.quick-start {
  padding: 120px 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.step-card {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  transition: all 0.2s ease;
}

.step-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.step-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: var(--font-sans);
  font-size: 40px;
  font-weight: 700;
  color: var(--primary-light);
  line-height: 1;
}

.step-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary);
}

.step-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.step-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 进阶技巧 */
.tips {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.tip-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  transition: all 0.2s ease;
}

.tip-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.tip-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary);
}

.tip-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.tip-card p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 搜索语法示例 */
.search-examples {
  padding: 120px 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.example-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all 0.2s ease;
}

.example-card:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow-lg);
}

.example-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.example-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.example-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.example-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.example-tag {
  font-size: 13px;
  padding: 6px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-secondary);
  transition: all 0.15s ease;
  cursor: default;
}

.example-tag:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
}

/* 常见问题 */
.faq {
  padding: 120px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.faq-list {
  max-width: 760px;
  margin: 0 auto;
}

.faq-item {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px 28px;
  margin-bottom: 16px;
  transition: all 0.2s ease;
}

.faq-item:hover {
  border-color: #cbd5e1;
  box-shadow: var(--shadow);
}

.faq-item:last-child {
  margin-bottom: 0;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.faq-item h3::before {
  content: 'Q';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.faq-item p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-left: 30px;
}

/* CTA */
.cta {
  padding: 120px 0;
}

.cta-card {
  text-align: center;
  background: var(--brand-gradient);
  border-radius: var(--radius-xl);
  padding: 72px 40px;
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
  opacity: 0.85;
}

/* Responsive */
@media (max-width: 968px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 130px 0 60px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .page-hero p {
    font-size: 16px;
  }

  .quick-start,
  .tips,
  .search-examples,
  .faq,
  .cta {
    padding: 80px 0;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    padding: 28px 20px;
  }

  .step-number {
    font-size: 32px;
    top: 16px;
    right: 16px;
  }

  .tip-card,
  .example-card {
    padding: 24px 20px;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item p {
    padding-left: 0;
  }

  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
