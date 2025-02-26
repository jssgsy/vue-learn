<!--1. 选项式api要去掉setup属性-->
<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import About from "./components/About.vue";
import AntDesignVueLearn from "./components/AntDesignVueLearn.vue";
// 路径别名
import ModulePathAlias from "@/components/ModulePathAlias.vue";
import VueRequestLearn from "@/components/ProxyServer.vue";

// 2. 选项式api要手动导出
export default {
  name: 'App',  // 组件的名字
  components: {
    // 3. 还要指定包含的子组件
    HelloWorld,
    About,
    AntDesignVueLearn,
    ModulePathAlias,
    VueRequestLearn
  }
}
// 从上述1，2，3看，选项式api相较于组合式api在代码上确实更加麻烦些
</script>

<template>

  <div>
    <router-view/>
  </div>

  <!--ant-design-vue学习页面-->
  <router-link to="/antdesignlearn">
    进行ant-design-vue学习页面
  </router-link>
  <br>

  <!--使用路由-->
  <router-link to="/about/100/aa/zhangsan/bb?q1=query1&q2=query2#myfragment">关于</router-link>

  <!--这里的msg是所谓的props-->
  <HelloWorld msg="Hello World!"/>

  <!--模块路径别名引入-->
  <ModulePathAlias></ModulePathAlias>

  <!--配置代理服务器-->
  <VueRequestLearn></VueRequestLearn>
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
