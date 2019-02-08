<template>
    <section class="testDynForm">
        <rb-dyn-form :formConfig="formConfig"
                     :formValue="formValue"
                     @input="handleChange"></rb-dyn-form>
    </section>
</template>

<script>
    import ElPositionAdapter from './adapter/ElPositionAdapter';
    import Vue from 'vue'

    Vue.component(ElPositionAdapter.name, ElPositionAdapter);
    let formConfig = require('./form-config');
    let formValue = require('./form-value');
    export default {
        name: "testDynForm",
        props: {},
        data: function () {
            return {
                formConfig: formConfig,
                formValue: formValue,
            }
        },
        computed: {},
        watch: {
            formValue: {
                deep: true,
                handler: function (newValue) {

                }
            }
        },
        methods: {
            handleChange: function (obj) {
                Object.assign(this.formValue, obj)
                console.log('value change:', obj)
            }
        },
        mounted() {
        }
    }
</script>

<style lang="less">
    .testDynForm {
        .el-input {
            width: 220px;
        }
        .el-color-picker--mini .el-color-picker__trigger {
            width: 220px;
            height: 36px;
        }
    }
</style>