import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testHello from '../../examples/testLayout2'
import echarts from '../components/testEcharts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/hello',
          component: testHello
      },
      {
          path: '/echarts',
          component: echarts
      },
  ]
})
