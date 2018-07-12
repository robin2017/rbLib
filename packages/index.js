import Hello from './hello/index'
import HelloElement from './hello-element/index'
const components = [
    Hello,
    HelloElement
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
    HelloElement
}