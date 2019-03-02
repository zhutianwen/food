const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建空路由器
var router=express.Router();
//添加路由
router.get('/checkUname',(req,res)=>{
   var obj=req.query;
   var $uname=obj.uname;
   if(!$uname){
	   res.send("用户名不存在");
	   return;
   }
   var sql="SELECT * FROM food_user WHERE uname=?";
   pool.query(sql,[$uname],(err,result)=>{
	   if(err) throw err;
	   if(result.length>0){
		   res.send("1");//说明用户名已存在
	   }else{
		   res.send("0");//说明用户名不存在 可注册
	   }
   })
});

//1.用户注册
router.get('/reg',(req,res)=>{
	//获取get请求的数据
	var obj=req.query;
//console.log(obj);
//判断用户名是否为空
var $uname=obj.uname;
var $upwd=obj.upwd;
var $phone=obj.phone;
//console.log($uname);
var reg=/^[\u4e00-\u9fa5]{3,5}$/;
var reg1=/^[0-9]{6,8}$/;
var reg2=/^1[34578]\d{9}$/;
if(!$uname){
	res.send({code:401,msg:"uname required"})
	return;
}; 
if(!reg.test($uname)){
	res.send({code:444,msg:"用户名格式不正确"})
	return;
};

if(!$upwd){
	res.send({code:402,msg:"upwd required"})
	return;
};
if(!reg1.test($upwd)){
	res.send({code:445,msg:"用户密码格式不正确"})
	return;
};


if(!$phone){
	res.send({code:404,msg:"phone required"})
	return;
};
if(!reg2.test($phone)){
	res.send({code:446,msg:"手机号码格式不正确"})
	return;
};

//执行sql语句，将注册的数据插入到xz_user数据表中，成功响应{code:200,msg:'register suc'}
var sql='INSERT INTO food_user SET ?';
pool.query(sql,[obj],(err,result)=>{
	if(err) throw err;
	//res.send(result);
	if(result.affectedRows>0){
		res.send({code:1,msg:result});
	}
});

});

//用户登录
router.post("/login",(req,res)=>{
	var $phone=req.body.phone;
	var $upwd=req.body.upwd;
	if(!$phone){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	var sql="SELECT * FROM food_user WHERE phone=? AND upwd=?";
	pool.query(sql,[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		
		if(result.length>0){
			res.send("登录成功")
		}else{
			res.send("登录失败")
		}
	})
})





//导出路由
module.exports=router;





