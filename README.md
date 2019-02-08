
<!-- TOC -->

- [rb-lib](#rb-lib)
    - [指南](#指南)
    - [组件](#组件)
        - [1、图表(基于echarts)](#1图表基于echarts)
        - [2、树(基于jq的ztree)](#2树基于jq的ztree)
        - [3、标签页](#3标签页)

<!-- /TOC -->
# rb-lib

> 一个基于vue/elementUi的前端组件库

## 指南

``` bash
# npm安装
npm install rb-lib --save-dev

# 组件库引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import RbLib from 'rb-lib'
Vue.use(RbLib)

#依赖导入
本组件库的图表/树组件依赖与echarts/ztree
npm install --D echarts ztree
同时需要在webpack.dev.config.js中添加如下代码
plugins: [
    new webpack.ProvidePlugin({
    jQuery: "jquery",
    $: "jquery"
})
```

## 组件

#### 1、图表(基于echarts) ####
> 本组件基于echarts，使用前需要安装.
+ 安装
```
npm install echarts -S
```
+ main.js中全局引入
```
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
```
> 例子
```
<template>
    <rb-charts chartsId="chartsId" :height="200" :width="300" :options="options"></rb-charts>
</template>
<script>
    export default {
        data() {
            return {
                options: {
                    title: {text: 'RbCharts演示'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }
                    ]
                }
            }
        }
    }
</script>
```
![](images/charts.png)</br>
#### 2、树(基于jq的ztree)
#### 3、标签页
> 属性

|参数  |说明  |类型 |可选值|默认值|
|:---:|:---:|:---:|:---:|:---:|
|list|数据接口的数组 |array|-|-|
|alive|是否使用keep-alive |boolean|true/false|false|


>数据接口

|属性  |说明 |类型  |
|:---:|:---:|:---:|
|title|标签页的名称 |string|
|type|内容组件的组件名 |string|
|content|内容组件的props的代理 |string/object|
> 例子
```
<template>
    <div>
        <rb-tabs :list="list">
        </rb-tabs>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                list: [
                    {
                        title: 'tab1',
                        type: 'comp1',
                        content: 'content1'
                    },
                    {
                        title: 'tab2',
                        type: 'comp2',
                        content: {
                            tableData: [
                                {
                                    date: '2016-05-02',
                                    name: '王小虎',
                                    address: '上海市普陀区金沙江路 1518 弄'
                                }, {
                                    date: '2016-05-04',
                                    name: '王小虎',
                                    address: '上海市普陀区金沙江路 1517 弄'
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>
```
```
//comp1.vue
<template>
    <div>{{content}}</div>
</template>
<script>
    export default {
        props: ['content']
    }
</script>
```
```
//comp2.vue
<template>
    <el-table
            :data="content.tableData"
            style="width: 100%">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
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
        props: ['content']
    }
</script>
```
![](images/tabs.png)