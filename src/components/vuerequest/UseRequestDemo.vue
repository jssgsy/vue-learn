<script>
import {defineComponent} from 'vue'
import axios from "axios";
import {useRequest} from "vue-request";

export default defineComponent({
  name: "UseRequestDemo",
  data() {
    return {
      data: null,
      loading: null,
      error: null,
      params: null,
    }
  },
  methods: {
    queryData(p1, p2) {
      return axios.get("http://localhost:5173/api/itai/test/page");
    }
  },
  mounted() {
    // 接口的所有响应(包含响应头)统一封装在这里的data中；
      // 响应体数据被封装在data.data中;
      // 响应体数据被封装在data.headers中;
    // 重点：data只有在请求实际完成后才会有值，因此访问时要注意是否有值，如可借助可选链语法
    // params：是Service(这里的this.queryData)的入参而不是底层axios的入参
    const {loading, data, error, params} = useRequest(this.queryData, {
      defaultParams: [
        {p1: 'zs', p2: 19}
      ]
    });
    this.loading = loading;
    this.data = data;
    this.error = error;
    this.params = params;
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