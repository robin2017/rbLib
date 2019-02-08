import Vue from 'vue'
import Router from 'vue-router'

import testHello from '../../examples/testLayout2'
import echarts from '../components/testEcharts'
import tabs  from '../components/tabs/testTabs'
import dynForm from '../components/testDynForm'
import tree from '../components/testTree'
import Index from '../components/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
      {
          path: '/hello',
          component: testHello
      },
      {
          path: '/echarts',
          component: echarts
      },
      {
          path: '/dynForm',
          component: dynForm
      },
      {
          path:'/tabs',
          component:tabs
      },{
      path:'/tree',
          component:tree
      }
  ]
})
