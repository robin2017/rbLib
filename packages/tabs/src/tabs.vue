<template>
    <div class="tab">
        <rb-slot-tabs :list="list"
                     :selected="selected">
            <!--命名插槽1：标签页-->
            <!--命名插槽调用：负责数据处理props:[index,text]-->
            <template slot="title"
                      slot-scope="props">
                <li :class="{active:selected==props.index}"
                    @click="change(props.index)">{{ props.text }}
                </li>
            </template>
            <!--命名插槽2：内容组件-->
            <template slot="content"
                      slot-scope="props">
                <keep-alive v-if="alive">
                    <component :is="props.type" :content="props.content"></component>
                </keep-alive>
                <component :is="props.type" :content="props.content" v-else></component>
            </template>
        </rb-slot-tabs>
    </div>
</template>
<script>
    import RbSlotTabs from './slot-tabs'

    export default {
        name:'RbTabs',
        props:{
            list:{},
            alive:{type:Boolean,default:false}
        },
        components: {
            RbSlotTabs
        },
        data: function () {
            return {

                selected: 0,
                // list: [
                //     {
                //         title: 'tab1',
                //         type:'comp1',
                //         content: 'content1'
                //     },
                //     {
                //         title: 'tab2',
                //         type:'comp2',
                //         content: 'content2'
                //     },
                //     // {
                //     //     title: 'tab3',
                //     //     type:'comp1',
                //     //     content: `content3`
                //     // }
                // ]
            }
        },
        methods: {
            change(index) {
                this.selected = index;
            }
        }
    }
</script>