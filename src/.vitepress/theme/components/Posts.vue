<script setup>
import BlogPostPreview from "./PostPreview.vue";
import { data as articles } from '../blog.data'
</script>

<template>
  <div class="container mx-auto flex flex-wrap justify-center gap-x-4 gap-y-4">
    <BlogPostPreview v-for="article in articles" :title="article.title" :href="article.url" :date="article.date.string" :excerpt="article.excerpt"/>
  </div>
</template>