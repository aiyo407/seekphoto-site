import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

const routes = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/features', component: () => import('./views/Features.vue') },
  { path: '/download', component: () => import('./views/Download.vue') },
]

const router = createRouter({
  history: createWebHistory('/seekphoto-site/'),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
