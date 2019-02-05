<template>
    <section class="testDynForm">
        <rb-dyn-form :formConfig="formConfig"></rb-dyn-form>
    </section>
</template>

<script>
    let formConfig = require('./form-config');
    export default {
        name: "testDynForm",
        props: {},
        data: function () {
            return {
                formConfig: formConfig,
            }
        },
        computed: {},
        watch: {},
        methods: {},
        mounted() {
        }
    }
</script>

<style>
    .testDynForm {
    }
</style>