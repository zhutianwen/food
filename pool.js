const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
    host:'127.0.0.1',
	port:3000,
    user:'root',
    password:'',
    database:'food', 
    connectionLimit:20
});

//导出连接池对象
module.exports=pool;


