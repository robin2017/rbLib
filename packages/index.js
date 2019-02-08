import Charts from './charts/index'
import Tree from './tree/index'
import Tabs from './tabs/index'
import Position from './position/index'
import DynForm from './dyn-form/index'

import ElInputAdapter from './dyn-form/src/adapter/ElInputAdapter'
import ElSelectAdapter from './dyn-form/src/adapter/ElSelectAdapter'
import ElColorPickerAdapter from './dyn-form/src/adapter/ElColorPickerAdapter'
import ElDatePickerAdapter from './dyn-form/src/adapter/ElDatePickerAdapter'

const components = [
    Charts,
    Tree,
    Tabs,
    Position,
    DynForm,

    ElInputAdapter,
    ElSelectAdapter,
    ElColorPickerAdapter,
    ElDatePickerAdapter
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
    DynForm,

    ElInputAdapter,
    ElSelectAdapter,
    ElColorPickerAdapter,
    ElDatePickerAdapter
}