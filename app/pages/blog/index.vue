<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryCollection('content').all());
console.log('posts,', posts.value);
</script>
<template>
  <div class="cb-index">
    <UBlogPosts orientation="vertical" class="cb-margin-y">
      <UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post" :to="post.path" />
    </UBlogPosts>
  </div>
</template>
<style></style>
