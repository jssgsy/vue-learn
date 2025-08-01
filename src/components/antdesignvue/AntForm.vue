<script setup>
import {reactive, ref, h} from "vue";

let formState = reactive({
  username: '',
  password: '',
});

// 提交表单且数据验证成功后回调事件
// 注，不是说向后端发送请求
function onFinish(values) {
  console.log('onFinish被回调了，函数入参values', values);
}

// 提交表单且数据验证失败后回调事件
// 如要求名称为3-6个字符，但是只输入了2个字符
// 注：不满足要求应该不让发送后端请求
function onFinishFailed({values, errorFields, outOfDate}) {
  console.log('onFinishFailed被回调了，函数各入参如下 ', 'values: ', values)
  console.log('errorFields: ', errorFields);
  console.log("outOfDate ", outOfDate);
}

function onValidate(name, status, errorMsgs) {
  console.log('validate被回调了，函数各入参如下 ', 'name: ', name)
  console.log('status: ', status);
  console.log("errorMsgs ", errorMsgs);
}

// 这里的key即具体表单项对应的name属性值
const fieldRules = {
  username: [
    {required: true, message: 'Please input your username!'},
    {min: 3, max: 6, message: '名称需在3-6个字符之间'}
  ],
  password: [{required: true, message: 'Please input your password!'}]
}
</script>

<template>

  <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      @validate="onValidate"
      :rules="fieldRules"
  >
    <!--:rules 也可以集中放到a-form下统一管理-->
    <a-form-item
        label="Username"
        name="username"
    >
      <a-input v-model:value="formState.username"/>
    </a-form-item>

    <a-form-item
        label="Password"
        name="password"
    >
      <a-input-password v-model:value="formState.password"/>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>