<script lang="ts">
import {defineComponent} from 'vue'
// 1. 按需引入各图标组件
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons-vue';
export default defineComponent({
  name: "AntIcon",
  // 2. 作为当前组件的子组件
  components: {
    StarOutlined, StarFilled, StarTwoTone
  }
})
</script>

<template>
  <!--3. 使用图标组件-->
  star-outlined: <star-outlined/><br>
  star-filled: <star-filled/><br>
  star-two-tone: <star-two-tone/>
</template>

<style scoped>

</style>