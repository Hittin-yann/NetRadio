import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',

        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/Animateur',
        name: 'Animateur',
        component: () =>
            import ('../views/Animateur.vue')
    },
    {
        path: '/Auditeur',
        name: 'Auditeur',
        component: () =>
            import ('../views/Auditeur.vue')
    },
    {
        path: '/Programmes',
        name: 'Programmes',
        component: () =>
            import ('../views/Programmes.vue')
    },
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router