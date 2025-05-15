import AntStaticTable from "@/components/antdesignvue/AntStaticTable.vue";

// 统一为export default []方式
export default [
    {
        path: '/antStaticTable',
        component: AntStaticTable
    },
    {
        path: '/antDynamicTable',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntDynamicTable.vue')
    },
    {
        path: '/antPagination',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntPagination.vue')
    },
    {
        path: '/antAutoComplete',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntAutoComplete.vue')
    },
    {
        path: '/antIcon',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntIcon.vue')
    },
    {
        path: '/antMenu',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntMenu.vue')
    },
    {
        path: '/antLayout',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/layout/AntLayout.vue')
    },
    {
        path: '/antBreadCrumb',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/BreadCrumb.vue')
    },
]