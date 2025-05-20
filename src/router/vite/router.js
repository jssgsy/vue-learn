import RouterParam from "@/components/RouterParam.vue";
import HelloWorld from "@/components/HelloWorld.vue";

// 统一为export default []方式
export default [
    {
        path: '/viteEnv',
        component: () => import('@/components/vite/ViteEnv.vue')
    },
]