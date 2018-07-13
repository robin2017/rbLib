<template>
    <div class="charts">
        <div id="chartsId" :style="style"></div>
    </div>
</template>
<script>
    export default {
        name: 'RbCharts',
        props: {
            chartsId: {required: true},
            options: {},
            height: {type: Number, required: true},
            width: {type: Number, required: true}
        },
        data() {
            return {
                chartObj: {}
            }
        },
        computed: {
            style: function () {
                return "width:" + this.width + "px;height:" + this.height + "px";
            }
        },
        watch: {
            options: {
                deep: true,
                handler: function () {
                    this.chartObj.setOption(this.options);
                }
            }
        },
        mounted: function () {
            this.chartObj = this.$echarts.init(document.getElementById(this.chartsId))
            this.chartObj.setOption(this.options)
        }
    }
</script>