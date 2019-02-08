<template>
    <div>
        <rb-tabs :list="list"></rb-tabs>
    </div>
</template>
<script>
    import Vue from 'vue';
    import comp1 from './comp1'
    import comp2 from './comp2'
    Vue.component(comp1.name, comp1)
    Vue.component(comp2.name, comp2)
    export default {
        data: function () {
            return {
                list: [
                    {
                        title: 'tab1',
                        type: 'comp1',
                        content: 'content1'
                    },
                    {
                        title: 'tab2',
                        type: 'comp2',
                        tableData: [
                            {
                                name: '王小虎1',
                                address: '上海市普陀区金沙江路 1518 弄'
                            }, {
                                name: '王小虎2',
                                address: '上海市普陀区金沙江路 1517 弄'
                            }
                        ]

                    }
                ]
            }
        }
    }
</script>