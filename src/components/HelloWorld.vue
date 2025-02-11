<script lang="ts">
export default {
  name: 'HelloWorld',
  // 1. 一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute;
  // 2. 属性可以是静态的也可以是动态的；
  props: ['msg'],
  data() {
    // 组件要使用的数据必须放在这里
    return {
      count: 0,
    }
  }
}
</script>

<template>
  <!--使用属性-->
  <h1>{{ msg }}</h1>
  <div class="card">
    <!--@click是v-on的缩写-->
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" v-on:click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
