import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        meta: {protected: true},
        children: [
            {
                path: "",
                name: "portfolio",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/PortfolioView.vue"
                        ),
            },
        ],
        component: () =>
            import(/* webpackChunkName: "about" */ "../layouts/MainLayout.vue"),
    },
    {
        path: "/login",
        meta: {protected: false},
        children: [
            {
                path: "",
                name: "login",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/LoginView.vue"
                        ),
            },
        ],
        component: () =>
            import(/* webpackChunkName: "about" */ "../layouts/MainLayout.vue"),
    },
    {
        path: "/registration",
        meta: {protected: false},
        children: [
            {
                path: "",
                name: "registration",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/RegistrationView.vue"
                        ),
            },
        ],
        component: () =>
            import(/* webpackChunkName: "about" */ "../layouts/MainLayout.vue"),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
 router.beforeEach((to, from , next)=>{
    console.log(to.meta)
    if (to?.meta.protected && !localStorage.getItem('token')) {
        return next('/login')
    }
     return next()
 })

