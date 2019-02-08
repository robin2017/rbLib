<template>
    <section class="testTree">
        <h4>RbTree组件示例</h4>
        <rb-tree ztreeID="ztreeID"
                 :ztreeData="ztreeData"></rb-tree>
    </section>
</template>
<script>
    export default {
        data: function () {
            return {
                ztreeData: [
                    {
                        name: 'a', children: [
                            {name: 'b'},
                            {name: 'c'}
                        ]
                    }
                ]
            }
        }
    }
</script>
