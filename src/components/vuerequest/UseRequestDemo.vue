<script>
import {defineComponent} from 'vue'
import axios from "axios";
import {useRequest} from "vue-request";

export default defineComponent({
  name: "UseRequestDemo",
  // useRequest是采用的组合式api，如果项目使用选项式api则需放在这里setup方法中
  setup() {
    function queryData(p1, p2) {
      return axios.get("http://localhost:5173/api/itai/test/page");
    }
    // 接口的所有响应(包含响应头)统一封装在这里的data中；
    // 响应体数据被封装在data.data中;
    // 响应体数据被封装在data.headers中;
    // 重点：data只有在请求实际完成后才会有值，因此访问时要注意是否有值，如可借助可选链语法
    // params：是Service(这里的this.queryData)的入参而不是底层axios的入参
    const {loading, data, error, params} = useRequest(queryData, {
      defaultParams: [
        {p1: 'zs', p2: 19}
      ]
    });
    return {
      loading, data, error, params
    }
  }
})
</script>

<template>
  <!--注，这里务必记得使用可选链(?.)，因为this.data只有在接口完成后才被填充-->
  响应状态: {{ this.data?.status }} <br>
  响应头: {{ this.data?.headers }} <br>
  响应数据: {{ this.data?.data }} <br>
  loading: {{ this.loading }} <br>
  error: {{ this.error }} <br>
  params: {{ this.params }} <br>
</template>

<style scoped>

</style>