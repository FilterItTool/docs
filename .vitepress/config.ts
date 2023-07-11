import { defineConfig } from 'vitepress';
import { enThemeConfig, faThemeConfig } from './themeConfigs';

export default defineConfig({
  title: 'FilterIt',
  description: 'FilterIt Tool Documentation',
  srcDir: 'src',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'FilterIt',
      description: 'FilterIt Tool',
      themeConfig: enThemeConfig
    },
    fa: {
      label: 'Persian',
      lang: 'fa',
      link: '/fa/',
      dir: 'rtl',
      title: 'FilterIt',
      description: 'FilterIt ابزار',
      themeConfig: faThemeConfig
    }
  }
});
