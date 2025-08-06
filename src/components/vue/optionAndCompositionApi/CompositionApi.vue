<script setup lang="ts">

// 用返回值来接收
import {useAttrs} from "vue";
import {formToJSON} from "axios";

let props = defineProps(['title', 'age']);
console.log('组合式api访问props，', props)

// 不包含props和emits中声明的
let attrs = useAttrs();
console.log('组合式api访问attrs，', Object.keys(attrs))

// 用返回值接收，后续通过此发送事件
let emit = defineEmits(['changeTitle']);
function clickChangeTitleButton () {
  console.log('组合式api clickChangeTitleButton');
  emit('changeTitle', props.title + "_composition");
}

</script>

<template>
<div>
  <div>
    <p>props[title]: {{props.title ?? '默认的title'}}---props[age]: {{props.age ?? -1}}</p><br>
    <button @click="clickChangeTitleButton">触发事件emit</button>
  </div>

  <p>attributes: aaa: {{attrs.aaa}}---aaa: {{attrs.bbb}}</p>
  <div>
    attributes: 方法也会自动转成attributes, 会自动在前面加on前缀: <br>
    方法名：noWhat，转成的属性名：{{ attrs.onNoWhat() }}
  </div>
</div>
</template>

<style scoped>

</style>