import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import About from "./components/About.vue"

// [使用ant-design-vue]0. 全局注册 Ant Design Vue 组件库
import Antd from 'ant-design-vue';

// [使用ant-design-vue]1. 引入ant-design-vue的默认样式，
// 注，高版本中名字是reset.css
import 'ant-design-vue/dist/reset.css';

import {createRouter, createWebHistory, type Router} from "vue-router";

// 创建路由器实例
let router:Router = createRouter({
    history: createWebHistory(),    // 此配置项也必不可少
    routes: [   // 在这里配置路由
        {
            path: '/about/:id/aa/:name/bb',
            // path: '/about/:id/aa/:name/bb?q1=:x&q2=:y#:frag',    // 这是错误的
            component: About
        }
    ]
})
let app = createApp(App);
// 需在mount方法前
app.use(router)

// [使用ant-design-vue]2. 需要交由use方法，此时就可以在vue中使用任意ant-design-vue中的组件了
app.use(Antd)
app.mount('#app')
