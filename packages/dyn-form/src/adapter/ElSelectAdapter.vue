<template>
    <section class="ElSelectAdapter">
        <el-select v-bind="$attrs"
                   v-on="$listeners">
            <el-option v-for="option in $attrs.options"
                       :key="option"
                       :label="option"
                       :value="option"
            ></el-option>
        </el-select>
    </section>
</template>

<script>
    export default {
        name: "ElSelectAdapter",
    }
</script>

<style>
    .ElSelectAdapter {
    }
</style>