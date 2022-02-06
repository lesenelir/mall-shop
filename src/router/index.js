import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Register from '../views/register/Register'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/login',
  name: 'Login',
  component: Login,
  beforeEnter (to, from, next) { // beforeEnter进入这个路由之前会执行
    // region
    // const isLogin = localStorage.isLogin
    // if (isLogin) {
    //   next({ name: 'Home' })
    // } else {
    //   next()
    // }
    // endregion
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/register',
  name: 'Register',
  component: Register,
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 每次做路由跳转之前都会执行
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register')
  ;(isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
