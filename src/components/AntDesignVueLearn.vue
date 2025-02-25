<script lang="ts">
  export default {
    name: 'AntDesignVue',
    data() {
      return {
        dataSource: [
        {
          key: '1',
          name: '张三',
          age: 28,
          address: 'wh',
          detail: '张三的详细信息',
          children: [
            { key: '1-1', name: '张三的子项', age: 20, address: 'xianning' }
          ],
        },
        {
          key: '2',
          name: '李四',
          age: 32,
          address: 'hz'
        }
      ],

        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
        ],
      }
    }
  }
</script>
<template>
  <a-table :dataSource="dataSource" :columns="columns" :default-expand-all-rows="true" />
</template>

<style scoped>

</style>