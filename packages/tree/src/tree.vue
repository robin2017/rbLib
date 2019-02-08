<template>
    <ul :id="ztreeID"
        class="ztree w100"
        style="overflow: auto"></ul>
</template>

<script>
    export default {
        name: "RbTree",
        props: {
            ztreeID: {required: true},
            ztreeSetting: {required: false,default:()=>{}},
            ztreeData: {required: true},
            isCollapse: {default: false},
        },
        data: function () {
            return {
                defaultTreeSetting: {
                    edit: {
                        showRenameBtn: false,
                        showRemoveBtn: false,
                        drag: {},
                        enable: true,
                    },
                    check: {
                        enable: true
                    }
                    //这里的回调在methods中都没有实现！！！！
                },
                //zTree对象
                treeObj: null
            }
        },
        computed: {},
        watch: {
            //深度监听
            ztreeData: {
                handler: function (value) {
                    this.initTree();
                },
                deep: true
            }
        },
        methods: {
            initTree() {
                //附加设置在后面添加的
                let setting = $.extend(true, this.defaultTreeSetting, this.ztreeSetting);
                let params = $.extend(true, [], this.ztreeData);
                //初始化zTree
                this.treeObj = $.fn.zTree.init($(this.$el), setting, params);
                if (this.isCollapse && this.isCollapse == true) {
                    this.treeObj.expandAll(false);
                } else {
                    this.treeObj.expandAll(true);
                }
            }
        },
        mounted() {
            this.initTree()
        }
    }
</script>
