<template>
    <div style="margin-top:10px">
        <div style="font-size:12px;font-weight:bold;color:#8c8c8c">{{scope.label}}</div>
        <div style="font-size:14px;font-weight:bold;color:#000000">{{scope.value}}</div>
    </div>
</template>
<script>
    export default {
        props:{
            scope:{}
        }
    }
</script>