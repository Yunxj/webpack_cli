import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import getters from './getters.js'
Vue.use(Vuex)
//vuex存在内存中的不能持久存储
export default new Vuex.Store({
    state: {
      car: JSON.parse(localStorage.getItem('car') || '[]') 
      //购物车的数据 ,设计存放商品对象数据格式{id:,count:,price:,selected:  选中状态}
    },
    mutations,
    getters
})
