import { createI18n } from 'vue-i18n';

import zh from './zh/common';
import en from './en/common';

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' }
];

const messages = {
  'en-US': {
    ...en
  },
  'zh-CN': {
    ...zh
  }
};
const i18n = createI18n({
  locale: 'zh-CN', // 获取已设置的语言
  // something vue-i18n options here ...
  messages
});
console.log(i18n, '我不想宅了');

export default i18n;
