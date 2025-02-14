import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import About from "./components/About.vue"

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
app.mount('#app')
