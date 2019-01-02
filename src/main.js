import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import comment from './components/common/comment.vue'
import VueResource from 'vue-resource'
 Vue.use(MintUI)

Vue.use(VueResource)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern ="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
Vue.component('comment',comment)

//配置根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'
//配置表单提交的默认格式
Vue.http.options.emulateJSON = true
Vue.component(Header.name, Header)
//定义全局过滤器 = 默认值
new Vue({
  el: '#app',
  data: {

  },
  router,
  render: h => h(App),

})
