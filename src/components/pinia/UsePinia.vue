<script setup>
import {useCounterStore} from "@/components/pinia/stores/counter.js";
// 使用store，这里couter就相当于是一个全局对象了
let counter = useCounterStore();
console.log('js 来自useCounterStore中的count属性值：', counter.count);

</script>

<template>

  来自useCounterStore中的counter属性：{{counter.count}}
  <br>
  <button @click="counter.plus(1)">counter加1</button>
  <button @click="counter.minus(1)">counter减1</button>

</template>

<style scoped>

</style>