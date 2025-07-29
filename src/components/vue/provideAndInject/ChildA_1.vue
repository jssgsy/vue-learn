<script setup>

import {inject} from "vue";

// 接收父组件传递过来的数据
const name = inject('parentName');
const age = inject('parentAge')
const greetFn = inject('parentGreetFn')
const address = inject('parentAddress')

</script>

<template>
  <div style="background-color: green">
    这是直接子组件<br>
    接收到的数据，name: {{name}} -- age: {{age}} -- address: {{address}}<br>
    <router-view />
    <button @click="greetFn">执行从父组件传递过来的方法</button>
  </div>
</template>

<style scoped>

</style>