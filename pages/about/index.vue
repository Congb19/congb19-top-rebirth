<script setup>
const appStore = useAppStore()
await callOnce(appStore.fetch)

const { data } = await useFetch('/api/test')
console.log(data.value)

</script>

<template>
  <div class="cb-index">
    <div class="cb-about">
      <UDivider label="我是谁？" />
      <UAlert
        class="cb-about-alert"
        description="一个会写一点Vue的前端、有点有趣的INFP人。喜欢音乐与游戏。"
        :avatar="{ src: '/imgs/logo.jpg' }"
        title="我是Congb19！"
      />
      <UDivider label="这是谁？" />
      <UAlert
        class="cb-about-alert"
        description="一只没有什么烦恼的、可爱的狗狗。"
        :avatar="{ src: '/imgs/dog.jpg' }"
        title="这是林小包！"
      />
      {{ appStore.name }}: {{ appStore.description }}
      <div>api test</div>
      {{ data }}
    </div>
  </div>
</template>
<style>
.cb-about {
  margin-top: 20px;
  min-width: 600px;
  max-width: 800px;
  .cb-about-alert {
    margin: 20px 0;
  }
}
</style>
