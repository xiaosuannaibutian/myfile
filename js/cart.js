$(function(){
	$a=$("nav:eq(0)").height();
	$b=$("nav:eq(1)").height();
	$(function(){
		$("nav:first li:eq(1),nav:eq(1)").mousemove(function(){
			$("nav:eq(1)").stop().animate({left:74,height:$a,opacity:1},300);
			$("nav:first li:eq(1),nav:eq(1)").mouseout(function(){
				$("nav:eq(1)").stop().animate({left:0,height:$b,opacity:0},300);
			})
		});
	})
	var counter=$("#chartNum");
	chartShow(counter);
	disPlay($("#hav"),$("#del"));
	var car=$("#car");
	toCar(car,"");
	if(getCookie("cart")===undefined){
		console.log("暂时没有添加任何商品")
	}else{
		var obj2 = JSON.parse(getCookie("cart"));
	}
	//console.log(obj2)
	var pricenum=0;
	for(var attr in obj2){
		$.ajax({
   			type: "POST",
   			url: "../php/detail.php",
   			data: {id:attr},
   			success: function(data){
   			data = JSON.parse(data);
     		var main=document.getElementById("main");
     		var oSection=document.createElement("section");
     		oSection.innerHTML+=`
					<input type="checkbox"/>
					<figure>
						<img src="../img/${data[0].id}/${data[0].masterImg}"/>
						<figcaption>
							<h3>${data[0].title}</h3>
							<i>商品编号：${data[0].id}</i>
						</figcaption>
					</figure>
					<span>￥${data[0].price}</span>
					<div class="arith">
						<div class="minus" >-</div>
						<input type="text"  value="${obj2[data[0].id]}"/>
						<div class="plus">+</div>
					</div>
					<span id="sum">￥${obj2[data[0].id]*data[0].price}</span>
					<span class="delet" id='deloneself'>&Chi;删除</span>`
   			main.appendChild(oSection);
   			pricenum+=obj2[data[0].id]*data[0].price;
   			}
		})
	}
	
	
})
