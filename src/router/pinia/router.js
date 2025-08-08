export default [
    {
        path: '/usePinia',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/pinia/UsePinia.vue')
    },
];