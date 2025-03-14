<script setup>
const a = ref(0);
const b = ref(0);
const c = ref(0);
const result = ref('');

const output = () => {
  const [i, j, k] = [a.value, b.value, c.value];
  const arr = [i, j, k]
  // 所有的 将3个数字进行加减运算结果为24
  // 正负
  let resultArr = []
  const dd = (current, index, res) => {
    console.log('test', current, index, res)
    if (index === 3) {
      if (current === 24) {
        resultArr.push(res)
      }
      return
    }
    dd(current + Number(arr[index]), index + 1, [...res, 1 * arr[index]])
    dd(current - Number(arr[index]), index + 1, [...res, -1 * arr[index]])
  }

  dd(0, 0, [])

  console.log(resultArr)

  if (!resultArr.length) result.value = `无解`;
  else {
    let resultStrings = resultArr.map(res => {
      let str = ''
      // res是直接就是 所有的正负组合
      res.forEach((num, index) => {
        if (index === 0 && num >= 0) {
          str+=num
        } else {
          if (num < 0) {
            str += `${num}`
          } else {
            str += `+${num}`
          }
        }
      })
      str += '=24'
      return str
    })
    resultStrings = [...new Set(resultStrings)]
    console.log(resultStrings)
    result.value = resultStrings.join('\n')
  }
};
</script>
<template>
  <div class="cb-container">
    <UInput v-model="a" class="cb-input"></UInput>
    <UInput v-model="b" class="cb-input"></UInput>
    <UInput v-model="c" class="cb-input"></UInput>
    <UButton class="cb-button" @click="output">计算</UButton>
    <UTextarea v-model="result" class="cb-textarea"></UTextarea>
    <!-- <div>{{ result }}</div> -->
  </div>
</template>
<style>
.cb-container {
  display: flex;
  flex-flow: column;
  gap: 10px;
  .cb-input {
    width: 100px;
    margin-right: 10px;
  }
  .cb-button {
    width: 100px;
  }
  .cb-textarea {
    width: 300px;
    height: 200px;
  }
}
</style>
