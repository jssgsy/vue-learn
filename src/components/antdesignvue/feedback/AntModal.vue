<script setup lang="ts">
import {ref} from "vue";
import {Modal} from "ant-design-vue";

let open = ref(false);
function showModal() {
  open.value = !open.value;
}

function handleOk(e) {
  console.log('e: ', e);
  open.value = !open.value;
}

function programModal() {
  // 构造时就带内容
  const modal = Modal.info({
    title: '修改的标题',
    content: '修改的内容',
    closable: true,
    // cancelText: '取消'
  });

  // 可以通过update方法更新弹窗内容
  // modal.update({});
}

</script>

<template>
  <div>
    <a-button type="primary" @click="showModal">弹窗</a-button>
    <a-modal v-model:open="open" title="这是一个模态弹窗"
             ok-text="好的" :mask-closable='false' @ok="handleOk">
      <p>全部是静态数据</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
  <br>
  <div>
    <a-button @click="programModal()" type="primary">编程式弹窗</a-button>
  </div>
</template>

<style scoped>

</style>