<template>
    <div id="armyDetail">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="tip">{{tip}}</span>
            </div>
            <div v-for="item in slotData">
                <div style="margin-top:15px;">
                    <span class="item-title">{{item.title}}</span>
                </div>
                <rb-layout :layout-data="item.content">
                    <template slot-scope="scope">
                      <component :is="scope.componentType" :scope="scope"></component>
                    </template>
                </rb-layout>
            </div>
        </el-card>
    </div>
</template>
<script>
    import {slotData} from './layout/layoutData'
    export default {
        data: function () {
            return {
                tip: '刘备军团',
                slotData:slotData
            }
        }
    }
</script>
<style lang="less">
    #armyDetail {
        .box-card{
            width:380px;background-color:#fdfdfd
        }
        .tip{
            font-size:16px;font-weight:bold;color:#009999
        }
        .item-title{
            font-size:14px;font-weight:bold;color:#009999;border-left: 4px solid #42b983;padding-left:4px
        }
        .el-card__body{
            padding-top:0;padding-bottom: 0;
        }
        .el-card__header{
            padding:11px 20px;
        }
    }
</style>
