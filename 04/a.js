//truy xuất tới phần tử
document.addEventListener("DOMContentLoaded",function(){
	var nut = document.getElementById("nut1");
	var khoi = document.getElementsByClassName("card");
	// console.log(khoi[0]);
	
	//goi su kien click
	nut.onclick = function(){
		khoi[0].classList.toggle('quaphai');
	}
},false);