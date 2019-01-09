import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from '../views/homebar'
import memberContainer from '../views/member'
import shopcarContainer from '../views/shopcar'
import searchContainer from '../views/search'
import newsList from '../views/news'
import newsInfo from '../views/newsInfo'
import picture from '../views/picture'
import goodsList from '../views/goodsList'
import goodsInfo from '../views/goodsInfo'
import goodsShopcar from '../views/goodsShopcar'
import goodsCommnet from '../views/goodsCommnet'
import pictureLsit from '../views/picture/picList.vue'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: 'home'},
    {path: '/home', component: homeContainer},
    {path: '/home/newsList', component: newsList},
    {path: '/home/newsInfo/:id', component: newsInfo},
    {path: '/home/picture', component: picture},
    {path: '/home/pictureLsit/:id', component: pictureLsit},
    {path: '/home/goodsList', component: goodsList},
    {path: '/home/goodsShopcar/:id', component: goodsShopcar, name:'goodsShopcar'},
    {path: '/home/goodsInfo/:id', component: goodsInfo, name:'goodsInfo'},
    {path: '/home/goodsCommnet/:id', component: goodsCommnet, name:'goodsCommnet'},
    {path: '/member', component: memberContainer},
    {path: '/shopcar', component: shopcarContainer},
    {path: '/search', component: searchContainer},
  ]
})
