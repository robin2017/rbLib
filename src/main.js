// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import rbLib from '../packages/index'
Vue.use(rbLib);

Vue.config.productionTip = false
// import labelChild from '../examples/layout/labelChild'
// import chartsChild from '../examples/layout/chartsChild'
// Vue.component('labelChild',labelChild)
// Vue.component('chartsChild',chartsChild)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


