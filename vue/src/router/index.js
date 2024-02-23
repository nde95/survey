import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Register from "../views/Register.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        name: "Dashboard",
        component: DefaultLayout,
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: () => import("../views/Dashboard.vue"),
            },
            {
                path: "/surveys",
                name: "Surveys",
                component: () => import("../views/Surveys.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
