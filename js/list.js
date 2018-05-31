$(function(){
	function datashow(data,obj,ran){
		obj.innerHTML="";
		var counter=$("#chartNum");
		chartShow(counter);
		disPlay($("#hav"),$("#del"));
		var car=$("#car","");
		toCar(car);
		for(var j=0;j<ran;j++){
	   	 	//无意义 就是数据太少了 让多循环几遍看起来多一点
	   	 	for(var i=0;i<data.length;i++){
		     	obj.innerHTML+=`
		     	<section data-id="${data[i].id}">
					<div><img src="../img/${data[i].id}/${data[i].masterImg}"/></div>
					<h3>${data[i].title}</h3>
					<span>￥${data[i].price}</span>
				</section>
		     	`
	     	}
	   	 }
	}
	if(getCookie("page")){
		//console.log(getCookie("page"));
		var a=getCookie("page");
	}
	else{
		var a=1
	}
	$.ajax({
	   type: "GET",
	   data: "page=a",
	   url: "../php/showList.php",
	   success: function(data){
	   	data = JSON.parse(data); 
	   	var oBox=document.getElementById("box");
	   	if(getCookie("page")){
	   		var a=getCookie("page");
	   		setCookie("TS",a,1);
	   		$b=a-1;
	   		$(".mainfooter .page").removeClass("now");
			$(".mainfooter .page").eq($b).addClass("now");
			if(a==1){
				$(".mainfooter .point").html("下一页").addClass("next");
				a=4	
			}
			else{
				a=1;
				if($(".mainfooter .page").length==Number(getCookie("page"))){
					$(".mainfooter .point").html("上一页").addClass("last");
				}
			}
		}
		else{
			setCookie("TS",1,1);
			$(".mainfooter .point").html("下一页").addClass("next");
			var a=4
			$(".mainfooter a").eq(0).addClass("now");
		}
	   	 datashow(data,oBox,a);
	   	 removeCookie("page");
	   }
	}).done(
		function data(){
			$("#box section").click(function(){
				var id=$(this).attr("data-id");
				window.location.href="../html/detail.html?id="+id+"";
			});
			
			$(".mainfooter .next").click(function(){
				var num=Number(getCookie("TS"));
				setCookie("page",num+1);
				location.reload();
			})
			$(".mainfooter .last").click(function(){
				var num=Number(getCookie("TS"));
				setCookie("page",num-1);
				location.reload();
			})
		}
	)
	$(".mainfooter .page").click(function(){
		var page=$(this).attr("name");
		setCookie("page",page);
		location.reload();
	})
	
})
