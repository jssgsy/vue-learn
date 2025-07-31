<script>
import {defineComponent, h} from 'vue'
import RenderChild from "@/components/vue/render/RenderChild.vue";

export default defineComponent({
  name: "Render",
  components: {RenderChild},
  data() {
    return {
      name: 'zs',
      age: 30
    }
  },
  render() {
    return h(
        'div',
        { style: 'background-color: #747bff' },
        [
          h('p', '这是父组件开始区域'),
          h(
              RenderChild,
              {},
              {
                // 具名插槽 slot1
                slot1: () => h('div', '这是父组件传递的slot1的值'),

                // 作用域插槽 slot2
                slot2: (param) => h(
                    'div',
                    `这是父组件传递的slot2的值, 收到子组件的参数，title: ${param.title} -- age: ${param.age}`
                )
              }
          ),
          h('p', '这是父组件结束区域')
        ]
    );
  }
})
</script>

<!--上述渲染函数等价写法如下-->
<!--<template>
  <div style="background-color: #747bff">
    <p>这是父组件开始区域</p>
    <RenderChild>
      <template v-slot:slot1>
        <div>这是父组件传递的slot1的值</div>
      </template>
      <template v-slot:slot2="param">
        <div>这是父组件传递的slot2的值, 收到子组件的参数，title: {{param.title}} &#45;&#45; age: {{param.age}}</div>
      </template>
    </RenderChild>
    <p>这是父组件结束区域</p>
  </div>
</template>-->

<style scoped>

</style>