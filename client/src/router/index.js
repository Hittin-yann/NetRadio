import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Accueil',

        component: () =>
            import ('../views/Accueil.vue')
    },
    {
        path: '/Animateur',
        name: 'Animateur',
        component: () =>
            import ('../views/Animateur.vue')
    },
    {
        path: '/EcouterDirect',
        name: 'EcouterDirect',
        component: () =>
            import ('../views/EcouterDirect.vue')
    },
    {
        path: '/Programmes',
        name: 'Programmes',
        component: () =>
            import ('../views/Programmes.vue')
    },
    {
        path: '/EnDirect',
        name: 'EnDirect',
        component: () =>
            import ('../views/BordAnimateur.vue')
    },
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router