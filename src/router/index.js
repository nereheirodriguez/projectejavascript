import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calculadora from '../views/Calculadora.vue'
import Comentaris from '../views/Comentaris.vue'
import Usuaris from '../views/Usuaris.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/calculadora', name: 'Calculadora', component: Calculadora },
    { path: '/comentaris', name: 'Comentaris', component: Comentaris },
    { path: '/usuaris', name: 'Usuaris', component: Usuaris },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
