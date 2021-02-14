import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: () => import(/* webpackChunkName: "public" */ '../views/Top'),
  },
  {
    path: '/openchat',
    name: 'OpenChat',
    component: () =>
      import(/* webpackChunkName: "public" */ '../views/OpenChat'),
  },
  {
    path: '/multiroomopenchat',
    name: 'MultiRoomOpenChat',
    component: () =>
      import(/* webpackChunkName: "public" */ '../views/MultiRoomOpenChat'),
  },
  {
    path: '/closechat',
    name: 'CloseChat',
    component: () =>
      import(/* webpackChunkName: "public" */ '../views/CloseChat'),
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "public" */ '../views/SignIn'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
