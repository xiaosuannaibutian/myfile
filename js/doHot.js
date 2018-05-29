define(function(){
	function doHot(){
		$(function(){
			$.ajax({
  				type: "GET",
  				url: "../php/showList.php",
  				success: function(data){
  					data = JSON.parse(data);
  					var obj = new Object();
					for(var i=0;i<data.length;i++){
						function toObj1(key,val){
	            			obj[key] = val;
	           				return obj;
	       				}
						var obj1 = toObj1(data[i].id,data[i].sales);
       				}
  				var sdic=Object.keys(obj1).sort(function(a,b){return obj1[b]-obj1[a]});
 				sdic=sdic.splice(0,4);
 				console.log(sdic);
 				var str="";
 					for(var i=0;i<data.length;i++){
 						var oSection = document.createElement("section");
 						for(var j=0;j<sdic.length;j++){
 							if(sdic[j]==data[i].id){
 								if(j==0){
 									str+="<section class='hot-1' style='background: url(../img/"+data[i].id+"/details/1.jpg)'><h3><span>"+data[i].title+"</span><span>￥"+data[i].price+"</span></h3></section>"
 								}
 								if(j==1){
 									str+="<section class='hot-2' style='background: url(../img/"+data[i].id+"/details/1.jpg)'><h3><span>"+data[i].title+"</span><span>￥"+data[i].price+"</span></h3></section>"
 								}
 								if(j==2){
 									str+="<section class='hot-3' style='background: url(../img/"+data[i].id+"/details/1.jpg)'><h3><span>"+data[i].title+"</span><span>￥"+data[i].price+"</span></h3></section>"
 								}
 								if(j==3){
 									str+="<section class='hot-4' style='background: url(../img/"+data[i].id+"/details/1.jpg)'><h3><span>"+data[i].title+"</span><span>￥"+data[i].price+"</span></h3></section>"
 								}
 							}
 						}
 					}
 				var oHot=document.getElementById("hot-pro");
 				oHot.innerHTML+=`${str}`;
 				console.log(str);
   				}
			});
		})
	}
	return {
		doHot:doHot
	}
})
