<script setup lang="ts">
import MyModal from "@/components/antdesignvue/practice/MyModal.vue";
import {ref} from "vue";

let modalOpen = ref(false);
function openModal() {
  modalOpen.value = true;
}

function clickOk() {
  modalOpen.value = false;
}

</script>

<!--封装组件-->
<template>

  <my-modal v-model:open="modalOpen"
            ok-text="可以可以"
            title="标标题"
            @open-modal="openModal"
            @ok="clickOk">
    <!--默认插槽不动-->

    <template #slot1>
      <h3>这是父组件传递的slot1的内容</h3>
    </template>
  </my-modal>

</template>

<style scoped>

</style>