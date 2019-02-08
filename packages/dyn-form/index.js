import RbDynForm from './src/DynamicForm'

RbDynForm.install = function (Vue) {
    Vue.component(RbDynForm.name, RbDynForm);
};

export default RbDynForm;