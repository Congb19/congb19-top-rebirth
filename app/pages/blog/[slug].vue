<script setup>
const slug = useRoute().params.slug;
console.log('slug!', slug);
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('content').path(`/blog/${slug}`).first()
);
console.log('detail!', post.value);
</script>

<template>
  <div class="cb-index">
    <!-- Render the blog post as Prose & Vue components -->
    <UCard variant="subtle" class="cb-margin-y">
      <ContentRenderer :value="post" />

      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </div>
</template>
