<template>
    <section class="DynamicFormItem">
        <el-col :span="itemConfig.span||12">
            <!--v-bind:prop是特例，因为配置文件中没有配-->
            <el-form-item v-bind="itemConfig" :prop="itemConfig.name" :label="itemConfig.label||itemConfig.name">
                <component :is="`el-${itemConfig.type}-adapter`"
                           v-bind="itemConfig"
                           :value="itemValue"
                           v-on="$listeners"></component>
            </el-form-item>
        </el-col>
    </section>
</template>
<script>
    const isInteger = function (val) {
        if (typeof val !== 'string')
            return new Error('请输入字符串');
        return parseInt(val) + '' === val
    };
    const integerRange = function (min, max) {
        return function (rule, value, callback) {
            if (!value || !isInteger(value)) {
                return callback(new Error('请输入整数'));
            }
            value = parseInt(value);
            if (value <= min || value > max) {
                return callback(new Error(`输入范围为(${min},${max}]`));
            }
            callback();
        }
    };
    export default {
        name: "DynamicFormItem",
        props: {
            itemConfig: {type: Object},
            itemValue: {}
        },
        methods: {
            handleItemConfig: function () {
                if (this.itemConfig.name === undefined) {
                    console.error('[DynamicFormItem Error]:动态表单项缺失name属性')
                }
                let rules = this.itemConfig.rules;
                if (rules) {
                    rules.forEach(rule => {
                        if (rule.validator) {
                            //函数名字符串转化为函数
                            rule.validator = eval(rule.validator);
                        }
                    })
                }
            }
        },
        mounted: function () {
            this.handleItemConfig();
        }
    }
</script>