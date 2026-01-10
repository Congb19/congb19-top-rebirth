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
    <!-- <ContentRenderer :value="post" /> -->

    <UCard variant="subtle" class="cb-margin-y">
      <ContentRenderer :value="post" />

      <!-- <template #footer> </template> -->
    </UCard>
  </div>
</template>
