import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Home from '@/pages/home/home'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/',
      redirect: '/login'
    }

  ]
})


router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.

  if (to.path == '/login') {
    return next()
  } else {
    let tokens = window.sessionStorage.getItem('token')
    if (!tokens) {
      return next('/login')
    } else {
      next()
    }
  }

})
export default router