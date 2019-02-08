
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

#### 1、npm安装 ####
使用 npm 的方式安装，可以和 webpack 打包工具配合使用。
``` bash
npm install rb-lib --save-dev
```
#### 2、组件库引入 ####
在 main.js 中写入以下内容
``` bash
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import RbLib from 'rb-lib'
Vue.use(RbLib)
```
#### 3、依赖导入 ####
本组件库的图表/树组件依赖于echarts/ztree
``` bash
npm install --D echarts ztree
```
同时需要在webpack.dev.config.js中添加如下代码
``` bash
plugins: [
    new webpack.ProvidePlugin({
    jQuery: "jquery",
    $: "jquery"
})
```

## 组件

#### 1、图表(基于echarts) ####
> 通过vue组件的方式封装echarts，具体配置参见echarts官网

##### 示例 #####
```
<template>
    <rb-charts chartsId="chartsId"
               :options="options"></rb-charts>
</template>
<script>
    export default {
        data() {
            return {
                options: {
                    title: {text: 'RbCharts组件示例'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        }
    }
</script>
```
![](images/rbcharts.png)</br>
##### Attributes #####
|参数  |说明  |类型 |可选值|默认值|
|:---:|:---:|:---:|:---:|:---:|
|chartsId|图表唯一标识 |string|-|必填|
|options|echarts的配置项|object|-|必填|
|width|图表宽度|number|-|400|
|height|图表高度|number|-|300|
#### 2、树(基于jq的ztree)
> 通过vue组件的方式封装ztree，具体配置参见ztree官网

##### 示例 #####
```
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

```
![](images/rbtree.png)</br>
##### Attributes #####
|参数  |说明  |类型 |可选值|默认值|
|:---:|:---:|:---:|:---:|:---:|
|ztreeID|ztree唯一标识 |string|-|必填|
|ztreeSetting|ztree配置 |object|-|-|
|ztreeData|ztree数据 |array|-|必填|
|isCollapse|是否展开 |boolean|true/false|false|
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
#### 4、经纬度显示 ####
> + 提供经纬度的显示和输入
> + 自动校验输入范围
> + 支持字符串和数值输入
##### 示例 #####
```
      <rb-position @input="handleValue"
                   :value="value"></rb-position>
```
![](images/rbposition.png)</br>
##### Attributes #####
|参数  |说明  |类型 |可选值|默认值|
|:---:|:---:|:---:|:---:|:---:|
|value|经纬度的值，长度为2的数组 |Array|-|-|
|formatInput|输入格式 |string|string/number|number|
|formatOutput|输出格式 |string|string/number|number|
|disabled|是否可编辑 |boolean|true/false|false|
|part|经纬度部分显示 |string|jd/wd/jwd|jwd|
|hideHeader|隐藏标题头 |boolean|true/false|false|
|unitChn|单位使用中文 |boolean|true/false|false|

#### 5、动态表单 ####
> + 支持静态表单的功能
> + 通过配置控制表单项，而不是代码
> + 基本表单的定义和动态表单组件解耦，可自行定义表单项
##### 示例 #####

