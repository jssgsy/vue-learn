import RouterParam from "@/components/vue/RouterParam.vue";
import HelloWorld from "@/components/vue/HelloWorld.vue";

// 统一为export default []方式
export default [
    {
        path: '/viteEnv',
        component: () => import('@/components/vite/ViteEnv.vue')
    },
]