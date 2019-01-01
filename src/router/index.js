import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '../views/homebar'
import memberContainer from '../views/member'
import shopcarContainer from '../views/shopcar'
import searchContainer from '../views/search'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: 'home'},
    {path: '/home', component: homeContainer},
    {path: '/member', component: memberContainer},
    {path: '/shopcar', component: shopcarContainer},
    {path: '/search', component: searchContainer},
  ]
})
