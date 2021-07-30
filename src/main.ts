import Vue from 'vue'
import App from './App.vue'

// Element UI 按需加载
import '@/../config/element'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
