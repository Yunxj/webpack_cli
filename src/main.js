import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import router from './router'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.component(Header.name, Header);

new Vue({
  el: '#app',
  data: {

  },
  router,
  render: h => h(App)
})
