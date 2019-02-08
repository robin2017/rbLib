<template>
    <div>
        <rb-tabs :list="list">
        </rb-tabs>
    </div>
</template>
<script>
    import comp2 from './comp2'
    import Vue from 'vue';
    Vue.component(comp2.name,comp2)
    export default {
        data: function () {
            return {
                list: [
                    {
                        title: 'tab1',
                        content: 'content1'
                    },
                    {
                        title: 'tab2',
                        type: 'comp2',
                        content: {
                            tableData: [
                                {
                                    date: '2016-05-02',
                                    name: '王小虎',
                                    address: '上海市普陀区金沙江路 1518 弄'
                                }, {
                                    date: '2016-05-04',
                                    name: '王小虎',
                                    address: '上海市普陀区金沙江路 1517 弄'
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>