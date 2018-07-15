<template>
    <rb-layout :layout-data="formData" :gutter="10">
        <template slot-scope="props">
            <div class="wrap">{{props.label}}</div>
        </template>
    </rb-layout>
</template>
<script>
    export default {
        name: "testLayout",
        data: function () {
            return {
                formData: [
                    {label: 'a', part: 3},
                    {label: 'b', part: 3},
                    {label: 'c', part: 3},
                    {label: 'd', part: 2},
                    {label: 'e', part: 2},
                ]
            }
        }
    }
</script>
<style>
    .wrap {
        color: white;
        background-color: gray;
        width: 100%;
        margin: 2px;
    }
</style>

