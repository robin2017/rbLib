import RbLayout from './src/layout'
/* istanbul ignore next */
RbLayout.install = function(Vue) {
    Vue.component(RbLayout.name, RbLayout);
};

export default RbLayout;