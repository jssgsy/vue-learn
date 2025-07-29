import RouterParam from "@/components/vue/RouterParam.vue";
import HelloWorld from "@/components/vue/HelloWorld.vue";

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
        component: () => import('@/components/vue/ModulePathAlias.vue')
    },
    {
        path: '/optionApiMethodAndVariableDefine',
        component: () => import('@/components/vue/OptionApiMethodAndVariableDefine.vue')
    },
    {
        path: '/proxyServer',
        component: () => import('@/components/vue/ProxyServer.vue')
    },
    {
        path: '/propsAndEmits',
        component: () => import('@/components/vue/propsAndEmits/ParentVue.vue')
    },
    {
        path: '/provideAndInject',
        component: () => import('@/components/vue/provideAndInject/ParentA.vue'),
        children: [{
            path: 'childA_1',
            component: () => import('@/components/vue/provideAndInject/ChildA_1.vue'),
            children: [{
                path: 'childA_1_1',
                component: () => import('@/components/vue/provideAndInject/ChildA_1_1.vue'),
            }]
        }]
    },
    {
        path: '/namedRouterView',
        // 父组件别忘了配置component，否则父组件没法渲染
        component: () => import("@/components/vue/namedRouterView/NamedRouterView.vue"),
        children: [
            {
                path: 'x',
                // 命名视图必须使用复数形式的components，而不是单数形式的component
                components: {
                    default: () => import("@/components/vue/namedRouterView/Y.vue"),
                    x: () => import("@/components/vue/namedRouterView/X.vue"),
                    // 不想渲染时直接省略即可，不要赋值null，null会被认为是非法组件名
                    // y: null,

                }
            },
            {
                path: 'y',
                // 命名视图必须使用复数形式的components，而不是单数形式的component
                components: {
                    default: () => import("@/components/vue/namedRouterView/X.vue"),
                    y: () => import("@/components/vue/namedRouterView/Y.vue")
                }
            },
        ]
    },

]