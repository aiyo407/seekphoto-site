<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <router-link :to="loc('/')" class="logo">
            <img :src="logo" alt="SeekPhoto" class="logo-img" />
            <span class="logo-text">SeekPhoto</span>
          </router-link>
          <p>{{ c.footer.tagline }}</p>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>{{ c.footer.navTitle }}</h4>
            <router-link :to="loc('/')">{{ c.nav.home }}</router-link>
            <router-link :to="loc('/features')">{{ c.nav.features }}</router-link>
            <router-link :to="loc('/guide')">{{ c.nav.guide }}</router-link>
            <router-link :to="loc('/download')">{{ c.nav.download }}</router-link>
            <router-link :to="loc('/pricing')">{{ c.nav.pricing }}</router-link>
            <router-link :to="loc('/changelog')">{{ c.nav.changelog }}</router-link>
            <router-link :to="loc('/support')">{{ c.nav.support }}</router-link>
          </div>
          <div class="footer-col">
            <h4>{{ c.footer.aboutTitle }}</h4>
            <router-link :to="loc('/about')">{{ c.nav.about }}</router-link>
          </div>
          <div class="footer-col">
            <h4>{{ c.footer.legalTitle }}</h4>
            <router-link :to="loc('/privacy')">{{ c.nav.privacy }}</router-link>
            <router-link :to="loc('/terms')">{{ c.nav.terms }}</router-link>
          </div>
          <div class="footer-col">
            <h4>{{ c.footer.communityTitle }}</h4>
            <a href="https://qm.qq.com/q/VLdutsMlmU" target="_blank" rel="noopener noreferrer">{{ c.footer.community }}</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ c.footer.copyright }}</p>
        <p class="icp">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备2026111543号-1</a>
          <a class="mps-beian" href="https://beian.mps.gov.cn/#/query/webSearch?code=44011802001527" target="_blank" rel="noopener noreferrer">
            <img class="beian-icon" :src="beianIcon" alt="公安备案图标" />
            <span>粤公网安备44011802001527号</span>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../../assets/logo.png'
import beianIcon from '../../assets/备案图标.png'
import { localeFromPath, localizedPath, type SiteLocale } from '../../locales'
import { useSiteContent } from '../../composables/useSiteContent'

const c = useSiteContent()
const route = useRoute()
// computed：组件创建早于路由首次解析，一次性求值会把语言冻结在 '/'（=简体）→ 链接丢前缀
const currentLocale = computed<SiteLocale>(() => localeFromPath(route.path))
const loc = (base: string) => localizedPath(base, currentLocale.value)
</script>

<style scoped>
.footer {
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  padding: 48px 0 32px;
}

.footer-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 32px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 44px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-text {
  margin-left: 12px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.logo-text span {
  font-weight: 500;
  color: var(--text-secondary);
}

.footer-brand p {
  color: var(--text-secondary);
  font-size: 14px;
}

.footer-contact {
  font-size: 13px !important;
  color: var(--text-muted) !important;
}

.footer-links {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.footer-col h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.footer-col a {
  display: block;
  color: var(--text-secondary);
  font-size: 14px;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: var(--primary);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 13px;
}

.footer-bottom .icp {
  font-size: 12px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-bottom .icp .mps-beian {
  display: inline-flex;
  align-items: center;
}

.footer-bottom .icp .beian-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  flex-shrink: 0;
  display: block;
  object-fit: contain;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .footer-links {
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
