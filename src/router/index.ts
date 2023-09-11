import { createRouter, Router, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/home",
                component: () => import("@/views/home/index.vue"),
            }
        ],
    },
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/register",
        component: () => import("@/views/register/index.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
        // path: "/error",
        name: "NotFound",
        component: () => import("@/views/error/404.vue"),
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
