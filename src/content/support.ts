/**
 * 官方支持渠道常量。
 *
 * 与法律文档正文一样，这里刻意不放进 i18n 消息：
 * vue-i18n 的消息编译器会把 `@` 当成「关联消息」语法，邮箱地址放进去会直接编译报错。
 */
export const SUPPORT_EMAIL = 'aiyo407@163.com'

/** 官方 QQ 用户交流群（与客户端 src/utils/site.ts 的 QQ_GROUP 保持一致） */
export const SUPPORT_QQ_GROUP = {
  number: '1048754589',
  joinUrl: 'https://qm.qq.com/q/VLdutsMlmU',
}
