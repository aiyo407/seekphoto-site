import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': {
      home: {
        faqs: [{ q: 'Q1', a: 'A1' }, { q: 'Q2', a: 'A2' }],
        keywords: ['海边', '日落'],
        privacyItems: [{ title: '本地存储', desc: 'x' }, { title: 'y', desc: 'z' }],
      },
      changelog: { tags: { latest: '功能更新', feature: '新功能', fix: '关键修复', initial: '首个公开版本' } },
      about: { story: ['段一', '段二'] },
    },
    'zh-TW': {
      home: {
        faqs: [{ q: 'Q1', a: 'A1' }],
        keywords: ['海邊', '日落'],
        privacyItems: [{ title: '本地儲存', desc: 'x' }],
      },
      changelog: { tags: { latest: '功能更新', feature: '新功能', fix: '關鍵修復', initial: '首個公開版本' } },
      about: { story: ['段一'] },
    },
  },
})

const { tm } = i18n.global

for (const key of ['home.faqs', 'home.keywords', 'about.story', 'changelog.tags']) {
  const v = tm(key)
  const type = Array.isArray(v) ? 'array' : typeof v
  console.log(`tm('${key}') -> typeof=${type} len=${Array.isArray(v) ? v.length : (v && Object.keys(v).length)}`)
  // 验证 .map 可用（SSR 里 computed 会调 map）
  if (Array.isArray(v)) {
    try { const mapped = v.map((x) => x); console.log(`   .map OK (${mapped.length})`) }
    catch (e) { console.log('   .map FAILED', e.message) }
  }
}

// 切换 locale 验证 tm 跟随
i18n.global.locale.value = 'zh-TW'
console.log('after switch locale -> tm(home.keywords)[0] =', tm('home.keywords')[0])
