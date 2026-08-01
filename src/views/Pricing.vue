<template>
  <div class="pricing-page">
    <section class="page-hero">
      <div class="container">
        <h1>简单透明的定价</h1>
        <p>免费版不限照片数量，专业版一次买断终身使用</p>
      </div>
    </section>

    <!-- 定价卡片 -->
    <section class="plans-section">
      <div class="container">
        <div class="plans-grid">
          <!-- 免费版 -->
          <div class="plan-card">
            <div class="plan-header">
              <span class="plan-name">免费版</span>
              <div class="plan-price">
                <span class="price-amount">¥0</span>
                <span class="price-period">永久免费</span>
              </div>
              <p class="plan-desc">核心功能完全免费，不限照片数量</p>
            </div>
            <router-link to="/download" class="btn btn-secondary btn-large btn-block">
              免费下载
            </router-link>
            <ul class="plan-features">
              <li v-for="feature in freeFeatures" :key="feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- 专业版 -->
          <div class="plan-card plan-pro">
            <div class="plan-badge">推荐</div>
            <div class="plan-header">
              <span class="plan-name">专业版</span>
              <div class="plan-price">
                <span class="price-amount">¥99</span>
                <span class="price-period">一次买断</span>
              </div>
              <p class="plan-desc">解锁全部 AI 功能，终身使用</p>
            </div>
            <a href="https://www.seekphoto.cn" target="_blank" rel="noopener" class="btn btn-primary btn-large btn-block">
              立即购买
            </a>
            <ul class="plan-features">
              <li v-for="feature in proFeatures" :key="feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <!-- 买断制说明 -->
        <div class="purchase-note">
          <div class="note-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            <span>一次买断，终身使用，无订阅、无自动续费</span>
          </div>
          <div class="note-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            <span>绑定设备指纹，支持反激活迁移</span>
          </div>
          <div class="note-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
            <span>免费版功能永久保留，不因未购买而降级</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能对比 -->
    <section class="compare-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">功能对比</span>
          <h2 class="section-title">免费版与专业版</h2>
          <p class="section-desc">选择适合你的版本</p>
        </div>

        <div class="compare-table">
          <div class="compare-row compare-header">
            <div class="compare-cell compare-feature">功能</div>
            <div class="compare-cell">免费版</div>
            <div class="compare-cell compare-pro-col">专业版</div>
          </div>
          <div class="compare-row" v-for="item in compareData" :key="item.feature">
            <div class="compare-cell compare-feature">{{ item.feature }}</div>
            <div class="compare-cell">
              <svg v-if="item.free" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else class="compare-dash">—</span>
            </div>
            <div class="compare-cell compare-pro-col">
              <svg v-if="item.pro" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else class="compare-dash">—</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 购买方式 -->
    <section class="buy-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">购买方式</span>
          <h2 class="section-title">如何购买专业版</h2>
          <p class="section-desc">两种方式，任你选择</p>
        </div>

        <div class="buy-channels">
          <div class="buy-channel">
            <div class="channel-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>官网直购</h3>
            <p>访问 www.seekphoto.cn，微信/支付宝扫码支付 ¥99，获取激活码</p>
          </div>
          <div class="buy-channel">
            <div class="channel-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>应用商店</h3>
            <p>在数码荔枝、少数派软购搜索「觅影 SeekPhoto」下单</p>
          </div>
        </div>

        <div class="buy-faq">
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
          <h2>开始使用觅影</h2>
          <p>免费下载，随时升级专业版</p>
          <router-link to="/download" class="btn btn-primary btn-large">
            下载 for Windows
          </router-link>
          <span class="cta-note">支持 Windows 10/11 · 约 60MB</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const freeFeatures = [
  'AI 语义搜索（文字找图）',
  '照片地图（GPS 定位浏览）',
  '时间线浏览',
  '批量导出',
  '本地存储，不限照片数量',
  '隐私保护，数据不上传',
]

const proFeatures = [
  '包含免费版全部功能',
  '人脸识别与人物相册',
  '以图搜图（相似照片搜索）',
  '自动标签与自动分类',
  '相似照片去重',
  '终身使用，无订阅费用',
]

const compareData = [
  { feature: 'AI 语义搜索', free: true, pro: true },
  { feature: '时间线浏览', free: true, pro: true },
  { feature: '照片地图（GPS）', free: true, pro: true },
  { feature: '批量导出', free: true, pro: true },
  { feature: '不限照片数量', free: true, pro: true },
  { feature: '人脸识别与人物相册', free: false, pro: true },
  { feature: '以图搜图', free: false, pro: true },
  { feature: '自动标签与分类', free: false, pro: true },
  { feature: '相似照片去重', free: false, pro: true },
]

const faqs = [
  { q: '买断制是什么意思？', a: '一次支付 ¥99，终身使用专业版全部功能。没有订阅费、没有自动续费、没有过期时间。' },
  { q: '免费版会限制照片数量吗？', a: '不会。免费版不限照片数量，核心搜索、地图、时间线功能永久免费。' },
  { q: '购买后如何激活？', a: '在应用中打开「升级专业版」页面，输入激活码即可激活。激活码绑定设备指纹，支持反激活后迁移到新设备。' },
  { q: '可以在多台电脑上使用吗？', a: '一个激活码绑定一台设备。如需更换电脑，可在原设备上反激活，然后在新设备上重新激活。' },
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

/* 定价卡片 */
.plans-section {
  padding: 80px 0;
}

.plans-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 880px;
  margin: 0 auto;
}

.plan-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  position: relative;
  transition: all 0.2s ease;
}

.plan-card.plan-pro {
  border-color: var(--primary);
  box-shadow: 0 8px 32px rgba(91, 83, 232, 0.12);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 16px;
  background: var(--brand-gradient);
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  white-space: nowrap;
}

.plan-header {
  text-align: center;
  margin-bottom: 28px;
}

.plan-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.plan-price {
  margin: 16px 0 12px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 8px;
}

.price-amount {
  font-family: var(--font-sans);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  line-height: 1;
}

.price-period {
  font-size: 15px;
  color: var(--text-secondary);
}

.plan-desc {
  font-size: 14px;
  color: var(--text-secondary);
}

.btn-block {
  width: 100%;
  margin-bottom: 28px;
}

.plan-features {
  list-style: none;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.plan-features li svg {
  color: var(--primary);
  flex-shrink: 0;
}

/* 买断制说明 */
.purchase-note {
  max-width: 880px;
  margin: 48px auto 0;
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.note-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.note-item svg {
  color: var(--primary);
  flex-shrink: 0;
}

/* 功能对比 */
.compare-section {
  padding: 80px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.compare-table {
  max-width: 720px;
  margin: 48px auto 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.compare-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  border-bottom: 1px solid var(--border);
}

.compare-row:last-child {
  border-bottom: none;
}

.compare-row.compare-header {
  background: var(--bg);
  font-weight: 600;
  font-size: 15px;
}

.compare-cell {
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--text-secondary);
}

.compare-cell.compare-feature {
  justify-content: flex-start;
  color: var(--text-primary);
  font-weight: 500;
}

.compare-row.compare-header .compare-cell {
  color: var(--text-primary);
}

.compare-pro-col {
  background: var(--primary-light);
}

.compare-dash {
  color: var(--text-muted);
  font-size: 18px;
}

/* 购买方式 */
.buy-section {
  padding: 80px 0;
}

.buy-channels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 720px;
  margin: 48px auto 0;
}

.buy-channel {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  text-align: center;
  transition: all 0.2s ease;
}

.buy-channel:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.channel-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius);
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: var(--primary);
}

.buy-channel h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
}

.buy-channel p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* FAQ */
.buy-faq {
  max-width: 720px;
  margin: 48px auto 0;
}

.faq-item {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 16px;
}

.faq-item h3 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.faq-item p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
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

/* 响应式 */
@media (max-width: 768px) {
  .plans-grid {
    grid-template-columns: 1fr;
  }

  .compare-table {
    font-size: 13px;
  }

  .compare-cell {
    padding: 10px 12px;
  }

  .buy-channels {
    grid-template-columns: 1fr;
  }

  .purchase-note {
    flex-direction: column;
    gap: 12px;
  }

  .price-amount {
    font-size: 40px;
  }

  .cta-card {
    padding: 56px 24px;
  }

  .cta-card h2 {
    font-size: 28px;
  }
}
</style>
