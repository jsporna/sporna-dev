<script setup>
import BlogPostPreview from "./PostPreview.vue";
import { data as articles } from '../blog.data'
</script>

<template>
  <div class="posts">
    <BlogPostPreview v-for="article in articles" :title="article.title" :href="article.url" :date="article.date.string" :excerpt="article.excerpt" :image="article.image"/>
  </div>
</template>

<style>
.posts {
  margin: 20px auto 0;
  max-width: calc(var(--vp-layout-max-width) - 64px);
}
</style>
