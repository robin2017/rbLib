<template>
    <section class="testTree">
        <rb-tree ztreeID="ztreeID"
                   :ztreeSetting="ztreeSetting"
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
                ztreeData: [{name: 'a', id: 1}],
                ztreeSetting: {
                    data: {
                        simpleData: {
                            enable: false
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