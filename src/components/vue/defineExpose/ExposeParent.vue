<script setup lang="ts">

import ExposeChild from "@/components/vue/defineExpose/ExposeChild.vue";
import {onMounted, ref, watch} from "vue";

// 填充为null或空
let childRef = ref(null);

// 一般在onMounted中调用，确保组件已经加载后再调用
onMounted(() => {
  // 确保子组件已经加载完成，通常已经是完成状态
  if (childRef.value) {
    console.log('父组件获取的子组件的name: ', childRef.value.name);
    console.log('父组件获取的子组件的age(并没有expose): ', childRef.value.age);
    console.log('父组件调用子组件方法fn: ', childRef.value.fn());
    // 这里不要直接使用childRef.value.greet()，因为其根本不是一个函数，抛异常
    console.log('父组件调用子组件方法greet(并没有expose): ', childRef.value.greet);
  } else {
    console.log("子组件尚未加载完成，没法访问");
  }
});

let name = ref("");
watch(() => childRef.value?.name, (newVal) => {
  name.value = newVal;
})
</script>

<template>
  <div style="background-color: #747bff">
    <h3>这里父组件区域</h3>
    <!--不能直接在父模板中访问子组件expose的属性，需要在js中中转-->
    <!--<p>name: {{childRef.name}}</p>-->
    <p>在父模板中只能间接访问子组件expose的属性(name): {{name}}</p>
    <expose-child ref="childRef"></expose-child>
    <p>xx</p>
  </div>

</template>

<style scoped>

</style>