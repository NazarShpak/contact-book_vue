import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import VueRouter from 'vue-router'
import router from './router/router.js'
import VuexUndoRedo from 'vuex-undo-redo'

Vue.use(VueRouter)
Vue.use(VuexUndoRedo)
Vue.config.productionTip = false

import '@/assets/styles/main.scss'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
