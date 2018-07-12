# rb-lib

> 一个基于element-ui的二次开发库

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