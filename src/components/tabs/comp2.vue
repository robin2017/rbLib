<template>
    <el-table
            :data="currentTableData"
            style="width: 100%">
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        name: 'comp2',
        props: ['tableData'],
        data() {
            return {
                currentTableData: this.tableData
            }
        }
    }
</script>