define(function(){
	function doModel(){
		$(function(){
			$(".total").css("height",$("body").height());
			
			$(".product_level1").click(function(){
				if($(this).siblings().length==1){
					$(".total").css({"display":"block"}).stop().animate({opacity:0.2},300);
					$(this).siblings().css({"display":"block"}).stop().animate({width:325,height:194,opacity:1},500).animate({height:588},500);
				}
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