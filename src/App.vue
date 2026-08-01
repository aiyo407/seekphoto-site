<template>
  <div class="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #5B53E8;
  --primary-dark: #483FD6;
  --primary-light: #EEEAFF;
  --primary-purple: #8B5CF6;
  --brand-gradient: linear-gradient(135deg, #5B53E8 0%, #8B5CF6 100%);
  --bg: #fafafa;
  --bg-elevated: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  --border: #e2e8f0;
  --shadow: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 10px 40px rgba(15, 23, 42, 0.06);
  --radius-sm: 8px;
  --radius: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  /* 系统字体栈：macOS 苹方 / Windows 微软雅黑 / 跨平台回退 */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', sans-serif;
}

body {
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

a {
  color: var(--primary);
  text-decoration: none;
}

img {
  max-width: 100%;
}
</style>
