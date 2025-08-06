<script setup lang="ts">
import {useAttrs} from "vue";

let attrs = useAttrs();

let emit = defineEmits(['openModal']);
function openModal() {
  emit('openModal');
}

</script>

<template>
  <br><br><br>
  <div>
    <h3>弹窗区域</h3>
    <a-button type="primary" @click="openModal">弹窗</a-button>
    <!--重点：保持props透传-->
    <a-modal v-bind="attrs">
      <slot>
        <p>这是默认插槽的默认内容</p>
      </slot>
      <slot name="slot1">
        <p>这是slot1插槽的默认内容</p>
      </slot>
    </a-modal>
  </div>

</template>

<style scoped>

</style>