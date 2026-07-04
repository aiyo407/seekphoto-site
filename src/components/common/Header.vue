<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="var(--primary)" stroke-width="2"/>
            <circle cx="16" cy="16" r="6" fill="var(--primary)"/>
          </svg>
          <span>觅影</span>
        </router-link>

        <nav class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/features">功能</router-link>
          <router-link to="/download">下载</router-link>
        </nav>

        <a href="https://github.com/aiyo407/seekphoto-site" target="_blank" class="github-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.logo:hover {
  color: var(--primary);
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

.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.github-link:hover {
  color: var(--text-primary);
  background: #f1f5f9;
}

@media (max-width: 768px) {
  .header-content {
    height: 64px;
  }

  .nav a {
    padding: 8px 12px;
    font-size: 14px;
  }
}
</style>
