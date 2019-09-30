import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TicketBooking from './components/TicketBooking.vue'
import Register from './components/Register.vue'
import SeatConfig from './components/SeatConfig.vue'
import ViewTicketBooking from './components/ViewTicketBooking.vue'
import Receipt from './components/Receipt.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: Receipt
    },
    {
      path: '/seatconfig',
      name: 'seatconfig',
      component: SeatConfig
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/ticketbooking',
      name: 'ticketbooking',
      component: TicketBooking
    },
    {
      path: '/viewticketbooking',
      name: 'viewticketbooking',
      component: ViewTicketBooking
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})