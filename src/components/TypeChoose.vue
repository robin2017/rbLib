<template>
  <div id="typeChoose">
    <!--父组件调用子组件的方法:ref-->
    <base-tree ref="treeChild"
               ztreeID="ztreeID"
               :ztreeSetting="ztreeSetting"
               :ztreeData="ztreeData"
               :isCollapse=true></base-tree>
  </div>
</template>
<script type="text/ecmascript-6">
  import baseTree from '../../../../../../WorkInfo/robin带南京20180428/AlarmFrontEnd/src/components/Common/baseTree.vue'
  import {entryManager} from '@/api/entryManager'
  export default {
    props: {
      eventFiltList: {type: Array},
      eventNm: {}
    },
    data () {
      return {
        currentEventFiltList: this.eventFiltList,
        outNodeNumber: 0,
        entryManager: null,
        ztreeSetting: {
          data: {
            simpleData: {
              enable: false
            },
            key: {
              name: "Name",
              children: "_children"
            }
          },
          view: {
            showIcon: false
          },
          callback: {
            onCheck: this.getEventFiltList,
          }
        },
        ztreeID: 'typeChooseZtreeID',
        ztreeData: []
      };
    },
    components: {
      baseTree
    },
    methods: {



    },
    created: function () {

    },

  }
</script>
