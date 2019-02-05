const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const app = new Koa();
const staticPath ='./dist';
app.use(static(path.join(__dirname,staticPath)));
app.listen(12345,()=>{
    console.log('build run port 12345')
});