define(function(){
	function doWindow(){
		var aLi=getByClass("first");
		var baLi=getByClass("second");
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.transform="rotateX(0deg)";
		}
		for(var i=0;i<baLi.length;i++){
			baLi[i].style.transform="rotateX(-90deg)";
			baLi[i].style.opacity="0";
		}
	}
	return {
		doWindow:doWindow
	}
})