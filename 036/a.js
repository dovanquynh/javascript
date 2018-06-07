document.addEventListener("DOMContentLoaded",function(){
	var nut = document.getElementById('nut');
	var khoichuyendong = document.getElementById('khoichuyendong');
	var cl = document.getElementById('cl');
	var trangthai = "Lan1";
	nut.onclick = function(){
		if(trangthai == "Lan1"){
			console.log("Click lan 1");
			trangthai = "Lan2";	
			khoichuyendong.classList.remove("khongchuyendong");
			khoichuyendong.classList.add("chuyendong1");
			cl.classList.add("themClass");
		}
		else if(trangthai == "Lan2"){
			console.log("Click Lan 2");
			trangthai = "Lan1";
			khoichuyendong.classList.remove("chuyendong1");
			cl.classList.remove("themClass");
		}
		
	}
},false);