<template>
    <section class="testTree">
        <rb-tree ztreeID="ztreeID"
                 :ztreeData="ztreeData"
                 :isCollapse=true></rb-tree>
    </section>
</template>

<script>
    export default {
        name: "testTree",
        props: {},
        data: function () {
            return {
                ztreeData: [
                    {
                        name: 'a', children: [
                            {name: 'b'},
                            {name: 'c'}
                        ]
                    }
                ],
                ztreeSetting: {
                    data: {
                        simpleData: {
                            enable: false,
                        }
                    },
                    view: {
                        showIcon: false
                    },
                    callback: {}
                },
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
    .testTree {
    }
</style>