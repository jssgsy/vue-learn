<script setup>

import {ref} from "vue";

let name = ref('子组件名称');
let age = ref(10);
let address = ref('子组件地址');
function greet() {
  // 注，是${name.value}而不是${name}，因为name是个ref
  return `greet, ${name.value}`;
}

function fn() {
  // 注，是${name.value}而不是${name}，因为name是个ref
  return `fn, ${name.value}`;
}

// 重点：入参必须是对象，不能是数组
defineExpose({name, fn})
// defineExpose(['name', 'fn'])  // 这是错误的

</script>

<template>
  <div style="background-color: orange">
    <h3>这是子组件区域</h3>
    <p>name: {{name}}---age: {{age}}---address: {{address}}</p>
    <p>greet方法调用结果: {{greet()}}---fn方法调用结果: {{fn()}}</p>
  </div>
</template>

<style scoped>

</style>