import { createSSRApp } from 'vue';
import './style/main.css';
import App from './App.vue';
import pinia from './stores/index';
import i18n from './locale/index';
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(i18n);
  return {
    app
  };
}
