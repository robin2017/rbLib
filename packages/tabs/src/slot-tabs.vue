<template>
    <div class="tab">
        <div class="rb-hd">
            <ul class="clearfix">
                <!--命名插槽定义：负责数据输入给props:[index,text] -->
                <slot name="title"
                      v-for="(item, index) in list"
                      :index="index"
                      :text="item.title">
                </slot>
            </ul>
        </div>
        <div class="rb-bd">
            <slot name="content"
                  :type="list[selected].type"
                  :content="list[selected].content"></slot>
        </div>
    </div>
</template>
<script>
    export default  {
        name:'RbSlotTabs',
        props: ['list', 'selected']
    }
</script>
<style>
    .clearfix:after {
        content: "\00A0";
        display: block;
        visibility: hidden;
        width: 0;
        height: 0;
        clear: both;
        font-size: 0;
        line-height: 0;
        overflow: hidden;
    }
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .rb-hd li {
        float: left;
        border: 1px solid #666;
        padding: 12px 0;
        width: 120px;
        text-align: center;
        border-right: none;
    }
    .rb-hd li:last-child {
        border-right: 1px solid #666;
    }
    .rb-hd .active {
        background: #e85b4b;
        color: #fff;
        font-weight: bold;
    }
    .rb-bd .active {
        display: block
    }
    .rb-bd {
        border: 1px solid gray;
        width: 600px;
        height: 300px;
        margin-left: 40px;
        margin-top: -17px;
    }
</style>