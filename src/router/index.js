import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_zhazhamucaishangwuxinyongfen from '../views/lanhu_zhazhamucaishangwuxinyongfen/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_zhazhamucaishangwuxinyongfen"
  },
  {
    path: '/lanhu_zhazhamucaishangwuxinyongfen',
    name: 'lanhu_zhazhamucaishangwuxinyongfen',
    component: lanhu_zhazhamucaishangwuxinyongfen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
