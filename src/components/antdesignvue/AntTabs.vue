<script setup>
import {ref} from "vue";
import {UpCircleOutlined} from "@ant-design/icons-vue";

// 注，这里是字符串，因为key要求是字符串类型
let activeKey = ref('2');

// 别忘了定义key是字符串类型
let tabPaneArr = ref([
  {key: '1', tab: 'tab1', content: '标签1'},
  {key: '2', tab: 'tab2', content: '标签2'},
  {key: '3', tab: 'tab3', content: '标签3'},
]);

function onEdit(targetKey, action) {
  console.log('event: ', targetKey, ' targetKey:', targetKey);
  if (action === 'add') {
    addTab()
  } else {
    removeTab(targetKey);
  }
}

function addTab() {
  let lastEle = tabPaneArr.value[tabPaneArr.value.length - 1];
  let toAdd = {key: lastEle.key + 1, tab: lastEle.tab + "_n", content: lastEle.content + "_add"};
  tabPaneArr.value.push(toAdd);
  activeKey.value = toAdd.key;
}

function removeTab(targetKey) {
  // 这里必须使用.value
  tabPaneArr.value = tabPaneArr.value.filter(item => item.key !== targetKey);
}
</script>

<template>
  <!--最基本-->
  <a-tabs v-model:activeKey="activeKey" type="editable-card" hide-add>
    <a-tab-pane key="1" tab="Tab 1">标签一</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">标签二</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">标签三</a-tab-pane>
  </a-tabs>
  <br>
  <!--管理后台经典用法：可删除, 不可新增-->
  <a-tabs v-model:activeKey="activeKey" type="editable-card" hide-add>
    <a-tab-pane key="4" tab="Tab 4">标签四</a-tab-pane>
    <a-tab-pane key="5" tab="Tab 5">标签五</a-tab-pane>
    <a-tab-pane key="6" tab="Tab 6">标签六</a-tab-pane>
  </a-tabs>
  <br>

  <!--Tabs.TabPane 插槽示例：给tab选项添加icon-->
  <a-tabs v-model:activeKey="activeKey">
    <!--此时不用使用tab属性，让tab插槽去实现-->
    <a-tab-pane key="10">
      <!--使用tab插槽--->
      <template #tab>
        <span>
          <up-circle-outlined/>
          Tab 10
        </span>
      </template>
      标签10
    </a-tab-pane>
  </a-tabs>
  <br>

  <!--动态tab：实现新增与删除tab-->
  <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
    <a-tab-pane v-for="item in tabPaneArr" :key="item.key" :tab="item.tab" >{{ item.tab }}</a-tab-pane>
  </a-tabs>

</template>

<style scoped>

</style>

