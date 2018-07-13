import RbCharts from './src/charts'
/* istanbul ignore next */
RbCharts.install = function(Vue) {
    Vue.component(RbCharts.name, RbCharts);
};

export default RbCharts;