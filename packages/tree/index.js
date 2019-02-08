import 'ztree/js/jquery.ztree.core'
import 'ztree/js/jquery.ztree.excheck'
import 'ztree/css/zTreeStyle/zTreeStyle.css'

import RbTree from './src/tree'

RbTree.install = function (Vue) {
    Vue.component(RbTree.name, RbTree);
};

export default RbTree;