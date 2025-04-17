<!--演示在选项式中变量和方法的定义-->
<script>
// 组件全局变量和方法定义在这里
let myVariable = {
  host: 'http://localhost:8080'
};

function pureToolFn() {
  console.log("这里是外部的pureToolFn方法，即没法访问组件的响应式数据与响应式方法，因为没有绑定this，myVariable.host: ", myVariable.host)
  // 当然，可以调用这里的其它方法
  pureToolFn2()
}
function pureToolFn2() {
  console.log("这里是外部的pureToolFn2方法")
}

// 通过入参的方法取得组件实例，进而调用组件的响应式数据和方法
function myFn(component) {
  console.log("这里是外部的myFn方法，component.name", component.name)
  // 可以调用组件的响应式数据与响应式方法了
  component.name = 'hello, world'
  component.fn2()
}

export default {
  name: "OptionApiMethodAndVariableDefine",
  data() {
    return {
      // 这是响应式数据
      name: 'option name'
    }
  },
  methods: {
    fn() {
      // 组件全局方法当然可以调用
      pureToolFn()

      // 将组件实例传递给外界方法
      myFn(this)
    },
    fn2() {
      console.log('这里是methods.fn2()')
    }
  }
}
</script>

<template>
  <div>
    this.name: {{ this.name }}
    <button @click="this.name='yyy'">访问组件响应式数据</button>
    <button @click="fn">访问组件响应式方法</button>
  </div>
</template>