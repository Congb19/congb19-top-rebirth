<script setup>
const MERIT_KEY = 'cb-merits';
const merits = ref(0);
const meritFloats = ref([]);
const fishEl = ref(null);
let floatId = 0;

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
  merits.value++;
  localStorage.setItem(MERIT_KEY, String(merits.value));

  // 敲击回弹动画
  const fishDom = fishEl.value?.$el ?? fishEl.value;
  fishDom?.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(0.88)' },
      { transform: 'scale(1)' }
    ],
    { duration: 180, easing: 'ease-out' }
  );

  // "+1" 飘字
  const id = ++floatId;
  meritFloats.value.push({ id });
  setTimeout(() => {
    meritFloats.value = meritFloats.value.filter((f) => f.id !== id);
  }, 1000);
};

onMounted(() => {
  startWelcome();
  startDesc();
  merits.value = Number(localStorage.getItem(MERIT_KEY)) || 0;
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
        <div class="cb-merit-fish" title="电子木鱼">
          <UIcon
            ref="fishEl"
            name="i-mingcute-fish-fill"
            class="cb-merit-fish-icon"
            @click="addMerit"
          />
          <span
            v-for="f in meritFloats"
            :key="f.id"
            class="cb-merit-float"
          >功德+1</span>
        </div>
        <div class="cb-merit-count">功德：{{ merits }}</div>
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

  .cb-profile-content {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .cb-merit-fish {
    position: relative;
    display: inline-flex;
  }

  .cb-merit-fish-icon {
    font-size: 64px;
    cursor: pointer;
    color: #8a6f4d;
    user-select: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.15);
    }
  }

  .cb-merit-float {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: 600;
    color: #00c16a;
    pointer-events: none;
    animation: cb-merit-float-up 1s ease-out forwards;
  }

  .cb-merit-count {
    font-size: 16px;
    color: var(--ui-text-muted);
  }
}

@keyframes cb-merit-float-up {
  0% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -48px);
  }
}
</style>
