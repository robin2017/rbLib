import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testHello from '../../examples/testLayout2'
import echarts from '../components/testEcharts'
import test  from '../../examples/testTabs'
import dynForm from '../components/testDynForm'
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
  ]
})
