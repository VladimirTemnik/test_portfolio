import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
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
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

