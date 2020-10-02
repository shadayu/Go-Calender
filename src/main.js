import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import anime from '../node_modules/animejs/lib/anime.es.js'

Vue.config.productionTip = false

import VueQuillEditor from 'vue-quill-editor'
 
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
Vue.use(VueQuillEditor)

//自定义指令 要写在new Vue之前
Vue.directive('title', function (el, binding) {
  document.title = el.dataset.title
})

Vue.prototype.$anime = anime
new Vue({
  VueQuillEditor,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

