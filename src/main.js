import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import VueCompositionApi from '@vue/composition-api';

import 'mapbox-gl/dist/mapbox-gl.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
