<template>
    <section class="ElDatePickerAdapter">
        <el-date-picker v-bind="$attrs"
                        v-bind:type="$attrs.subtype"
                        v-on="$listeners"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
    </section>
</template>
<script>
    export default {
        name: "ElDatePickerAdapter",
    }
</script>