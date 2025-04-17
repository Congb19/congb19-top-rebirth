let id = 1;

export const useMouseTail = (options: any) => {
  const { showOriginalMouse } = options;

  const status = ref(false);
  const mousePosition = reactive({
    x: 0,
    y: 0
  });
  const start = () => {
    status.value = true;
  };
  const stop = () => {
    status.value = false;
  };
  onMounted(() => {
    document.addEventListener('mousemove', (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    });
    if (!showOriginalMouse) {
      document.body.style.cursor = 'none';
      paintCurrentPoint();
      watchEffect(() => {
        if (mousePosition.x === null || mousePosition.y === null) return;
        updateCurrentPoint();
      });
    } else {
    }
  });
  const paintCurrentPoint = () => {
    // console.log('paint at', mousePosition);
    const current = document.createElement('div');
    current.classList.add('current-point');
    const currentSize = 10;
    current.style.width = currentSize + 'px';
    current.style.height = currentSize + 'px';
    current.style.borderRadius = currentSize / 2 + 'px';
    current.style.zIndex = '10';
    current.style.position = 'fixed';
    current.style.left = `${mousePosition.x}px`;
    current.style.top = `${mousePosition.y}px`;
    current.style.backgroundColor = `blue`;
    document.body.appendChild(current);
  };
  const updateCurrentPoint = () => {
    const current = document.querySelector('.current-point') as HTMLElement | null;
    if (current) {
      // current.remove();
      current.style.left = `${mousePosition.x}px`;
      current.style.top = `${mousePosition.y}px`;
    } else paintCurrentPoint();
  };

  const paintColoredTail = () => {
    // 在当前鼠标位置绘制一个随机颜色的小点，然后逐渐消失
    const tail = document.createElement('div');
    const className = 'mouse-tail-' + id;
    id++;
    tail.classList.add(className);
    const tailSize = Math.random() * 8 + 2;
    tail.style.width = tailSize + 'px';
    tail.style.height = tailSize + 'px';
    tail.style.borderRadius = tailSize / 2 + 'px';
    tail.style.zIndex = '1';
    tail.style.position = 'fixed';
    tail.style.left = `${mousePosition.x}px`;
    tail.style.top = `${mousePosition.y}px`;
    let opacity = 1;
    tail.style.opacity = opacity + '';
    tail.style.backgroundColor = `rgb(${55 + Math.random() * 200}, ${55 + Math.random() * 200}, ${
      55 + Math.random() * 200
    })`;
    tail.style.pointerEvents = 'none';
    document.body.appendChild(tail);
    const timer = setInterval(() => {
      opacity -= 0.1;
      const tailDom = document.querySelector('.' + className) as HTMLElement | null;
      // console.log('try to set opacity', tailDom);
      if (tailDom) {
        // console.log('try to set opacity', Math.max(0, opacity), tailDom);
        tailDom.style.opacity = `${Math.max(0, opacity)}`;
      }
    }, 10);
    setTimeout(() => {
      tail.remove();
      clearInterval(timer);
    }, 100);
  };
  watchThrottled(
    mousePosition,
    () => {
      if (!status.value) return;
      paintColoredTail();
    },
    { throttle: 5 }
  );
  return {
    mousePosition,
    status,
    start,
    stop
  };
};
