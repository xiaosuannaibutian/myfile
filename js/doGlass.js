define(function(){
	function doGlass(){
			var oZoomBox = document.getElementById("zoomBox");
			var oMasking = document.getElementById("masking-out");
			var oMidArea = document.getElementById("midArea");
			var midImg =oMidArea.children[0];
			var oZoom = document.getElementById("zoom");
			var oBigArea = document.getElementById("bigArea");
			var oBigImg = oBigArea.children[0];
			var smallArea=document.getElementById("smallArea");
			var smaImg = smallArea.children;
			var oImg=document.getElementById("oImg");
			for(var m=0;m<smaImg.length;m++){
				smaImg[m].index=m;
				smaImg[m].onclick=function(){
					midImg.src=this.src;
					oImg.src=this.src;
				}
			}
			oMidArea.onmouseover = function(){
				oZoom.style.display = "block";
				oBigArea.style.display = "block";
				oMasking.style.display="block";
			}
			oMidArea.onmouseout = function(){
				oZoom.style.display = "none";
				oBigArea.style.display = "none";
				oMasking.style.display="none";
			}
			oMidArea.onmousemove = function(e){
				var evt = e || event;
				var _left = evt.pageX -oZoomBox.offsetLeft - oZoom.offsetWidth/2;
				var _top = evt.pageY - oZoomBox.offsetTop -oZoom.offsetHeight/2;
				if(_left<=0){
					_left = 0;
				}
				if(_left >= oMidArea.offsetWidth-oZoom.offsetWidth){
					_left = oMidArea.offsetWidth-oZoom.offsetWidth;
				}
				
				if(_top<=0){
					_top = 0;
				}
				
				if(_top>=oMidArea.offsetHeight-oZoom.offsetHeight){
					_top=oMidArea.offsetHeight-oZoom.offsetHeight;
				}
				oZoom.style.left = _left + "px";
				oZoom.style.top = _top + "px";
				oImg.style.left = -_left + "px";
				oImg.style.top = -_top + "px";
				//大图移动
				oBigImg.style.left = -oZoom.offsetLeft/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = -oZoom.offsetTop/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				
			}
	$("#midArea").mouseenter(function(){
		$("#masking-out").stop().animate({opacity:"0.5"},300);
	})
	
}
	return {
		doGlass:doGlass
	}
})
