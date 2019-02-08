<template>
    <section class="Index">
        rb库示例
        <ul>
            <li v-for="item in items" @click="goPath(item.path)">{{item.name}}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Index",
        props: {},
        data: function () {
            return {
                items: [
                    {name: 'echarts', path: '/echarts'},
                    {name: 'ztree', path: '/tree'},
                    {name: '标签页', path: '/tabs'},
                    {name: '经纬度', path: '/position'},
                    {name: '动态表单', path: '/dynForm'},
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            goPath: function (path) {
                this.$router.push(path)
            }
        },
        mounted() {
        }
    }
</script>

<style>
    .Index {
    }
</style>