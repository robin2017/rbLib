<template>
    <section class="ElColorPickerAdapter">
        <el-color-picker v-bind="$attrs"
                         v-on="$listeners"
                         size="mini"></el-color-picker>
    </section>
</template>

<script>
    export default {
        name: "ElColorPickerAdapter"
    }
</script>

