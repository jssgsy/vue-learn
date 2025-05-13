<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ChildVue",
  // 必须显式指定从直接父子组件接收的属性
  props: ['address', 'age', 'school'],
  // 通过emits指定要传递给父组件的事件
  emits: ['updateMe'],
  methods: {
    change() {
      console.log('子组件change被触发, 不要在子组件中修改从父组件传递过来的值')
      // updateMe是事件名称，由父组件监听
      // 通过this.$emit来发送事件，也可直接用在模板中
      // 还可以传值给事件updateMe对应的回调函数中
      this.$emit('updateMe', this.age, this.school, 'aaa', 'bbb')
    }
  }
})
</script>

<template>
  子组件从父组件得到的address: {{address}}<br>
  子组件从父组件得到的age: {{age}}<br>
  子组件从父组件得到的school: {{school}}<br>
  <button @click="change">修改从父组件得到的age和school</button>
</template>

<style scoped>

</style>