<script>
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
  name: "AntDynamicTable",
  data() {
    return {
      columns: [{
        title: "姓名",
        dataIndex: "name",
        key: "name",
      }, {
        title: "学校",
        dataIndex: "school",
        key: "school",
      }, {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      }],
      dataSource: [],
    }
  },
  methods: {
    async queryData() {
      let response = await axios.get("http://127.0.0.1:5173/api/itai/test/stu");
      this.dataSource = response.data;
    }
  },
  mounted() {
    this.queryData()
  }
})
</script>

<template>
  <a-table :columns="columns" :data-source="dataSource" >

  </a-table>
</template>

<style scoped>

</style>