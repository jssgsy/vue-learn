<script>
import {defineComponent, useAttrs} from 'vue'

export default defineComponent({
  name: "OptionApi",
  props: ['title', 'age'],
  emits: ['changeTitle'],
  data() {
    return {
      firstName: 'zhang',
      lastName: 'shan',
      teacher: {
        school: 'my_university',
        level: 'good'
      },
      hobbies: ['movie', 'exercise', 'boxing'],
      book: {
        name: 'effective java',
        price: 0
      }
    }
  },
  methods: {
    clickChangeTitleButton: function () {
      console.log('选项式api clickChangeTitleButton');
      this.$emit('changeTitle', this.title + "_option");
    }
  },
  watch: {
    firstName(newVal, oldVal) {
      console.log('监听firstName，newVal: ', newVal, ' oldVal: ', oldVal);
    },
    // 可以监听props
    title(newVal, oldVal) {
      console.log('props属性也可以监听，[title] newVal: ', newVal, ' oldVal: ', oldVal);
    },
    'teacher.school'(newVal, oldVal) {
      console.log('计算对象指定属性teacher.school被触发了, newVal: ', newVal, ' oldVal: ', oldVal);
    },
    hobbies:  {
      // handler方法名是固定的
      handler(newVal, oldVal) {
        // 注，此时newVal与oldVal是相同的，因为都是引用而已
        console.log('深度监听数组hobbies，newVal: ', newVal, ' oldVal: ', oldVal);
      },
      deep: true,
    },
    book: {
      handler(newVal, oldVal) {
        // 注，此时newVal与oldVal是相同的，因为都是引用而已
        console.log('深度监听对象book，newVal: ', newVal, ' oldVal: ', oldVal);
      },
      deep: true,
      // 需要在初始化时立即执行回调函数，设置 immediate: true
      immediate: true,
    }
  },
  computed: {
    // fullName就是计算属性的名字，可被直接使用
    // 是一个函数，相当于只定义了getter函数，即fullName只是可读的
    fullName()  {
      console.log('计算属性，firstName或lastName发生了变动')
      return this.firstName + this.lastName
    },
    // 细化，此时fullName2是可读可写的
    fullName2: {
      // 访问fullName时被调用
      get() {
        console.log('计算属性getter，firstName或lastName发生了变动')
        return this.firstName + this.lastName
      },
      // 修改fullName时被调用
      set(newValue) {
        console.log('计算属性setter，firstName或lastName发生了变动')
        const names = newValue.split(' ')
        this.firstName = names[0] || ''
        this.lastName = names[1] || ''
      }
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
  <div style="background-color: purple">
    <h3>测试watch</h3>
    <p><button @click="this.firstName+='-new'" >改变成员变量firstName</button></p>
    <p><button @click="clickChangeTitleButton" >改变prop title(由父组件触发)</button></p>
    <p><button @click="this.teacher.school+='-new'" >改变成员变量teacher.school</button></p>
    <p><button @click="this.teacher.level+='-new'" >改变成员变量teacher.level(不会触发)</button></p>
    <p><button @click="this.hobbies.push('another')" >改变数组hobbies</button></p>
    <p><button @click="this.book.price+=1" >改变对象book</button></p>
  </div>
  <br>
  <div style="background-color: green">
    <h3>测试computed</h3>
    计算属性fullName：{{this.fullName}}---fullName2：{{this.fullName2}}
    <p><button @click="this.firstName+='-new'" >改变firstName</button></p>
    <p><button @click="this.fullName2+=' new'" >改变fullName2</button></p>
  </div>
</template>

<style scoped>

</style>