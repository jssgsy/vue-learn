<script>
import {defineComponent, ref, h} from "vue";
import {StarFilled} from "@ant-design/icons-vue";

export default {
  name: 'AntMenu',
  setup() {
    const basicItems = ref([
      {key: 'aaa', label: '一级标题1', title: '一级标题1-xxx', children: [
          {key: 'aaa_1', label: '二级标题1', title: '二级标题1-xxx'},
          {key: 'aaa_2', label: '二级标题2', title: '二级标题2-xxx', children: [
              {key: 'aaa_2_1', label: '三级标题1', title: '三级标题1-xxx'},
            ]},
        ]},
      {key: 'bbb', label: '一级标题2', title: '一级标题2-xxx', children: [
          {key: 'bbb_2', label: '二级标题3', title: '二级标题3-xxx'},
          {key: 'bbb_3', label: '二级标题4', title: '二级标题4-xxx'},
        ]},
      {key: 'ccc', label: '一级标题3', title: '一级标题3-xxx'},
    ]);

    const items = ref([
      {key: 'ddd', label: '一级标题1', title: '一级标题1-xxx', children: [
          {key: 'ddd_1', label: '二级标题1', title: '二级标题1-xxx'},
          {key: 'ddd_2', label: '二级标题2', title: '二级标题2-xxx', children: [
              {key: 'ddd_2_1', label: '三级标题1', title: '三级标题1-xxx'},
            ]},
        ]},
      {key: 'eee', label: '一级标题2', title: '一级标题2-xxx', children: [
          {key: 'eee_2', label: '二级标题3', title: '二级标题3-xxx'},
          {key: 'eee_3', label: '二级标题4', title: '二级标题4-xxx'},
        ]},
      // 加上图标
      {key: 'fff', label: '一级标题3', title: '一级标题3-xxx', icon: () => h(StarFilled)},
    ]);
    // 当前展开的 SubMenu 菜单项 key 数组
    const openKeys = ['eee'];

    // 当前选中的菜单项 key 数组
    const selectedKeys = ['eee_2', 'fff'];

    return {
      basicItems, items, openKeys, selectedKeys,
    }
  }
}
</script>

<template>
  <!--最基础：此时需要显式展开或收缩-->
  <a-menu id="aaa" style="width: 256px" mode="inline" :items="basicItems" v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"/>
<hr>

  <a-menu id="bbb" style="width: 256px" mode="inline" :items="items"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
  />
</template>

<style scoped>

</style>