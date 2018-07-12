const parts =[1,2,3,4,6,8,12,24];
export default {
    name:'RbLayout',
    componentName:'RbLayout',
    props:{
        layoutData:{},//可能开始的时候为undefined，所以不能限定类型
        gutter:{type:Number,default:0}
    },
    //这里必须带function关键字，否则this作用域出错
    render:function (createElement) {
        let nodes = [];
        if(this.layoutData instanceof Array){
            let length = this.layoutData.length;
            for(let i = 0;i<length;i++){
                let part = this.layoutData[i].part;
                if(typeof part ==='undefined' ) {
                    //没有设置该属性，则默认插槽独占一行
                    part =1;
                }
                if(typeof part !=='number'){
                    console.error('[RbLib warn]:property part is not number type')
                }
                if(parts.indexOf(part)==-1){
                    console.error('[RbLib warn]:part is support:'+parts)
                }
                let rowChildren = [];
                for(let j = 0;j<part;j++){
                    rowChildren.push(createElement('el-col',{attrs:{span:24/part}},[createElement('div',
                        [this.$scopedSlots.default(this.layoutData[i++])])]))
                    //换行：超出数组长度，或者part变换了
                    if(i==length|| this.layoutData[i].part !=part) break;
                }
                i--;
                nodes.push(createElement('el-row',{attrs:{gutter:this.gutter}},rowChildren))
            }
        }
        return createElement('div',nodes)
    }
}