<script>

import {defineComponent, h, ref} from "vue";

export default defineComponent({
  name: 'RenderChild',
  setup() {
    let title = ref("标题");
    let age = ref(30);

    return {title, age}
  },
  render() {
    return h('div', {style: 'background-color: yellow'}, [
      // 使用this.$slots来访问父组件传递过来的插槽信息
      // this.$slots.default为真表示父组件显式提供了插槽的内容，因而使用之，否则定义一个默认的.
      // 等价写法如下
      /*this.$slots.default ? this.$slots.default() : h('slot', [
        h('p','这是子组件默认插槽的值')]
      ),*/
      this.$slots.default ? this.$slots.default() : h('p', '这是子组件默认插槽的值'),
      this.$slots.slot1 ? this.$slots.slot1() : h('p', '这是子组件slot1具名插槽的默认内容'),
      this.$slots.slot2 ? this.$slots.slot2({
        title: this.title,
        age: this.age
      }) : h('p', '这是子组件slot2作用域插槽的默认内容'),
    ])
  }
})

</script>
<!--上次渲染函数等价写法如下-->
<!--<template>
<div style="background-color: #747bff">
  <slot>这是子组件默认插槽的值</slot>
  <slot name="slot1">这是子组件slot1具名插槽的默认内容</slot>
  <slot name="slot2" :title="title" :age="age">这是子组件slot2作用域插槽的默认内容</slot>
</div>
</template>-->

<style scoped>

</style>