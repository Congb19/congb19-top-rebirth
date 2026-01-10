<script setup lang="ts">
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => queryCollection('content').order('id', 'DESC').all());
const displayPosts = computed(() => {
  return posts.value?.map((post) => {
    return {
      ...post,
      ...post.meta
    };
  });
});
console.log('posts,', displayPosts.value);
</script>
<template>
  <div class="cb-index gap-4">
    <UPageHeader title="Blog" description="" />
    <UPage>
      <!-- <template #left>
        123
      </template> -->

      <UBlogPosts orientation="vertical" class="cb-margin-y">
        <UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post" :to="post.path" />
      </UBlogPosts>
      <!-- <template #right /> -->
    </UPage>

    <USeparator />
    <UPageHeader title="About" description="" />
    <UPageCard
      title="我是Congb19！"
      description="一个会写一点Vue的前端、有点有趣的INFP人。喜欢音乐与游戏。"
      orientation="horizontal"
      spotlight
      spotlight-color="primary"
      reverse
    >
      <img src="/imgs/logo.jpg" class="w-30" />
    </UPageCard>
    <UPageCard
      title="这是林小包！"
      description="一只没有什么烦恼的、可爱的狗狗。"
      orientation="horizontal"
      spotlight
      spotlight-color="primary"
      reverse
    >
      <img src="/imgs/dog.jpg" class="w-30" />
    </UPageCard>
  </div>
</template>
<style></style>
