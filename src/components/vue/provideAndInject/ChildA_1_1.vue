<script setup>
// 接收父组件传递过来的数据
import {inject} from "vue";

const name = inject('parentName');
const age = inject('parentAge')
const greetFn = inject('parentGreetFn')

// 传递过来的parentAddress不是响应式数据
let address = inject('parentAddress')

function updateData() {
  name.value += 'new';
  age.value += 10;
  // 这里不是响应式数据，因而只会影响此子组件
  address += 'new';
}
</script>

<template>
  <div style="background-color: yellow">
    这是层级子组件<br>
    接收到的数据，name: {{name}} -- age: {{age}} -- address: {{address}}<br>
    <div >
      <button @click="greetFn">执行从父组件传递过来的方法</button>
      <button @click="updateData">修改父组件传递过来的数据</button>
    </div>

  </div>
</template>

<style scoped>

</style>