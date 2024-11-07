import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/frame',
            component: () => import('./pages/Frame.vue')
        }
    ]
})
