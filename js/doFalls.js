define(function(){
	function doFalls(){
		$(function(){
			$(".product_level1").mousemove(function(){
				if($(this).hasClass("kindle2")){
					$(this).children("img").stop().animate({left:6},200)
				}
				else{
					$(this).children("img").stop().animate({right:6},200)
				}
				
			});
			$(".product_level1").mouseout(function(){
				if($(this).hasClass("kindle2")){
					$(this).children("img").stop().animate({left:0},200)
				}
				else{
					$(this).children("img").stop().animate({right:0},200)
				}
			});
				var oMain=document.getElementById("main");
				/*$.ajax({
					url: "php/showList.php",
					success: function(data){
						data = JSON.parse(data);
						for(var i=0;i<data.length;i++){
							console.log(data[i]);
							if(data[i].lowImg){
								console.log(oMain);
								oMain.innerHTML+=`
								<section class="pro">
									<div class="product_level1">
										<img src="img/1/${data[i].masterImg}"/>
										<article>
											<h2>${data[i].title}</h2>
											<p>${data[i].introduce}</p>
											<div>￥${data[i].price}</div>
											<span></span>
										</article>
										
									</div>
									<div class="product_level2">
										<img src="img/1/1490296417710181858.jpg"/>
										<article>
											<h2>${data[i].title}</h2>
											<p>${data[i].introduce}</p>
											<div class="m_char">
												<span>&#xe63f;</span>
												<span>查看详情&gt;&gt;</span>
											</div>
											<img src="img/1/6852_P_1471545298649.jpg"/>
											<img src="img/1/6852_P_1471545298659.jpg" />
											<img src="img/1/6852_P_1471545298659.jpg" />
										</article>
										<em>&times;</em>
									</div>
								</section>
								`;
							}
						}
 					}
					
				});
*/							
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
		})
	}
	return {
		doFalls:doFalls
	}
})