<template>
    <rb-charts chartsId="chartsId" :height="220" :width="360" :options="scope.data"></rb-charts>
</template>
<script>
    export default {
        props:{
            scope:{}
        }
    }
</script>