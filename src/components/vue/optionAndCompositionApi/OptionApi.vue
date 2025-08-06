<script lang="ts">
import {defineComponent, useAttrs} from 'vue'

export default defineComponent({
  name: "OptionApi",
  props: ['title', 'age'],
  emits: ['changeTitle'],
  methods: {
    clickChangeTitleButton: function () {
      console.log('选项式api clickChangeTitleButton');
      this.$emit('changeTitle', this.title + "_option");
    }
  },
  mounted() {
    console.log('选项式api访问props，', this.$props);

    // 不包含props和emits中声明的
    console.log('选项式api访问attrs，', Object.keys(this.$attrs))
  }
})
</script>

<template>
  <div>
    <div>
      props[title]: {{ this.title ?? '默认的title' }}---props[age]: {{ this.age ?? -1 }}<br>
      <button @click="clickChangeTitleButton">触发事件emit</button>
    </div>
    <p>attributes: aaa: {{ this.$attrs.aaa }}---aaa: {{ this.$attrs.bbb }}</p>
    <div>
      attributes: 方法也会自动转成attributes, 会自动在前面加on前缀: <br>
      方法名：noWhat，转成的属性名：{{ this.$attrs.onNoWhat() }}
    </div>
  </div>
</template>

<style scoped>

</style>