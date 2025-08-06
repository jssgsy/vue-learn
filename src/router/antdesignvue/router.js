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
    {
        path: '/antTabs',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntTabs.vue')
    },
    {
        path: '/antForm',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntForm.vue')
    },
    {
        path: '/antModal',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/feedback/AntModal.vue')
    },
    {
        path: '/antPopConfirm',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/feedback/AntPopConfirm.vue')
    },
    {
        path: '/antButton',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntButton.vue')
    },
    {
        path: '/antDescriptions',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/AntDescriptions.vue')
    },
    {
        path: '/antBasicCrud',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/practice/AntBasicCrud.vue')
    },
    {
        path: '/antWrapModal',
        // 动态导入，减少初始加载时间
        component: () => import('@/components/antdesignvue/practice/AntWrapModal.vue')
    },
]