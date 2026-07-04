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
  --primary: #00d9ff;
  --primary-dark: #00b8d9;
  --bg-dark: #0f1419;
  --bg-darker: #0a0e13;
  --bg-card: #1a1f2e;
  --text-primary: #ffffff;
  --text-secondary: #8b95a5;
  --border: #2a3040;
}

body {
  font-family: 'Noto Sans SC', 'Outfit', sans-serif;
  background: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
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
  transition: color 0.3s;
}

a:hover {
  color: var(--primary-dark);
}
</style>
