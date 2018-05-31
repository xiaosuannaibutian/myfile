define(["js/doModel"],function(a){
	function doFalls(){
		$(function(){
				var oMain=document.getElementById("main");
				var counter=0;
				var counter=$("#chartNum");
				chartShow(counter);
				disPlay($("#hav"),$("#del"));
				var car=$("#car");
				toCar(car,"html/");
				$.ajax({
					url: "../php/showList.php",
					success: function(data){
						data = JSON.parse(data);
						var counter=0
					for(var k=0;k<4;k++){
						for(var i=0;i<data.length;i++){
							counter++;
							var sTrImg="";
							var sTrSpan="";
							var variable=Math.ceil(Math.random()*3);
							var variable2=Math.ceil(Math.random()*3)+3;
							if(counter%4==0){
								oMain.innerHTML+=`
								<section class="theme">
									<img src="img/common/${variable}.jpg" class="kind1"/>
								</section>`
							}
							if((counter+2)%5==0){
								oMain.innerHTML+=`
								<section class="theme2">
									<img src="img/common/${variable2}.jpg" class="kind2"/>
								</section>`
							}
							if(counter%3==0){
								sTrSpan='<div class="product_level1 kindle2">'
							}else{
								sTrSpan='<div class="product_level1">'
							}
							if(data[i].lowImg){
								var sImg=data[i].imgurl.split(",");
								for(var j=0;j<sImg.length;j++){
									sTrImg+="<img src='img/"+data[i].id+"/"+sImg[j]+"'/>";
								}
								oMain.innerHTML+=`
								<section class="pro" data-id="${data[i].id}">
									${sTrSpan}
										<img src="img/${data[i].id}/${data[i].masterImg}"/>
										<article>
											<h2>${data[i].title}</h2>
											<p>${data[i].introduce}</p>
											<div>￥${data[i].price}</div>
											<span></span>
										</article>
									</div>
									<div class="product_level2">
										<img src="img/${data[i].id}/${data[i].lowImg}"/>
										<article>
											<h2>${data[i].title}</h2>
											<p>${data[i].introduce}</p>
											<div class="m_char">
												<span>&#xe63f;</span>
												<span>查看详情&gt;&gt;</span>
											</div>
											${sTrImg}
											</article>
										<em>&times;</em>
									</div>
								</section>
								`;
							}else{
								oMain.innerHTML+=`
								<section class="pro" data-id="${data[i].id}">
									${sTrSpan}
										<img src="img/${data[i].id}/${data[i].masterImg}"/>
										<article>
											<h2>${data[i].title}</h2>
											<p>${data[i].introduce}</p>
											<div>查看详情&gt;&gt;</div>
											<span></span>
										</article>
									</div>
								</section>
								`
							}
						}
					}
						
					  a.doModel();	
 					}
					
				}).done(
					function(data){
						$oSection=$(".main section");
						$mt=$ml=6;
						$perWid=$oSection.width();
						$arrHei=[];
						for($i=0;$i<3;$i++){
							$oSection[$i].style.top=0;
							$oSection[$i].style.left=($perWid+$ml)*$i+"px";
							$arrHei.push($oSection[$i].offsetHeight);
						}
						for($i=3;$i<$oSection.length;$i++){
							var arrHei=$arrHei
							$oSection[$i].style.top=$arrHei[getMinIndex(arrHei)]+$mt+"px";
							$oSection[$i].style.left=$oSection[getMinIndex(arrHei)].style.left;
							$arrHei[getMinIndex($arrHei)]+=$oSection[$i].offsetHeight+$mt;
							//console.log($oSection[$i].offsetHeight);
						}
						function getMinIndex(arr){
							var minVal = Math.min.apply(null,arr);
							var minIndex = arr.indexOf(minVal);
							return minIndex;
						}
					}
				)
							
				
		})
	}
	return {
		doFalls:doFalls
	}
})