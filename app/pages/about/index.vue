<script setup>
const app1Store = useApp1Store();
await callOnce(app1Store.fetch);
</script>

<template>
  <div class="cb-index">
    <div class="cb-about">
      <USeparator label="我是谁？" />
      <UAlert
        class="cb-about-alert"
        color="neutral"
        variant="outline"
        description="一个会写一点Vue的前端、有点有趣的INFP人。喜欢音乐与游戏。"
        :avatar="{ src: '/imgs/logo.jpg' }"
        title="我是Congb19！"
      />
      <USeparator label="这是谁？" />
      <UAlert
        class="cb-about-alert"
        color="neutral"
        variant="outline"
        description="一只没有什么烦恼的、可爱的狗狗。"
        :avatar="{ src: '/imgs/dog.jpg' }"
        title="这是林小包！"
      />
    </div>
  </div>
</template>
<style>
.cb-about {
  margin-top: 20px;
  width: 100%;
  .cb-about-alert {
    margin: 20px 0;
  }
}
</style>
