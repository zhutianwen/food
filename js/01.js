//1.查找触发事件的元素
//查找手机 密码文本框
var txtPhone=document.getElementsByName("phone")[0];
var txtUpwd=document.getElementsByName("upwd")[0];
//console.log(txtPhone);
//console.log(txtUpwd);

//2.绑定事件处理函数
//当手机文本框获得焦点时
txtPhone.onfocus= txtUpwd.onfocus=function(){
  //console.log(123)
  var txt=this;
  //3.查找要修改的元素
  //找到txt旁边的div
  var div=txt.parentNode//txt的父级td
              //的下一个兄弟td
              .nextElementSibling
              .children[0];//的孩子           
  //4.修改元素
  div.className="";//清除其class
  //为当前按钮穿边框加粗
  txt.className="txt_focus1"
}
// txtUpwd.onfocus=function(){
//   var div=txt.parentNode
//              .nextElementSibling
//              .children[0]
//   //清除div 的class
//   //为当前按钮穿边框加粗
//   txt.class=""           
// }

//失去焦点
//1.查找触发事件的元素

//2.绑定事件处理函数  
//3.当手机文本框  失去焦点时
txtPhone.onblur=function(){
  //console.log(456)
  var txt=this;
  //去掉自己身上的边框
  txt.className="login1"; 
//找到txt旁边的div
  var div=txt.parentNode
              .nextElementSibling
              .children[0];
              console.log(div)
 //4.修改元素
 var reg=/^1[34578]\d{9}$/;

 if(reg.test(txt.value)){
  div.innerHTML="";
   div.className="vali_success";
 } else{
  div.innerHTML="";
   div.className="vali_fail"
 }
}

txtUpwd.onblur=function(){
  //console.log(456)
  var txt=this;
  //去掉自己身上的边框
  txt.className="login1"; 
//找到txt旁边的div
  var div=txt.parentNode
              .nextElementSibling
              .children[0];
              console.log(div)
 //4.修改元素
var reg=/^[0-9]{6,8}$/;
 if(reg.test(txt.value)){
  div.innerHTML="";
   div.className="vali_success";
 } else{
  div.innerHTML="";
   div.className="vali_fail"
 }
}

