import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/fonts.scss'
import './assets/styles/style.scss'
import './assets/styles/header.scss'
import './assets/styles/main.scss'
import './assets/styles/catalog.scss'
import './assets/styles/itemCard.scss'
import './assets/styles/footer.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
