import RbTree from './src/tree'
import  'ztree'
RbTree.install = function(Vue) {
    Vue.component(RbTree.name, RbTree);
};

export default RbTree;