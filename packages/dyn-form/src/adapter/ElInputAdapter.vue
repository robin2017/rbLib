<template>
    <section class="ElInputAdapter">
        <el-input v-bind="$attrs"
                   v-on="$listeners">
        </el-input>
    </section>
</template>

<script>
    export default {
        name: "ElInputAdapter",
    }
</script>
