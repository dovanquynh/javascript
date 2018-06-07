document.addEventListener("DOMContentLoaded",function(){
	//khai bao bien can dung
	var nut = document.querySelector('.nut'),
		quay = document.querySelector('.quay');
		menutrai = document.querySelector('.menu-trai'),
		den = document.querySelector('.den'),
		trang = document.querySelector('.mautrang');
		khoito = document.querySelector('.noidungto');


	
	//khi click vao nut xanh
	nut.onclick = function(){
		den.classList.add('hien-len');
		
		trang.classList.add('trangquay');
		menutrai.classList.remove('sang-trai');

		//cho khoi to dich sang phai
		// khoito.classList.add('dich-phai');	

	}

	den.onclick = function(){
		den.classList.remove('hien-len');
		trang.classList.remove('trangquay');
		menutrai.classList.add('sang-trai');
		khoito.classList.remove('dich-phai');
	}

},false)