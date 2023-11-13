// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import PostPreview from "./components/PostPreview.vue";
import Posts from "./components/Posts.vue";
import Quote from "./components/Quote.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('PostPreview', PostPreview);
    app.component('Posts', Posts);
    app.component("Quote", Quote);
  }
} satisfies Theme
