<template>
    <rb-layout :layout-data="formData">
        <template slot-scope="scope">
           {{scope.content.label}}:{{scope.content.value}}
        </template>
    </rb-layout>
</template>

<script>
    export default {
        name: "testLayout",
        data:function () {
            return {
                formData:[
                    {content:{label:'a',value:'A'},part:3},
                    {content:{label:'b',value:'B'},part:3},
                    {content:{label:'c',value:'C'},part:3},
                    {content:{label:'d',value:'D'},part:3},
                ]
            }
        }
    }
</script>

