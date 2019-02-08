import Charts from './charts/index'
import Tree from './tree/index'
import Tabs from './tabs/index'
import Position from './position/index'
import DynForm from './dyn-form/index'

import ElInputAdapter from './dyn-form/src/adapter/ElInputAdapter'
import ElSelectAdapter from './dyn-form/src/adapter/ElSelectAdapter'

const components = [
    Charts,
    Tree,
    Tabs,
    Position,
    DynForm,

    ElInputAdapter,
    ElSelectAdapter
];
const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component)
    })

};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.vue)
}
export default {
    version: '1.0.0',
    install,

    Charts,
    Tree,
    Tabs,
    Position,
    DynForm
}