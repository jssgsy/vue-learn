<script setup lang="ts">

import {ref} from "vue";

function handleConfirm(e) {
  console.log('confirm', e);
}

function handleCancel(e) {
  console.log('Cancel', e)
}


</script>

<template>
  <!--@confirm和@cancel可以省略，会直接关闭-->
  <a-popconfirm title="这是title" description="这是description" ok-text="确定" cancel-text="不删除了" @confirm="handleConfirm"
                @cancel="handleCancel" >
    <a href="#">删除</a>
  </a-popconfirm>
</template>

<style scoped>

</style>