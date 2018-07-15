<template>
    <rb-charts chartsId="chartsId" :height="200" :width="300" :options="options"></rb-charts>
</template>
<script>
    export default {
        data() {
            return {
                options: {
                    title: {text: 'RbCharts演示'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }
                    ]
                }
            }
        }
    }
</script>