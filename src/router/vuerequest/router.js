import UseRequestDemo from "@/components/vuerequest/UseRequestDemo.vue";

// 统一为export default []方式
export default [
    {
        path: '/useRequestDemo',
        component: UseRequestDemo
    },
    {
        path: '/usePaginationDemo',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/vuerequest/UsePaginationDemo.vue'),
    },
]