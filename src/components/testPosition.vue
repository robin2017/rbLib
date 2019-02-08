<template>
    <section class="testPosition">
        <div style="border:1px solid #999">
            <h4>初始值：</h4>
            <div><label>经度：</label>
                <el-input v-model="jdValue" style="width:100px;"></el-input>
            </div>

            <div>
                <label>纬度：</label>
                <el-input v-model="wdValue" style="width:100px;"></el-input>
            </div>
            <div>
                <label>输入格式：</label>
                <el-select v-model="inputSel">
                    <el-option value="string">string</el-option>
                    <el-option value="number">number</el-option>
                </el-select>
            </div>
            <div>
                <label>输出格式：</label>
                <el-select v-model="outputSel">
                    <el-option value="string">string</el-option>
                    <el-option value="number">number</el-option>
                </el-select>
            </div>

        </div>

        <rb-position @input="handleValue" :format-output="outputSel" :format-input="inputSel"
                     :value="value"></rb-position>
    </section>
</template>

<script>
    export default {
        name: "testPosition",
        props: {},
        data: function () {
            return {
                jdValue: '0',
                wdValue: '0',
                inputSel: 'number',
                outputSel: 'number',
                value: [0, 0]
            }
        },
        computed: {},
        watch: {
            jdValue: function () {
                if (this.inputSel === 'number') {
                    this.value = [parseFloat(this.jdValue), parseFloat(this.wdValue)]
                    console.log('1111', this.value)
                } else if (this.inputSel = 'string') {
                    this.value = [this.jdValue, this.wdValue]
                    console.log('1111', this.value)
                }
            },
            wdValue: function () {
                if (this.inputSel === 'number') {
                    this.value = [parseFloat(this.jdValue), parseFloat(this.wdValue)]
                } else if (this.inputSel = 'string') {
                    this.value = [this.jdValue, this.wdValue]
                }
            },
        },
        methods: {
            handleValue: function (value) {
                this.$message({
                    type: 'success',
                    message: '输入的经纬度为：' + value.toString()
                })
            }
        },
        mounted() {
        }
    }
</script>

<style>
    .testPosition {
    }
</style>