import RbHelloElement from './src/hello-element'
/* istanbul ignore next */
RbHelloElement.install = function(Vue) {
    Vue.component(RbHelloElement.name, RbHelloElement);
};

export default RbHelloElement;