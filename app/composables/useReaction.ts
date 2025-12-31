export const useReaction = (callback: Function) => {
  const toast = useToast();

  const status = ref('ready'); // ready, waiting, testing
  const timer = ref();
  let record = ref([0, 0]);
  const result = computed(() => {
    if (record.value[1] > record.value[0])
      return record.value[1] - record.value[0];
    return 0;
  });

  const start = () => {
    // 随机生成一个3-7的数字
    const gap = Math.random() * 5;
    status.value = 'waiting';
    timer.value = setTimeout(() => {
      status.value = 'testing';
      record.value[0] = Number(Date.now());
    }, 3000 + gap * 1000);
  };
  const trig = async () => {
    if (status.value === 'ready' || status.value === 'waiting') {
      stop();
      toast.add({ title: '抢跑了！', timeout: 2000 });
    } else if (status.value === 'testing') {
      record.value[1] = Number(Date.now());
      await nextTick();
      callback(Number(result.value));
      stop();
    }
  };
  const stop = () => {
    clearTimeout(timer.value);
    status.value = 'ready';
    record.value[0] = 0;
    record.value[1] = 0;
  };

  return {
    status,
    start,
    trig
  };
};
