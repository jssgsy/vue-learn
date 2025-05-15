<script setup lang="ts">

import {reactive} from "vue";

// 下拉菜单
const menus = reactive([
  {key: 'aaa', label: '菜单1'},
  {key: 'bbb', label: '菜单2'},
  {key: 'ccc', label: '菜单3'},
]);
</script>

<template>
  <!--separator默认是/-->
  <a-breadcrumb separator=">">
    <a-breadcrumb-item>aaa</a-breadcrumb-item>
    <a-breadcrumb-item>bbb</a-breadcrumb-item>
    <a-breadcrumb-item>ccc</a-breadcrumb-item>
    <a-breadcrumb-item>ddd</a-breadcrumb-item>
  </a-breadcrumb>
  <br>

  <!--全局separator默认是/，默认会在每个<a-breadcrumb-item>后自动加上-->
  <a-breadcrumb separator="">
    <a-breadcrumb-item>aaa</a-breadcrumb-item>
    <a-breadcrumb-separator> > </a-breadcrumb-separator>
    <a-breadcrumb-item>bbb</a-breadcrumb-item>
    <a-breadcrumb-separator> | </a-breadcrumb-separator>
    <a-breadcrumb-item>ccc</a-breadcrumb-item>
    <a-breadcrumb-separator> | </a-breadcrumb-separator>
    <a-breadcrumb-item>ddd</a-breadcrumb-item>
  </a-breadcrumb>
<br>

  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item>
      bbb
      <template #overlay>
        <a-menu id="aaa" mode="inline" :items="menus"/>
      </template>
    </a-breadcrumb-item>
    <a-breadcrumb-item>ccc</a-breadcrumb-item>
    <a-breadcrumb-item>ddd</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<style scoped>

</style>