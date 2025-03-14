<script setup>
const appStore = useAppStore();
await callOnce(appStore.fetch);

const cbDialog = ref();
const showDialog = () => {
  cbDialog.value?.show();
};

onMounted(() => {
  const func1 = function (...args) {
    console.log(this.a, ...args);
  };

  const obj1 = { a: 1 };

  func1.call(obj1, [2]);

  Function.prototype.myCall = function (context, ...args) {
    // this => 函数本身
    // context => 要成为的this
    context = context === null ? window : Object(context);

    console.log(context);
    context['myFunc'] = this;

    const res = context['myFunc'](...args);

    delete context.myFunc;

    return res;
  };
  Function.prototype.myBind = function (context, ...args) {
    // this => fn 本身
    // context => 目标this
    context = context === null ? window : Object(context);
    context['myFunc'] = this;
    return function () {
      return context['myFunc'](...args);
    }
  }
  func1.myCall(obj1, 2, 3);
  const func2 = func1.bind(obj1, 4);
  func2()

  Promise.myAll = function (promises) {
    const allRes = promises.map(() => null);
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        console.log(promise);
        promise.then((res) => {
          console.log('promise', index, res);
          allRes[index] = res;
          if (allRes.filter((val) => !!val).length === promises.length)
            resolve(allRes);
        });
      });
    });
  };
  // 实现一个自己的Promise.race
  Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((res) => {
          resolve(res);
        });
      });
    });
  };

  const promise1 = Promise.resolve(111);
  const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => resolve(222), 1000)
  );
  Promise.myAll([promise2, promise1]).then((reses) => console.log(reses));

  Promise.race([promise2, promise1]).then((reses) =>
    console.log('race', reses)
  );
  Promise.myRace([promise2, promise1]).then((reses) =>
    console.log('race', reses)
  );

  const obj2 = markRaw({ aaa: 1 });
  // vue2劫持
  Object.defineProperty(obj2, 'aaa', {
    get() {
      return this.value;
    },
    set(val) {
      console.log('trigger effect');
      this.value = val;
    },
    enumerable: true,
    configurable: true
  });
  obj2.aaa = 2;
  console.log(obj2);
  // vue3劫持
  const reactiveObj2 = new Proxy(obj2, {
    get(target, key) {
      return target[key];
    },
    set(target, key, value) {
      console.log('trigger effect');
      target[key] = value;
      return true;
    }
  });
  reactiveObj2.aaa = 3;
  console.log(reactiveObj2);
});
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
      <CbDialog ref="cbDialog"></CbDialog>
      <button @click="showDialog">test</button>
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
