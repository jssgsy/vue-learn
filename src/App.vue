<!--1. 选项式api要去掉setup属性-->
<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

// 2. 选项式api要手动导出
export default {
  name: 'App',  // 组件的名字
  components: {
    // 3. 还要指定包含的子组件
    HelloWorld
  }
}
// 从上述1，2，3看，选项式api相较于组合式api在代码上确实更加麻烦些
</script>

<template>
  <!--这里的msg是所谓的props-->
  <HelloWorld msg="Hello World!" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
