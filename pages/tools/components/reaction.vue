<script setup lang="ts">
const historyResults: number[] = reactive([]);
const recentResult = ref(0);
const addResult = (result: number) => {
  recentResult.value = result;
  historyResults.unshift(result);
};
const { status, start, trig } = useReaction(addResult);
</script>

<template>
  <div class="cb-reaction">
    <UCard>
      <template #header>
        请在点击“开始”按钮开始测试。下方方块变为绿色时，迅速点击它！
      </template>
      <UButton v-if="status === 'ready'" @click="start">开始</UButton>
      <div
        v-else
        class="cb-reaction-board"
        :class="{
          waiting: status === 'waiting',
          testing: status === 'testing'
        }"
        @mousedown="trig"
      ></div>
      <template #footer>
        <div>最新一次成绩：{{ recentResult }} ms</div>
        <div v-if="historyResults.length > 0">
          历史记录：<span v-for="(item, index) in historyResults" :key="index">
            {{ item }} ms
          </span>
        </div>
      </template>
    </UCard>
  </div>
</template>
<style>
.cb-reaction {
  .cb-reaction-board {
    width: 100%;
    height: 200px;
  }
  .cb-reaction-board.waiting {
    background-color: red;
  }
  .cb-reaction-board.testing {
    background-color: green;
    cursor: pointer;
  }
}
</style>
