import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';


import App from './App.vue'




import router from './router'






Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
