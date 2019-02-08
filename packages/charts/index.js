import Vue from 'vue'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;

import RbCharts from './src/charts'

RbCharts.install = function (Vue) {
    Vue.component(RbCharts.name, RbCharts);
};

export default RbCharts;