import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// [使用ant-design-vue]0. 全局注册 Ant Design Vue 组件库
import Antd from 'ant-design-vue';
// 1.1 全局引入图标库，当然也可按需引入
// import * as icons from '@ant-design/icons-vue';

// [使用ant-design-vue]1. 引入ant-design-vue的默认样式，
// 注，高版本中名字是reset.css
import 'ant-design-vue/dist/reset.css';

import {createRouter, createWebHistory, type Router} from "vue-router";

// 路由自动注册
let modules = import.meta.glob('./router/**/*.js', {eager: true});
let routes = [];
// 这里之所以可以module.default，是因为路由配置js都是默认导出的数组
Object.values(modules).forEach(module => {routes.push(...module.default)})

// 创建路由器实例
let router:Router = createRouter({
    history: createWebHistory(),    // 此配置项也必不可少
    routes: routes
})
let app = createApp(App);
// 需在mount方法前
app.use(router)

// [使用ant-design-vue]2. 需要交由use方法，此时就可以在vue中使用任意ant-design-vue中的组件了
app.use(Antd)
// 1.2 全局注册所有图标
// for (const [key, component] of Object.entries(icons)) {
//     app.component(key, component);
// }
app.mount('#app')
