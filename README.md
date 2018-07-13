# rb-lib

> 一个基于element-ui的二次开发库，需要依赖element-ui库

## 安装使用

``` bash
# npm安装
npm install rb-lib --save-dev

# 完整引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import RbLib from 'rb-lib'
Vue.use(RbLib)
```

## 组件
#### 1、hello测试
> 例子
```
<template>
    <div id="app">
        <rb-hello-element></rb-hello-element>
    </div>
</template>
<script>
    export default {}
</script>
```
![](images/hello.jpg)
#### 2、插槽布局
> 例子1
```
<template>
    <rb-layout :layout-data="formData" :gutter="10">
        <template slot-scope="scope">
            <div class="wrap">{{scope.label}}</div>
        </template>
    </rb-layout>
</template>
<script>
    export default {
        name: "testLayout",
        data: function () {
            return {
                formData: [
                    {label: 'a', part: 3},
                    {label: 'b', part: 3},
                    {label: 'c', part: 3},
                    {label: 'd', part: 2},
                    {label: 'e', part: 2},
                ]
            }
        }
    }
</script>
<style>
    .wrap {
        color: white;
        background-color: gray;
        width: 100%;
        margin: 2px;
    }
</style>
```
![](images/layout1.png)
> 例子2：和动态组件一起使用，满足开闭原则
```
<template>
    <div id="armyDetail">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="tip">{{tip}}</span>
            </div>
            <div v-for="item in slotData">
                <div style="margin-top:15px;">
                    <span class="item-title">{{item.title}}</span>
                </div>
                <rb-layout :layout-data="item.content">
                    <template slot-scope="scope">
                      <component :is="scope.componentType" :scope="scope"></component>
                    </template>
                </rb-layout>
            </div>
        </el-card>
    </div>
</template>
<script>
    import {slotData} from './layout/layoutData'
    export default {
        data: function () {
            return {
                tip: '刘备军团',
                slotData:slotData
            }
        }
    }
</script>
```
![](images/layout2.png)
#### 3、图表(基于echarts)
> 本组件基于echarts，所以使用前需要安装echarts
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
![](images/charts.png)
#### 4、树(基于jq的ztree)