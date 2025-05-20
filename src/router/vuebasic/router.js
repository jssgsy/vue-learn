import RouterParam from "@/components/RouterParam.vue";
import HelloWorld from "@/components/HelloWorld.vue";

// 统一为export default []方式
export default [
    {
        path: '/about/:id/aa/:name/bb',
        // path: '/about/:id/aa/:name/bb?q1=:x&q2=:y#:frag',    // 这是错误的
        component: RouterParam
    },
    {
        path: '/helloworld',
        component: HelloWorld
    },
    {
        path: '/modulePathAlias',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/ModulePathAlias.vue')
    },
    {
        path: '/optionApiMethodAndVariableDefine',
        component: () => import('@/components/OptionApiMethodAndVariableDefine.vue')
    },
    {
        path: '/proxyServer',
        component: () => import('@/components/ProxyServer.vue')
    },
    {
        path: '/propsAndEmits',
        component: () => import('@/components/propsAndEmits/ParentVue.vue')
    },
]