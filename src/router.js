import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile.vue'
import Post from './views/Post.vue'
import Dashboard from './views/Dashboard.vue'
import Appointment from './views/Appointment.vue'
import Message from './views/Message.vue'
import CreatePost from './views/Create-post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/appointments',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Message
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost
    }        
  ],
  redirect: [
    {
      '*': '/'
    }
  ]
})
