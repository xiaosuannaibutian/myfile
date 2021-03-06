function getStyle(obj, attr) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr];
	}
	return obj.currentStyle[attr];
}
function getByClass(classname) {
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	} else {
		//先取到所有的标签
		var allEle = document.getElementsByTagName("*");

		var newArr = []; //保存含有指定类名的DOM对象

		for(var i = 0; i < allEle.length; i++) {
			//取到每一个元素的类名
			var cn = allEle[i].className;

			// 避免使用indexOf方法，原因：比如取test1，含有testtest1这个类名的元素也将被取到
			// 将类名字符串转换成数组，已知类名是以空格来分割的
			var arr = cn.split(" ");

			// 避免使用indexOf，因为其是ES5新增方法，有兼容性问题
			for(var j = 0; j < arr.length; j++) {
				if(arr[j] == classname) {
					newArr.push(allEle[i]);
					break;
				}
			}
		}
		return newArr;
	}
}

function setCookie(name,value,n){
var oDate = new Date();
	oDate.setDate(oDate.getDate()+n);
	document.cookie = name+"="+value+";expires="+oDate+";path=/";
	}
function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++){
		var newArr = arr[i].split("=");
		if(newArr[0]===name){
			return newArr[1];
		}
	}
}
function removeCookie(name){
	setCookie(name,1,-1);
}
function chartShow(count){
	if(getCookie("cart") !== undefined) {
		var obj = JSON.parse(getCookie("cart"));
		count.css.display="block";
		count.css("display","block");
	} else {
		var obj = {};
	}
	var sum = 0;
	for(var b in obj) {
		sum += obj[b];
	}
	count.innerHTML = sum;
	count.html(sum);
}
function chart(count,handid,score){
		if(getCookie("cart") !== undefined) {
			var obj = JSON.parse(getCookie("cart"));
		} else {
			var obj = {};
			count.css.display="block";
			count.css("display","block");
		}
		if(obj[handid] == undefined) {
			obj[handid] = 1;
		} else {
			obj[handid]+=score;
		}
		//console.log(obj);
		var sum = 0;
		for(var b in obj) {
		sum += obj[b];
		}
		count.innerHTML = sum;
		count.html(sum);
		var objToStr = JSON.stringify(obj);
		setCookie("cart", objToStr, 7);
}
function disPlay(oGet,oDelet){
	if(getCookie("usermessage") !== undefined){
		oGet.css("display","none");
		oDelet.css("display","inline-block");
	}else{
		oGet.css("display","inline-block");
		oDelet.css("display","none");
	}
	oDelet.click(function(){
		removeCookie("usermessage");
		oGet.css("display","inline-block");
		oDelet.css("display","none");
	})
}
function toCar(car,location){
	car.click(function(){
		window.location.href=location+"chart.html";
	})
	
}
