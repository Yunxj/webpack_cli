import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '../views/homebar'
import memberContainer from '../views/member'
import shopcarContainer from '../views/shopcar'
import searchContainer from '../views/search'
import newsList from '../views/news'
import newsInfo from '../views/newsInfo'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: 'home'},
    {path: '/home', component: homeContainer},
    {path: '/home/newsList', component: newsList},
    {path: '/home/newsInfo/:id', component: newsInfo},
    {path: '/member', component: memberContainer},
    {path: '/shopcar', component: shopcarContainer},
    {path: '/search', component: searchContainer},
  ]
})
