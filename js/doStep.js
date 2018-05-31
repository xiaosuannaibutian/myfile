define(function(){
	function doStep(){
		$(function(){
			$(".message>h2>.test").mousemove(function(){
				$(this).siblings().removeClass("mark");
				$(this).addClass("mark");
			})
			$(".message>h2>.test").eq(0).mousemove(function(){
				$(".message>div").siblings().css("display","block");
			})
			$(".message>h2>.test").eq(1).mousemove(function(){
				$(".message>div").css("display","block");
				$(".message>div[class!='comment']").css("display","none");
			})
			$(".message>h2>.test").eq(2).mousemove(function(){
				$(".message>div").siblings().css("display","block");
				$(".message>div[class!='que']").css("display","none");
			})
		})
	}
	return {
		doStep:doStep
	}
})