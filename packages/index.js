import Hello from './hello/index'
import HelloElement from './hello-element/index'
import Layout from './layout/index'
import Charts from './charts/index'
const components = [
    Hello,
    HelloElement,
    Layout,
    Charts
];
const install = function (Vue) {
    components.map(component=>{
        Vue.component(component.name,component)
    })
};
if(typeof window !=='undefined'&&window.Vue){
    install(window.vue)
}
export default {
    version:'1.0.0',
    install,
    Hello,
    HelloElement,
    Layout,
    Charts
}