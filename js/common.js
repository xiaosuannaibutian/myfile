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