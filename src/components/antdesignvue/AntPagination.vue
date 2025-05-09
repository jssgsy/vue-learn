<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AntPagination",
  data() {
    return {
      current: 2,
      pageSizeOptions: [5, 15, 25, 35],
    }
  }
})
</script>

<template>
  最基础：
  <a-pagination v-model:current="current" :total="15" :page-size-options="pageSizeOptions"/>
  <hr>

  total超过50自动出现切换器：
  <a-pagination v-model:current="current" :total="55" />
  <hr>

  允许跳转到指定页：
  <a-pagination v-model:current="current" :total="55" :show-quick-jumper="true"/>
  <hr>

  禁用分页：
  <a-pagination v-model:current="current" :total="55" disabled/>
  <hr>

</template>

<style scoped>
body {
  background-color: #f5f5f5;
}

</style>