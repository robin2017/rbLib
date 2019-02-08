import RbCharts from './src/charts'
import Vue from 'vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
/* istanbul ignore next */
RbCharts.install = function(Vue) {
    Vue.component(RbCharts.name, RbCharts);
};

export default RbCharts;