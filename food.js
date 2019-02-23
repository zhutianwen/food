//引入模块
const express=require('express');
const userRouter=require('./routes/demo.js');
const bodyParser=require('body-parser');
//创建web服务器
var server=express();
server.listen(3000);
//拖管静态资源
server.use(express.static('public'));
//使用body-parser中间件将post请求数据解析为对象
//注意：一定要写在路由的前面
server.use(bodyParser.urlencoded({
   extended:false
}));
//把用户路由器挂载到/user
//  /user/register
server.use('/user',userRouter);