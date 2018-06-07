document.addEventListener("DOMContentLoaded",function(){
	//code
	var x1 = document.getElementById('n1');
	console.log(x1);
	x1.onclick = function(){
		console.log("da click" + x1);
		x1.classList.add('btn-danger');
	}
},false)