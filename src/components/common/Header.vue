<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-content">
        <router-link :to="loc('/')" class="logo" @click="closeMenu">
          <img :src="logo" alt="SeekPhoto" class="logo-img" />
          <span class="logo-text">SeekPhoto</span>
        </router-link>

        <nav class="nav">
          <router-link v-for="item in navItems" :key="item.base" :to="loc(item.base)">
            {{ item.label }}
          </router-link>
        </nav>

        <div class="header-actions">
          <!-- 语言切换 -->
          <div class="lang-switch" role="group" :aria-label="c.nav.lang">
            <router-link
              v-for="opt in localeOptions"
              :key="opt.value"
              :to="switchLocale(opt.value)"
              class="lang-btn"
              :class="{ active: currentLocale === opt.value }"
            >
              {{ opt.label }}
            </router-link>
          </div>
          <!-- 移动端汉堡按钮 -->
          <button
            type="button"
            class="menu-toggle"
            :class="{ active: isMenuOpen }"
            :aria-expanded="isMenuOpen"
            :aria-label="c.nav.menu"
            @click="toggleMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端抽屉菜单 -->
    <transition name="drawer">
      <nav v-if="isMenuOpen" class="mobile-nav">
        <router-link v-for="item in navItems" :key="item.base" :to="loc(item.base)" @click="closeMenu">
          {{ item.label }}
        </router-link>
        <router-link v-for="item in mobileExtra" :key="item.base" :to="loc(item.base)" @click="closeMenu">
          {{ item.label }}
        </router-link>
        <div class="mobile-lang">
          <router-link
            v-for="opt in localeOptions"
            :key="opt.value"
            :to="switchLocale(opt.value)"
            class="lang-btn"
            :class="{ active: currentLocale === opt.value }"
            @click="closeMenu"
          >
            {{ opt.label }}
          </router-link>
        </div>
      </nav>
    </transition>

    <!-- 抽屉遮罩 -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="drawer-mask" @click="closeMenu"></div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../../assets/logo.png'
import {
  localeFromPath,
  stripLocale,
  localizedPath,
  SITE_LOCALES,
  LOCALE_SHORT_LABEL,
  LOCALE_FULL_LABEL,
  type SiteLocale,
} from '../../locales'
import { useSiteContent } from '../../composables/useSiteContent'

const c = useSiteContent()
const route = useRoute()
const currentLocale = computed<SiteLocale>(() => localeFromPath(route.path))
const basePath = computed(() => stripLocale(route.path))

// 当前语言的页面链接（带前缀）
const loc = (base: string) => localizedPath(base, currentLocale.value)
// 切换到目标语言时，停留在同一页面。
// 注意：这里必须保持「纯函数」——模板里 :to="switchLocale(opt.value)" 会在每次渲染时
// 对每个语言选项各调一次，若在此写 localStorage，一次渲染就写入三次（最后一个选项获胜）。
// 语言偏好的写入统一交给路由守卫（main.ts），那里能拿到真实的目标路径。
const switchLocale = (target: SiteLocale) => localizedPath(basePath.value, target)

// 语言切换：三种语言各一份独立静态页，切换即换前缀
const localeOptions = SITE_LOCALES.map((value) => ({
  value,
  label: LOCALE_SHORT_LABEL[value],
  title: LOCALE_FULL_LABEL[value],
}))

const navItems = computed(() => [
  { base: '/', label: c.value.nav.home },
  { base: '/features', label: c.value.nav.features },
  { base: '/guide', label: c.value.nav.guide },
  { base: '/download', label: c.value.nav.download },
  { base: '/pricing', label: c.value.nav.pricing },
])
const mobileExtra = computed(() => [
  { base: '/about', label: c.value.nav.about },
  { base: '/changelog', label: c.value.nav.changelog },
  { base: '/support', label: c.value.nav.support },
])

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// 路由变化时关闭菜单
watch(() => route.path, closeMenu)

// 菜单打开时锁定 body 滚动
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 250, 250, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.header.scrolled {
  border-bottom-color: var(--border);
  box-shadow: var(--shadow);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-text {
  margin-left: 10px;
  font-size: 17px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav a {
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav a:hover {
  color: var(--text-primary);
  background: #f1f5f9;
}

.nav a.router-link-active {
  color: var(--primary);
  background: var(--primary-light);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 语言切换 */
.lang-switch {
  display: inline-flex;
  border: 1px solid var(--border);
  border-radius: 999px;
  overflow: hidden;
  background: var(--bg-elevated);
}

.lang-btn {
  padding: 5px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  line-height: 1.4;
}

.lang-btn:hover {
  color: var(--primary);
}

.lang-btn.active {
  background: var(--primary);
  color: #ffffff;
}

/* 汉堡按钮 - 默认隐藏 */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-sm);
  gap: 5px;
  transition: background 0.2s ease;
}

.menu-toggle:hover {
  background: #f1f5f9;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* 移动端抽屉菜单 - 默认隐藏 */
.mobile-nav {
  display: none;
}

.drawer-mask {
  display: none;
}

/* 响应式：768px 以下启用汉堡菜单 */
@media (max-width: 768px) {
  .header-content {
    height: 64px;
  }

  .logo-text {
    font-size: 16px;
  }

  /* 隐藏横向导航 */
  .nav {
    display: none;
  }

  /* 显示汉堡按钮 */
  .menu-toggle {
    display: flex;
  }

  /* 抽屉菜单 */
  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 20px 20px;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-lg);
  }

  .mobile-nav a {
    padding: 14px 16px;
    border-radius: var(--radius);
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .mobile-nav a:hover {
    background: var(--bg);
  }

  .mobile-nav a.router-link-active {
    color: var(--primary);
    background: var(--primary-light);
  }

  .mobile-lang {
    display: inline-flex;
    margin-top: 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    overflow: hidden;
    width: fit-content;
  }

  .mobile-lang .lang-btn {
    padding: 8px 18px;
  }

  .drawer-mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 23, 42, 0.3);
    z-index: -1;
  }
}

/* 抽屉过渡动画 */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
