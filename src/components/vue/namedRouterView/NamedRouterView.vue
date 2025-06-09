<script setup lang="ts">

</script>

<template>
  这里是NamedRouterView.vue。
  <router-link to="/namedRouterView/x">点X</router-link> |
  <router-link to="/namedRouterView/y">点Y</router-link>

  <div style="color: red">
    <!--名字默认为default-->
    这里是默认的view.内容为：
    <router-view/>
    <br>
  </div>

  <div style="color: green">
    这里是viewX.内容为：
    <router-view name="x"/>
    <br>
  </div>

  <div style="color: purple">
    这里是viewY.内容为：
    <router-view name="y"/>
    <br>
  </div>

</template>

<style scoped>

</style>