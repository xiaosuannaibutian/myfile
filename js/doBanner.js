define(function(){
	function doBanner(){
		$(".banner").stop().animate({"opacity":"1"},1000)
	}
	return {
		doBanner:doBanner
	}
})
