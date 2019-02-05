<template>
    <section class="DynamicForm">
        <el-form v-bind="formConfig" :model="formValue">
            <el-row :gutter="formConfig.gutter|| 0">
                <dynamic-form-item v-for="formItemConfig in formConfig.formItemList"
                                   :key="formItemConfig.name"
                                   :itemConfig="formItemConfig"
                                   :itemValue="formItemConfig.value||formValue[formItemConfig.name]"
                                   @input="handleInput($event,formItemConfig.name)">
                </dynamic-form-item>
            </el-row>
        </el-form>
    </section>
</template>
<script>
    import DynamicFormItem from './DynamicFormItem'

    export default {
        name: "RbDynForm",
        props: {
            formConfig: {type: Object},
            formValue: {type: Object}
        },
        components: {
            DynamicFormItem
        },
        methods: {
            handleInput: function (value, label) {
                let obj = {};
                obj[label] = value;
                this.$emit('input', obj)
            }
        }
    }
</script>

