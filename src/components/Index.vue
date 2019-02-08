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
                items:[
                    {name:'动态表单',path:'/dynForm'},
                    {name:'echarts',path:'/echarts'},
                    {name:'标签页',path:'/tabs'},
                    {name:'树',path:'/tree'}
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            goPath:function (path) {
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