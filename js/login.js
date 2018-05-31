$(function(){
	$x=Math.floor(Math.random()* 9000+1000);
	$a=0;
	$("#num").html($x);
	$("#change").click(function(){
		$x=Math.floor(Math.random()* 9000+1000);
		$("#num").html($x);
	})
	$("#btn").click(function(){
		var obj={}
		if($("#verify").val()==$x){
			$a=$("#password").val();
			$b=$("#username").val();
			$.ajax({
					  type: "POST",
					  url: "http://h6.duchengjiu.top/shop/api_user.php",
					  data:{status:"login",password:$a,username:$b},
					  success:function(data){
					  	console.log(data);
					  	console.log(data.code);
					  	if(data.code==1004||data.code==1000||data.code==1001){
					  		$(".judge").children().css("display","block");
							$(".judge span").html("登录失败，请检查用户名和密码是否正确。");
					  	}
					  	if(data.code==0){
					  		obj[$b]=$a;
					  		//console.log(obj);
					  		var objToStr = JSON.stringify(obj);
							setCookie("usermessage", objToStr, 7);
					  		window.location.href="../index.html";
					  		if($("#check").attr("checked")=="checked"){
					  		}
					  	}
					  	
					  }
			})
		}
		else{
			$(".judge").children().css("display","block");
			$(".judge span").html("对不起，您输入的验证码不正确。")
		}
		//console.log($("#username").val(),$("#password").val())
		console.log($("#password").val());
		
	})
	
	
})
