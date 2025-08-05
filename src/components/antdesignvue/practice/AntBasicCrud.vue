<script setup>
import {ref, reactive} from "vue";
import {Form} from 'ant-design-vue'

let addStuOpen = ref(false);
let detailStuOpen = ref(false);

let tableHeaders = reactive([
  {title: '姓名', dataIndex: 'username', key: 'username'},
  {title: '年龄', dataIndex: 'age', key: 'age'},
  {title: '操作', dataIndex: 'action', key: 'action'},
]);
let tableDataSources = reactive([
  {username: 'zs', age: 10},
  {username: 'ls', age: 20},
]);
let currentItem = reactive({});

let addStuModel = reactive({
  username: '',
  age: null
});
let addStuRules = reactive({
  username: [
    {min: 3, max: 10, message: '名称需在3到10个字符之间'},
  ],
  age: [
    {required: true, message: '年龄不能为空'},
  ]
})

function addStu() {
  console.log('===addStu===');
  addStuOpen.value = true;
}

const useForm = Form.useForm;
let {resetFields, validate, validateInfos} = useForm(addStuModel, addStuRules, {
  onValidate: (field) => {
    console.log('onValidate#field: ', field);
  }
});

function handlerAddStuModalOk() {
  console.log('===handlerAddStuModalOk===');
  // 校验成功就发送请求，否则重新填写
  validate().then(res => {
    // res：即每个表单字段的值
    console.log('validate().then#res: ', res);
    // 模拟添加数据
    tableDataSources.push({username: res.username, age: res.age})
    // 记得清空表单，否则再次打开仍然有值
    resetFields();
    // 关闭弹窗
    addStuOpen.value = false;
  }).catch(err => {
    console.log('err: ', err);
  })
}

function clickDetail(row) {
  console.log('row: ', row.username, row.age);
  Object.assign(currentItem, row);
  detailStuOpen.value = true;
}

function clickEdit(row) {
  resetFields();
  Object.assign(addStuModel, row);
  addStuOpen.value = true;
  // 用来演示当打开编辑框时让字段不通过校验，此时校验失败信息是否显示在页面上
  // addStuModel.username = row.username + "_new_nwe";
}

// 确认删除
function handleDeleteConfirm(row) {
  tableDataSources.splice(tableDataSources.indexOf(row), 1);
}

// 关闭详情页弹窗
function handleDetailStuModalOk() {
  // 经验证，如果直接将此行代码放在@ok后则模态框不会自动关闭
  detailStuOpen.value = false;
}

</script>

<!--实现简单的crud功能-->
<template>

  <!--操作栏-->
  <a-button @click="addStu">新增</a-button>

  <!--列表区域-->
  <a-table :data-source="tableDataSources" :columns="tableHeaders">
    <!--2处：这里是重点-->
    <template v-slot:bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'action'">
        <a href="#" @click="clickDetail(record)">详情</a> |
        <a href="#" @click="clickEdit(record)">编辑</a> |
        <a-popconfirm title="确认删除" ok-text="确定" cancel-text="不删除了" @confirm="handleDeleteConfirm(record)">
          <a href="#">删除</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>

  <!--新增和编辑通常用同一个模态框。详情用Descriptions组件-->
  <a-modal v-model:open="addStuOpen" title="新增学生" @ok="handlerAddStuModalOk">
    <a-form :model="addStuModel" :rules="addStuRules">
      <!--这里v-bind很重要，如果没有，则打开更新框时如果username违反了校验规则，则不会在页面上显示校验失败信息-->
      <a-form-item label="姓名" name="username" v-bind="validateInfos.username">
        <a-input v-model:value="addStuModel.username"/>
      </a-form-item>
      <a-form-item label="年龄" name="age" v-bind="validateInfos.age">
        <a-input-number v-model:value="addStuModel.age" :min="0" :max="150"/>
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal v-model:open="detailStuOpen" title="详情" @ok="handleDetailStuModalOk">
    <a-descriptions>
      <a-descriptions-item label="姓名">{{ currentItem.username }}</a-descriptions-item>
      <a-descriptions-item label="年龄">{{ currentItem.age }}</a-descriptions-item>
    </a-descriptions>
  </a-modal>
</template>

<style scoped>

</style>