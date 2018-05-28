define(function(){
	function doNav(){
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
	}
	return {
		doNav:doNav
	}
})
