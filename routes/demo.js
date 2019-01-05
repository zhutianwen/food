//引入连接池对象
const pool=require('../pool.js')
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post('/loginpost',(req,res)=>{
	//获取post请求数据
	var obj=req.body;
	console.log(obj);
   res.send('注册成功');
});

//post 登录接口
router.post('/postlogin',(req,rea)=>{
   //获取用户信息
    var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
	if(!uid){
	   res.send('编号不存在');
	   return;
	}
	if(!uname){
	   res.send('用户名不存在');
	   return;
	}
	if(!upwd){
	   res.send('密码不存在');
	   return;
	}if(!phone){
	   res.send('手机不存在');
	   return;
	}
	if(!email){
	   res.send('邮箱不存在');
	   return;
	}
    res.send("编号"+$uid+"用户名"+$uname+"密码"+$upwd+"手机"+$phone+"邮箱"+$email);
	
})
//查询用户表数据接口 userlist
   router.get('/userlist',(req,res)=>{
       var sql="select * from food_user";
	   pool.query(sql,(err,result)=>{
	      if(err) throw err;
		  res.send(result);
	   });
   });
//导出路由
module.exports=router;