define(function(){
	function doModel(){
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
			})
			$(".total").css("height",$("body").height());
			$(".product_level1").click(function(){
				var id=$(this).parent().attr("data-id");
				if($(this).siblings().length==1){
					$(".total").css({"display":"block"}).stop().animate({opacity:0.2},300);
					$(this).siblings().css({"display":"block"}).stop().animate({width:325,height:194,opacity:1},500).animate({height:588},500);
				}
				else{
					window.location.href="html/detail.html?id="+id+"";
				}
			})
			$(".product_level2 article").click(function(){
				var id=$(this).parent().parent().attr("data-id");
				window.location.href="html/detail.html?id="+id+"";
			})
			
			$(".product_level2 em").click(function(){
				$(".total").stop().animate({opacity:0},300,function(){
					$(".total").css("display","none")
				});
				$(".pro .product_level2").stop()
					.animate({height:194},500)
					.animate({width:0,height:0,opacity:0},500)
			})
		})
	}
	return {
		doModel:doModel
	}
})