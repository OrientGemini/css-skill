import Vue from 'vue'
// import VeRow from '@/views/components/flex-row/flex-row'
// import VeCol from '@/views/components/flex-col/flex-col'
import App from './app'
import router from './router'
import '@/assets/style/index.styl'
import 'babel-polyfill'

Vue.config.productionTip = false

// Vue.component('VeRow', VeRow)
// Vue.component('VeCol', VeCol)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
