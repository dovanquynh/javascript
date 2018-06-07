document.addEventListener("DOMContentLoaded",function(){
	//khai bao bien can su dung
	var tg = document.getElementsByClassName('tamgiac');
	var tamGiac = tg[0];
	var danhsach = document.getElementsByClassName('danhsach');
	var danhsach = danhsach[0];
	console.log(danhsach);

	//su dung ham onclick va toggle class cho tam giac
	tamGiac.onclick = function(){
		this.style.color = '#ffffff';
		danhsach.classList.toggle("hienra");
	}
},false);