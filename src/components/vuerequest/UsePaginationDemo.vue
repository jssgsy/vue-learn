<script>
import {defineComponent} from 'vue'
import {usePagination} from "vue-request";
import axios from "axios";

export default defineComponent({
  name: "UsePaginationDemo",
  setup() {
    function queryData() {
      return axios.get("http://localhost:5173/api/itai/test/page");
    }
    // loading, data, error, params也适用于useRequest，或者说usePagination是从useRequest继承来的
    // current, pageSize, totalPage, total等是usePagination独有的
    const {loading, data, error, params, current, pageSize, totalPage, total} = usePagination(queryData, {
      defaultParams: [
        { // 分页接口至少都需要两个参数，默认分别为1、10
          page: 2,  // 1.2处： 因为1.1处指定为page
          pageSize2: 15,  // 2.2处 因为2.1处指定为pageSize2
        }],
      pagination: {
        currentKey: 'page', // 1.1处： 指定分页入参为page，默认为current
        pageSizeKey: 'pageSize2',  // 2.1处： 指定每页大小入参为pageSize2，默认为pageSize
        totalKey: 'data.total', // 表示接口响应中表示总条数的字段(响应均被封装在data中)，要用引号括起来
        totalPageKey: 'data.pages'  // 表示接口响应中表示总页数的字段(响应均被封装在data中)，要用引号括起来
      }
    });
    return {loading, data, error, params, current, pageSize, totalPage, total};
  }
})
</script>

<template>
  data: {{ this.data }} <br>
  loading: {{ this.loading }} <br>
  error: {{ this.error }} <br>
  params: {{ this.params }} <br>
  current: {{ this.current }} <br>
  pageSize: {{ this.pageSize }} <br>
  totalPage: {{ this.totalPage }} <br>
  total: {{ this.total }} <br>
</template>

<style scoped>

</style>