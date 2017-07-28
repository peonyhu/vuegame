// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import Hello from './components/Hello';
import advisorDetail from './components/advisorDetail/advisorDetail';
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use($);
const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  base: __dirname,
  routes:[
    { path: '*',component: Hello },
    { path: '/',name:'Hello',component: Hello },
    { path: '/advisorDetail',name:'advisorDetail',component: advisorDetail }
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// router.go('/goods');

export default router; //将路由器导出


