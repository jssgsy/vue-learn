<!--1. 选项式api要去掉setup属性-->
<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const menuItems = [
      {key: 'vue', title: '悬浮vue', label: 'vue', children: [
          {key: 'vue路由参数', title: '路由参数', label: '路由参数', path: '/about/100/aa/zhangsan/bb?q1=query1&q2=query2#myfragment'},
          {key: 'vue模块路径', title: '模块路径', label: '模块路径', path: '/ModulePathAlias'},
          {key: 'vue代理服务器', title: '代理服务器', label: '代理服务器', path: '/proxyServer'},
          {key: 'vue选项式api中属性和方法的定义', title: '选项式api中属性和方法的定义', label: '选项式api中属性和方法的定义', path: '/optionApiMethodAndVariableDefine'},
          {key: 'vueprops和emits', title: 'props和emits', label: 'props和emits', path: '/propsAndEmits'},
          {key: 'vueProvide和Inject', title: 'Provide和Inject', label: 'Provide和Inject', path: '/provideAndInject'},
          {key: 'vue命名router-view', title: '命名router-view', label: '命名router-view', path: '/namedRouterView'},
          {key: 'vue渲染函数', title: '渲染函数', label: '渲染函数', path: '/render'},
        ]},
      {key: 'k3', title: '悬浮ant-design-vue', label: 'ant-design-vue', children: [
          {key: '动态数据源表格', label: '动态数据源表格', title: '动态数据源表格', path: '/antDynamicTable'},
          {key: '静态数据源表格', label: '静态数据源表格', title: '静态数据源表格', path: '/antStaticTable'},
          {key: '分页器', label: '分页器', title: '分页器', path: '/antPagination'},
          {key: 'AutoComplete组件', label: 'AutoComplete组件', title: 'AutoComplete组件', path: '/antAutoComplete'},
          {key: 'Icon组件', label: 'Icon组件', title: 'Icon组件', path: '/antIcon'},
          {key: 'Menu组件', label: 'Menu组件', title: 'Menu组件', path: '/antMenu'},
          {key: 'Layout组件', label: 'Layout组件', title: 'Layout组件', path: '/antLayout'},
          {key: 'breadCrumb组件', label: 'breadCrumb组件', title: 'breadCrumb组件', path: '/antBreadCrumb'},
          {key: 'Tabs组件', label: 'Tabs组件', title: 'Tabs组件', path: '/antTabs'},
          {key: 'Form组件', label: 'form组件', title: 'Form组合Title', path: '/antForm'},
          {key: 'Modal组件', label: 'Modal组件', title: 'Modal组合Title', path: '/antModal'},
          {key: 'PopConfirm组件', label: 'PopConfirm组件', title: 'PopConfirm组合Title', path: '/antPopConfirm'},
          {key: 'Button组件', label: 'Button组件', title: 'Button组件Title', path: '/antButton'},
          {key: 'Descriptions组件', label: 'Descriptions组件', title: 'Descriptions组件Title', path: '/antDescriptions'},
        ]
      },
      {key: 'vue-request', title: '悬浮vue-request', label: 'vue-request', children: [
          {key: 'vue-request-useRequest', title: 'useRequest', label: 'useRequest', path: '/useRequestDemo'},
          {key: 'vue-request-usePagination', title: 'usePagination', label: 'usePagination', path: '/usePaginationDemo'},
        ]},
      {key: 'vite', title: '悬浮vite', label: 'vite', children: [
          {key: 'vite环境变量', title: '环境变量', label: '环境变量', path: '/viteEnv'},
        ]},
    ];
function clickMenu ({item}) {
  router.push(item.path)
}
</script>

<template>

  <a-layout>
    <a-layout-header :style="headerStyle">撑大layout布局，默认是根据页面宽度来的，还可以使用和style进行设置。这是头部区域.这是头部区域.这是头部区域.这是头部区域.这是头部区域.这是头部区域.这是头部区域.这是头部区域.</a-layout-header>
    <a-layout>
      <a-layout-sider :style="siderStyle">
        <a-menu :items="menuItems" mode="inline" @click="clickMenu"/>
      </a-layout-sider>
      <a-layout-content >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>

  <!--这里的msg是所谓的props-->
  <!--<router-link to="/helloWorld">
    hello-world |
  </router-link>-->
  <!--<HelloWorld msg="Hello World!"/>-->
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
