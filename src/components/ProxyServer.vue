<script lang="ts">
import axios from "axios";

export default {
  name: "VueRequestLearn",
  setup() {
    // 此时前端接口端口是vite开发服务器的端口，而不是后端服务器的端口
    // 经验证：schema(http、https)必不可少
    let result = axios.get("http://127.0.0.1:5173/api/param/noParam");
    result.then((response) => {console.log(response.data);})
        .catch((error) => {console.log(error);});
  }
}
</script>

<style scoped>

</style>