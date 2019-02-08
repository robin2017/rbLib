import RbTabs from './src/tabs'
/* istanbul ignore next */
RbTabs.install = function (Vue) {
    Vue.component(RbTabs.name, RbTabs);
};

export default RbTabs;