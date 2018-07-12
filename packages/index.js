import Hello from './hello/index'
const components = [
    Hello
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
    Hello
}