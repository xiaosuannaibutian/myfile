define(["../js/doStep","../js/doGlass"],function(a,b){
	function detailShow(){
		var str = location.search;
		var proId = str.split("=")[1];//id
		var oMain=document.getElementById("main");
		var oMainbody=document.getElementById("main_body");
		var counter=$("#chartNum");
		chartShow(counter);
		disPlay($("#hav"),$("#del"));
		var car=$("#car");
		toCar(car,"");
		var gochart=$("#gochart")
		toCar(gochart,"");
		$.ajax({
			url: "../php/detail.php",
			type:"post",
			data:{id:proId},
			success:function(data){
				data = JSON.parse(data);
				//放大镜图
				imgurl=data[0].imgurl.split(",");
				var str1="";
				var str2="";
				for(var i=0;i<imgurl.length;i++){
					str1=imgurl[0];
					str2+="<img src='../img/"+data[0].id+"/"+imgurl[i]+"'/>"
				}
				//介绍图
				introImg=data[0].introImg.split(",");
				var str3="";
				for(var j=0;j<introImg.length;j++){
					str3+="<img src='../img/"+data[0].id+"/details/"+introImg[j]+"'/>"
				}
				//问答
				if(data[0].quizzerId){
					quizzerId=data[0].quizzerId.split(",");
					questions=data[0].questions.split(",");
					administrator=data[0].administrator.split(",");
					var str4="";
					for(var k=0;k<quizzerId.length;k++){
						str4+="<section><div class='tit'><span>"+quizzerId[k]+":</span>"+questions[k]+"</div><p><span>客服回答:</span>"+administrator[k]+"</p></section>"
					}
				}
				else{
					var str4="";
				}
				oMain.innerHTML+=`
					<div class="main_head">
						<div id="content">
							<div id="zoomBox">
								<div id="midArea">
									<img src="../img/${data[0].id}/${str1}" id="midImg">
									<div id="zoom">
										<img src="../img/${data[0].id}/${str1}" id="oImg">
									</div>
									<div id="masking-out">
										
									</div>
								</div>
								<div id="bigArea">
									<img src="../img/${data[0].id}/${str1}">
								</div>
							</div>
						</div>
						<div id="smallArea">
							<!--点击小图，将中图和大图的img的src换掉-->
							${str2}
						</div>
					</div>
					<article>
						<h3>${data[0].title}</h3>
						<hr />
						<div>
							<span>品牌：${data[0].brand}</span>
							<span>商品编号：${data[0].id}</span>
						</div>
						<em>￥${data[0].price}</em>
						<div class="put">
							<span>数量：</span>
							<div id="onum">
								<span id="subtract">-</span>
								<input type="text" value="1"/>
								<span id="plus">+</span>
							</div>
							
						</div>
						<div id="incart">
								<input type="button" value="加入购物车" class="cart"/>
								<input type="button" value="&#xe60c;加入收藏"/>
						</div>
					</article>
				`
				oMainbody.innerHTML+=`
					<div class="message">
					<h2>
						<span class="test">商品信息</span>
						<span class="test">商品评论</span>
						<span class="test">商品问答</spn>
					</h2>
					<div class="showList">
						${str3}
					</div>
					<div class="comment">
						<h3><span>商品评价</span></h3> 
						<article class="comAr">
							<section>暂无评论</section>
						</article>
					</div>
					<div class="que">
						<h3><span>商品问答</span></h3>
						<article class="queAr">
							${str4}
						</article>
						<h3 style="border: none;">我要提问</h3>
						<div class="input">
							<textarea placeholder="请输入您的评论内容"></textarea>
							<em>字数限制为5-200</em>
							<input type="button" value="提交"/>
						</div>
						
						
					</div>
				</div>
				
			`;
				//整体插入
			}
		}).done(function(data){
			b.doGlass();
			a.doStep();
		});
		
		
		$.post("../php/detail.php",{id:proId}).done(function(data){
			data = JSON.parse(data);
			$.post("../php/related.php",{brand:data[0].brand},function(data){
				data = JSON.parse(data);
				var str = "";
				  	for(var i=0;i<data.length;i++){
				  		str+="<section data-id='"+data[i].id+"'><div><img src='../img/"+data[i].id+"/"+data[i].masterImg+"'/></div><h3>"+data[i].title+"</h3><span>￥"+data[i].price+"</span></section>"
				  	}
				  	$("#main_aside").html('<div class="aside"><h2>相关产品 </h2>'+str+'</div>')
					$("#main_aside section").click(function(){
						var id=$(this).attr("data-id");
						window.location.href="detail.html?id="+id+"";
						//console.log($(this).parent().attr("data-id")); 
					})
					$("#incart .cart").click(function(){
						$(".total").css("height",$("body").height());
						//console.log($(".total"));
						$(".total2").css({"display":"block"}).stop().animate({opacity:0.4},300);
						$("#popbox").css({"display":"block"}).stop().animate({top:0},300);
						var counter=$("#chartNum");
						var a=$("#onum input").val();
							a=Number(a);
						chart(counter,proId,a);
					})
					
					$("#delet").click(function(){
						$(".total2").css({"display":"none","opacity":"0"});
						$("#popbox").css({"display":"none","top":"-800"});
					})
					$("#hong-out").click(function(){
						$(".total2").css({"display":"none","opacity":"0"});
						$("#popbox").css({"display":"none","top":"-800"});
					})
					$("#subtract").click(function(){
						if($("#onum input").val()==0){
							
						}
						else{
							var a=$("#onum input").val();
							a=Number(a);
							$a=a
							$("#onum input").val($a-1);
						}
						
					})
					$("#plus").click(function(){
							var a=$("#onum input").val();
							a=Number(a);
							$a=a
							$("#onum input").val($a+1);
						
					})
				})
			})
		
		
	}
	return {
		detailShow:detailShow
	}
})
