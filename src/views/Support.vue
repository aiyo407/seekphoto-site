<template>
  <div class="support-page">
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1>{{ c.support.heroTitle }}</h1>
        <p>{{ c.support.heroDesc }}</p>
      </div>
    </section>

    <!-- 联系方式 -->
    <section class="channels">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ c.support.channelsLabel }}</span>
          <h2 class="section-title">{{ c.support.channelsTitle }}</h2>
          <p class="section-desc">{{ c.support.channelsDesc }}</p>
        </div>
        <div class="channel-grid">
          <div class="channel-card" v-for="ch in channels" :key="ch.key">
            <div class="channel-icon" v-html="ch.icon"></div>
            <h3>{{ ch.title }}</h3>
            <p class="channel-desc">{{ ch.desc }}</p>
            <a
              v-if="ch.href"
              class="channel-action"
              :href="ch.href"
              :target="ch.external ? '_blank' : undefined"
              rel="noopener"
            >
              {{ ch.action }}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <span v-else class="channel-action channel-action-plain">{{ ch.action }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见场景 -->
    <section class="scenarios">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ c.support.scenariosLabel }}</span>
          <h2 class="section-title">{{ c.support.scenariosTitle }}</h2>
          <p class="section-desc">{{ c.support.scenariosDesc }}</p>
        </div>
        <div class="scenario-list">
          <div class="scenario-row" v-for="s in scenarios" :key="s.title">
            <div class="scenario-mark"></div>
            <div class="scenario-body">
              <h3>{{ s.title }}</h3>
              <p>{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 邮件附带信息 -->
    <section class="tips">
      <div class="container">
        <div class="tips-inner">
          <div class="tips-head">
            <h2 class="section-title">{{ c.support.tipsTitle }}</h2>
            <p class="section-desc">{{ c.support.tipsDesc }}</p>
          </div>
          <ul class="tips-list">
            <li v-for="(tip, i) in tips" :key="i">{{ tip }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { SUPPORT_EMAIL, SUPPORT_QQ_GROUP } from '../content/support'
import { useSiteContent } from '../composables/useSiteContent'

const c = useSiteContent()

interface ChannelRaw {
  key: string
  title: string
  desc: string
}

interface Channel extends ChannelRaw {
  icon: string
  action: string
  href: string
  external: boolean
}

// 图标按 key 映射（语言无关）
const channelIcons: Record<string, string> = {
  mail: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  feedback: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  group: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
}

// 渠道的「行动入口」：邮件与群号来自常量（不放进 i18n，vue-i18n 无法编译含 @ 的消息）
const channels = computed<Channel[]>(() =>
  (c.value.support.channels as unknown as ChannelRaw[]).map((ch) => {
    if (ch.key === 'mail') {
      return {
        ...ch,
        icon: channelIcons.mail,
        action: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
        external: false,
      }
    }
    if (ch.key === 'group') {
      return {
        ...ch,
        icon: channelIcons.group,
        action: `${c.value.support.channelsAction.group} ${SUPPORT_QQ_GROUP.number}`,
        href: SUPPORT_QQ_GROUP.joinUrl,
        external: true,
      }
    }
    return {
      ...ch,
      icon: channelIcons.feedback,
      action: c.value.support.channelsAction.feedback,
      href: '',
      external: false,
    }
  }),
)

const scenarios = computed(() => c.value.support.scenarios as unknown as { title: string; desc: string }[])
const tips = computed(() => c.value.support.tips as unknown as string[])
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
  margin-bottom: 12px;
}

.page-hero p {
  font-size: 16px;
  color: var(--text-secondary);
  max-width: 640px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-label {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 10px;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.section-desc {
  font-size: 15px;
  color: var(--text-secondary);
  max-width: 620px;
  margin: 0 auto;
}

/* 联系方式 */
.channels {
  padding: 80px 0;
}

.channel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.channel-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 26px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.channel-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.channel-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.channel-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.channel-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 18px;
  flex: 1;
}

.channel-action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  word-break: break-all;
}

.channel-action-plain {
  color: var(--text-primary);
}

/* 常见场景 */
.scenarios {
  padding: 80px 0;
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.scenario-list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.scenario-row {
  display: flex;
  gap: 14px;
  padding: 20px 22px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.scenario-mark {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  margin-top: 9px;
  flex-shrink: 0;
}

.scenario-body h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.scenario-body p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* 邮件附带信息 */
.tips {
  padding: 80px 0 120px;
}

.tips-inner {
  max-width: 760px;
  margin: 0 auto;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 34px;
}

.tips-head {
  margin-bottom: 18px;
}

.tips-head .section-desc {
  text-align: left;
}

.tips-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tips-list li {
  position: relative;
  padding-left: 22px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.tips-list li::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

@media (max-width: 768px) {
  .page-hero {
    padding: 120px 0 48px;
  }

  .page-hero h1 {
    font-size: 32px;
  }

  .channels,
  .scenarios,
  .tips {
    padding: 56px 0;
  }

  .section-title {
    font-size: 24px;
  }

  .tips-inner {
    padding: 24px 22px;
  }
}
</style>
