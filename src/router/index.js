import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import dashBoard from '../components/dashBoard.vue'
import classInfo from '../components/classInfo.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'signIn',
    component:SignIn
    },
    {
    path: '/signup',
    name: 'signup',
    component:SignUp
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component:dashBoard
      },

      {
        path: '/classInfo',
        name: 'classInfo',
        component:classInfo
        },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
