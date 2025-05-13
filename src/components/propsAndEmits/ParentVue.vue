<script>
import {defineComponent} from 'vue'
import ChildVue from "@/components/propsAndEmits/ChildVue.vue";

export default defineComponent({
  name: "ParentVue",
  components: {ChildVue},
  data() {
    return {
      age: 30,
      school: 'hz'
    }
  },
  methods: {
    updateProps(...args) {
      console.log('父组件中updateProps被调用了，在这里修改传递给子组件的props值, 子组件触发事件时传递过来的参数：', args)
      this.age = this.age + 10;
      this.school = this.school + "_new";
    }
  }
})
</script>

<template>
  父组件this.age: {{this.age}}<br>
  父组件this.school: {{this.school}}<br>
  <!--
    1. updateMe是子组件emit的事件名字，updateProps是监听到事件时要调用的回调函数;
    2. address也是传递给子组件的props，只是静态的而已
  -->
  <ChildVue address = 'hangzhou' :age="age" :school="school" @updateMe="updateProps"/>
</template>

<style scoped>

</style>