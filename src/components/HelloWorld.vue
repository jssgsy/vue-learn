<script lang="ts">
export default {
  name: 'HelloWorld',
  data() {
    // 组件要使用的数据必须放在这里
    return {
      count: 0,
    }
  }
}
</script>

<template>
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
