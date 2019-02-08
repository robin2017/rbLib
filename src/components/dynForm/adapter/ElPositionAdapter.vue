<template>
    <section class="ElPositionAdapter">
        <rb-position v-bind="$attrs"
                     v-on="$listeners"></rb-position>
    </section>
</template>
<script>
    export default {
        name: "ElPositionAdapter",
    }
</script>

