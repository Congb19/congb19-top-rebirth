<script setup>
const {
  start: startWelcome,
  stop: stopWelcome,
  typeArr: welcomeArr,
  showCursor: welcomeCursor,
  typing: welcomeTyping
} = useTyper({
  text: 'Congb19的小屋'
});
const {
  start: startDesc,
  stop: stopDesc,
  typeArr: DescArr,
  showCursor: DescCursor,
  typing: DescTyping
} = useTyper({
  text: '你在烦恼什么呢？',
  delay: 2000
});
const typingFinish = ref(false);
watchEffect(() => {
  if (!welcomeTyping.value && !DescTyping.value) {
    typingFinish.value = true;
  }
});

const addMerit = () => {
  console.log('功德+1');
};

onMounted(() => {
  startWelcome();
  startDesc();
});
</script>
<template>
  <div class="cb-index">
    <div class="cb-profile">
      <div class="cb-profile-title">
        <div class="title-welcome">
          {{ welcomeArr.join('') }}<span v-if="welcomeCursor">_</span>
        </div>
        <div class="title-desc">
          {{ DescArr.join('') }}<span v-if="DescCursor">_</span>
        </div>
      </div>
      <div v-show="typingFinish" class="cb-profile-content">
        <UButton
          icon="i-mingcute-fish-fill"
          size="md"
          color="white"
          variant="ghost"
          label="电子木鱼"
          :trailing="false"
          @click="addMerit"
        />
      </div>
    </div>
  </div>
</template>
<style>
.cb-profile {
  padding: 200px 0px;

  .cb-profile-title {
    display: flex;
    flex-direction: column;
    line-height: 100px;
    .title-welcome {
      font-size: 72px;
      font-weight: 700;
    }
    .title-desc {
      font-size: 72px;
      font-weight: 500;
      color: #00c16a;
    }
  }
}
</style>
