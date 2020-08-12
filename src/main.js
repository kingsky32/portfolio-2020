import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { MainPage, WorksPage, AboutPage, CarrersPage, ContactPage, ProjectPage } from './pages'
// import Scrollbar from 'smooth-scrollbar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Loader from './components/Loader'
import axios from 'axios'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import '@/assets/fonts.css';
import '@/assets/reset.css';

Vue.use(VueRouter)

Vue.prototype.$http = axios;

// Scrollbar.init(document.body)

const routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: '/works',
    component: WorksPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/carrers',
    component: CarrersPage
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: '/works/project',
    component: ProjectPage
  }
]

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Loader', Loader)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')

