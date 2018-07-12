import RbHello from './src/hello'
/* istanbul ignore next */
RbHello.install = function(Vue) {
    Vue.component(RbHello.name, RbHello);
};

export default RbHello;