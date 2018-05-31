$(function(){
	$flag=true;
	$test=Math.floor(Math.random()* 9000+1000);
	$("#num").html($test);
	$("#change").click(function(){
		$test=Math.floor(Math.random()* 9000+1000);
		$("#num").html($test);
	})
var examine=function(){
	$("#username").focus(function(){$(".j-user").children().css("display","none");})
	$("#username").focusout(function(){
		var username=$("#username").val();
		var reg = /\w{3,20}/;
		if(reg.test(username)){
		}else{
		 	$(".j-user").children().css("display","block");
		 	$flag=false;
		}
	})
	$("#verify").focus(function(){$(".j-verify").children().css("display","none");})
	$("#verify").focusout(function(){
		var verify=$("#verify").val();
		if(verify==$test){
		}else{
		 	$(".j-verify").children().css("display","block");
		 	$flag=false;
		}
	})
	$("#passwordtest").focus(function(){$(".j-passwordtest").children().css("display","none");})
	$("#passwordtest").focusout(function(){
		var passwordtest=$("#passwordtest").val();
		var reg = /\w{6,20}/;
		if(reg.test(passwordtest)){
		}else{
		 	$(".j-passwordtest").children().css("display","block");
		 	$flag=false;
		}
	})
	$("#password").focus(function(){$(".j-password").children().css("display","none");})
	$("#password").focusout(function(){
		var password=$("#password").val();
		var a = $("#passwordtest").val();
		if(password==a){
		}else{
		 	$(".j-password").children().css("display","block");
		 	$flag=false;
		}
	})
	$("#check").focus(function(){$(".j-check").children().css("display","none");})
}
examine();
	$("#btn").click(function(){
		
		$flag=true;
		if($("#check").is(":checked")){
			examine();
		}else{
			$(".j-check").children().css("display","block");
			$flag=false;
		}
		//用户名
		var username=$("#username").val();
		var reg = /\w{3,20}/;
		var obj={};
		if(reg.test(username)){
		}else{
		 	$(".j-user").children().css("display","block");
		 	$flag=false;
		}
		//验证码
		var verify=$("#verify").val();
		if(verify==$test){
		}else{
		 	$(".j-verify").children().css("display","block");
		 	$flag=false;
		}
		//第一次输入密码
		var passwordtest=$("#passwordtest").val();
		var reg = /\w{6,20}/;
		if(reg.test(passwordtest)){
		}else{
		 	$(".j-passwordtest").children().css("display","block");
		 	$flag=false;
		}
		//确认密码
		var password=$("#password").val();
		var a = $("#passwordtest").val();
		if(password==a&&password!=""){
		}else{
		 	$(".j-password").children().css("display","block");
		 	$flag=false;
		}
		if($flag){
			$a=$("#password").val();
			$b=$("#username").val();
			$.ajax({
					  type:"POST",
					  url: "http://h6.duchengjiu.top/shop/api_user.php",
					  data:{status:"register",password:$a,username:$b},
					  success:function(data){
					  	console.log(data.code);
					  	if(data.code==0){
					  		obj[$b]=$a;
					  		var objToStr = JSON.stringify(obj);
							setCookie("usermessage", objToStr, 7);
					  		window.location.href="../index.html";
					  	}
					  	if(data.code==2001){
					  		$(".j-check").children().css("display","block");
							$(".j-check span").html("用户名已存在");
					  	}
					  	
					}
			})
		}
		
	})
})
