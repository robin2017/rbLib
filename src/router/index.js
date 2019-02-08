import Vue from 'vue'
import Router from 'vue-router'

import echarts from '../components/testEcharts'
import tree from '../components/testTree'
import tabs from '../components/tabs/testTabs'
import position from '../components/testPosition'
import dynForm from '../components/testDynForm'

import Index from '../components/Index'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/echarts',
            component: echarts
        },
        {
            path: '/tree',
            component: tree
        },

        {
            path: '/tabs',
            component: tabs
        },

        {
            path: '/position',
            component: position
        },
        {
            path: '/dynForm',
            component: dynForm
        },
    ]
})
