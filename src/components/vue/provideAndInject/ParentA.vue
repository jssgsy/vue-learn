<script setup>
import {provide, ref} from "vue";

const age = ref(30);
const name = ref("zs");
function greet() {
  alert('name: ' + name.value + ' age: ' + age.value);
}

// 传递数据到子组件
// 传递响应式数据，子组件可以直接修改
provide('parentName', name)
provide('parentAge', age)
provide('parentGreetFn', greet)
// 直接传递固定值，非响应式
provide('parentAddress', 'hz')

</script>

<template>

<div style="background-color: #747bff">
  这是ParentA区域；<br>
  name: {{name}} -- age: {{age}} <br>
  <router-view />
  <router-link to="/provideAndInject/childA_1" style="background-color: red" >加载直接子组件</router-link><br>
  <router-link to="/provideAndInject/childA_1/childA_1_1" style="background-color: red">加载层级子组件</router-link>
</div>

</template>

<style scoped>

</style>