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
    {
        path: '/namedRouterView',
        // 命名视图必须使用复数形式的components，而不是单数形式的component
        component: () => import("@/components/namedRouterView/NamedRouterView.vue"),
        children: [
            {
                path: 'x',
                // 命名视图必须使用复数形式的components，而不是单数形式的component
                components: {
                    default: () => import("@/components/namedRouterView/Y.vue"),
                    x: () => import("@/components/namedRouterView/X.vue"),
                    // 不想渲染时直接省略即可，不要赋值null，null会被认为是非法组件名
                    // y: null,

                }
            },
            {
                path: 'y',
                // 命名视图必须使用复数形式的components，而不是单数形式的component
                components: {
                    default: () => import("@/components/namedRouterView/X.vue"),
                    y: () => import("@/components/namedRouterView/Y.vue")
                }
            },
        ]
    },

]