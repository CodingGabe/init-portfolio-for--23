import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: ()=>import('../views/About.vue')},
    {path: '/projects', name: 'Projects', component: ()=>import('../views/Projects.vue')},
    {path: '/shop', name: 'Shop', component: ()=>import('../views/Shop.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})

export default router