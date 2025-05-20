<script setup lang="ts">
import {ref} from "vue";

const env = ref(import.meta.env)
console.log(import.meta.env)
</script>

<template>
来自.env中的环境变量MODE：{{env.MODE}} <br>
来自.env中的环境变量A(不会暴露)：{{env.A}} <br>
来自.env中的环境变量VITE_A：{{env.VITE_A}}
</template>

<style scoped>

</style>