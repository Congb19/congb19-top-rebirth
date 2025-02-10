// 打字机效果
type TyperConfig = {
  text: string;
  cursor?: boolean;
  delay?: number;
  speed?: number; // 1-100
};

export const useTyper = (config: TyperConfig) => {
  const { text, cursor = true, delay = 0, speed = 50 } = config;
  const typing = ref(true);
  const typeText = ref(text);
  const typeArr: Ref<Array<string>> = ref([]);
  const typeTimer = ref();
  const typeCursorBling = ref(false);
  const showCursor = computed(() => {
    return typing.value && typeCursorBling.value && cursor;
  });

  const start = async () => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    refreshTyping();

    const arr = typeText.value.split('');
    arr.forEach((char, index) => {
      const gap = Math.random() * (10000 / speed);
      setTimeout(() => {
        refreshTyping();
        typeArr.value.push(char);
        if (typeArr.value.length === arr.length) {
          stop();
        }
      }, (10000 / speed) * index + gap);
    });
  };
  const refreshTyping = () => {
    clearInterval(typeTimer.value);
    typeCursorBling.value = true;
    typeTimer.value = setInterval(() => {
      typeCursorBling.value = !typeCursorBling.value;
    }, 500);
  };
  const stop = () => {
    clearInterval(typeTimer.value);
    typing.value = false;
  };
  return {
    start,
    stop,
    typeArr,
    showCursor,
    typing
  };
};
