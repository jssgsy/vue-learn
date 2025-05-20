<!--1. 选项式api要去掉setup属性-->
<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import About from "./components/RouterParam.vue";
import AntDesignVueLearn from "./components/antdesignvue/AntStaticTable.vue";
// 路径别名
import ModulePathAlias from "@/components/ModulePathAlias.vue";
import VueRequestLearn from "@/components/ProxyServer.vue";
import OptionApiMethodAndVariableDefine from "@/components/OptionApiMethodAndVariableDefine.vue";
import AntDynamicTable from "@/components/antdesignvue/AntDynamicTable.vue";
import ParentVue from "@/components/propsAndEmits/ParentVue.vue";
import BreadCrumb from "@/components/antdesignvue/BreadCrumb.vue";

// 2. 选项式api要手动导出
export default {
  name: 'App',  // 组件的名字
  components: {
    BreadCrumb,
    // 3. 还要指定包含的子组件
    HelloWorld,
    About,
    AntDesignVueLearn,
    ModulePathAlias,
    VueRequestLearn,
    OptionApiMethodAndVariableDefine,
    AntDynamicTable,
    ParentVue,
  }
}
// 从上述1，2，3看，选项式api相较于组合式api在代码上确实更加麻烦些
</script>

<template>
  <router-link to="/antDynamicTable">ant动态数据源表格 | </router-link>

  <router-link to="/antStaticTable">ant静态数据源表格 |</router-link>

  <router-link to="/antPagination">ant分页器 |</router-link>

  <router-link to="/antAutoComplete">ant AutoComplete组件 | </router-link>

  <router-link to="/antIcon">ant Icon组件 | </router-link>

  <router-link to="/antMenu">ant Menu组件 | </router-link>

  <router-link to="/antLayout">ant Layout组件 | </router-link>

  <router-link to="/antBreadCrumb">ant breadCrumb组件 | </router-link>

  <router-link to="/viteEnv">vite环境变量 | </router-link>

  <router-link to="/about/100/aa/zhangsan/bb?q1=query1&q2=query2#myfragment">路由参数 | </router-link>

  <!--这里的msg是所谓的props-->
  <router-link to="/helloWorld">
    hello-world |
  </router-link>
  <!--<HelloWorld msg="Hello World!"/>-->

  <router-link to="/ModulePathAlias">模块路径 | </router-link>

  <router-link to="/proxyServer">代理服务器 | </router-link>

  <router-link to="/optionApiMethodAndVariableDefine">选项式api中属性和方法的定义 | </router-link>

  <router-link to="/useRequestDemo">vue-request(useRequest) | </router-link>

  <router-link to="/usePaginationDemo">vue-request(usePagination) | </router-link>

  <router-link to="/propsAndEmits">props和emits | </router-link>

  <div>
    <br>
    <router-view/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
