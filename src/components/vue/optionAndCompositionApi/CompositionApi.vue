<script setup>

// 用返回值来接收
import {reactive, ref, useAttrs, watch} from "vue";

let firstName = ref('zhang');

let teacher = reactive({
  school: 'my_university',
  level: 'good'
});
let hobbies = reactive(['movie', 'exercise', 'boxing']);
let book = reactive({
  name: 'effective java',
  price: 0
})

let props = defineProps(['title', 'age']);
console.log('组合式api访问props，', props)

// 不包含props和emits中声明的
let attrs = useAttrs();
console.log('组合式api访问attrs，', Object.keys(attrs))

// 用返回值接收，后续通过此发送事件
let emit = defineEmits(['changeTitle']);

function clickChangeTitleButton() {
  console.log('组合式api clickChangeTitleButton');
  emit('changeTitle', props.title + "_composition");
}

// watch
// 不用firstName.value
watch(firstName, (newVal, oldVal) => {
  console.log('监听firstName，newVal: ', newVal, ' oldVal: ', oldVal);
});

watch(props.title, (newVal, oldVal) => {
  console.log('props属性也可以监听，[title] newVal: ', newVal, ' oldVal: ', oldVal);
});

// 第一个参数需要是一个响应式引用（ref）、一个响应式对象（reactive）、一个 getter 函数，或者一个包含这些的数组
// 因此这是错误的，不能直接传递teacher.school，此时不是响应式的
/*watch(teacher.school, (newVal, oldVal) => {
  console.log('计算对象指定属性teacher.school被触发了, newVal: ', newVal, ' oldVal: ', oldVal);
});*/
watch(() => teacher.school, (newVal, oldVal) => {
  console.log('计算对象指定属性teacher.school被触发了, newVal: ', newVal, ' oldVal: ', oldVal);
});

watch(hobbies, (newVal, oldVal) => {
  // 注，此时newVal与oldVal是相同的，因为都是引用而已
  console.log('深度监听数组hobbies，newVal: ', newVal, ' oldVal: ', oldVal);
}, {deep: true});

watch(book, (newVal, oldVal) => {
  // 注，此时newVal与oldVal是相同的，因为都是引用而已
  console.log('深度监听对象book，newVal: ', newVal, ' oldVal: ', oldVal);
}, {deep: true, immediate: true});


</script>

<template>
  <div>
    <div>
      <p>props[title]: {{ props.title ?? '默认的title' }}---props[age]: {{ props.age ?? -1 }}</p><br>
      <button @click="clickChangeTitleButton">触发事件emit</button>
    </div>

    <p>attributes: aaa: {{ attrs.aaa }}---aaa: {{ attrs.bbb }}</p>
    <div>
      attributes: 方法也会自动转成attributes, 会自动在前面加on前缀: <br>
      方法名：noWhat，转成的属性名：{{ attrs.onNoWhat() }}
    </div>
  </div>
  <div style="background-color: purple">
    <h3>测试watch</h3>
    <p><button @click="firstName+='-new'" >改变成员变量firstName</button></p>
    <p><button @click="clickChangeTitleButton" >改变prop title(由父组件触发)</button></p>
    <p><button @click="teacher.school+='-new'" >改变成员变量teacher.school</button></p>
    <p><button @click="teacher.level+='-new'" >改变成员变量teacher.level(不会触发)</button></p>
    <p><button @click="hobbies.push('another')" >改变数组hobbies</button></p>
    <p><button @click="book.price+=1" >改变对象book</button></p>
  </div>
</template>

<style scoped>

</style>