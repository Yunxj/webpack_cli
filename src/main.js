import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import router from './router'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {

  },
  router,
  render: h => h(App)
})
