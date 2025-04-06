import { createRouter, createWebHistory } from 'vue-router'
import Masmorra from '../views/Masmorra.vue'
import RitualSangue from '../views/RitualSangue.vue'
import MeuCaixao from '../views/MeuCaixao.vue'
import AposentoDetalhes from '../views/AposentoDetalhes.vue'

const routes = [
  { 
    path: '/', 
    name: 'masmorra', 
    component: Masmorra,
    meta: {
      title: 'Masmorra do Castelo'
    }
  },
  {
    path: '/sangue', 
    name: 'ritual-sangue',
    component: RitualSangue,
    meta: {
      title: 'Ritual de Sangue',
      requiresAuth: false
    }
  },
  { 
    path: '/caixao', 
    name: 'meu-caixao', 
    component: MeuCaixao,
    meta: {
      title: 'Meu Caixão',
      requiresAuth: true
    }
  },
  { 
    path: '/aposento/:id', 
    name: 'aposento-detalhes', 
    component: AposentoDetalhes, 
    props: true,
    meta: {
      title: 'Aposento Secreto',
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Castelo dos Noturnos'
  const isSanguinario = localStorage.getItem('sanguinario') === 'true'
  
  if (to.meta.requiresAuth && !isSanguinario) {
    next({ name: 'ritual-sangue' })
  } else {
    next()
  }
})

export default router