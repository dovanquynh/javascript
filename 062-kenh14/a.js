document.addEventListener("DOMContentLoaded",function(){
	var menudo = document.querySelector(".menu");
	var trangThaiMenuDo = "duoi100";
	var chungToi = document.querySelector(".giua");
	var vtkhoivang  =  chungToi.offsetTop;
	var trangThaiKhoiVang = "duoi";
	var chanCuoi  = vtkhoivang + 600;
	console.log(chanCuoi);


	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 100){
			if(trangThaiMenuDo == "duoi100"){
				trangThaiMenuDo = "tren100";
				menudo.classList.add("menuden");
			}
		}
		else if(window.pageYOffset < 100){
			if(trangThaiMenuDo == "tren100"){
				trangThaiMenuDo = "duoi100";
				menudo.classList.remove("menuden");
			}
		}


		//xu ly khoi vang
		if((window.pageYOffset > vtkhoivang) && (window.pageYOffset < chanCuoi)){
			if(trangThaiKhoiVang == "duoi"){
				trangThaiKhoiVang = 'hienthi';
				chungToi.classList.add('vang-dung-lai');
			}
		}	
		else if((window.pageYOffset < vtkhoivang) || (window.pageYOffset > chanCuoi)){
			if(trangThaiKhoiVang == "hienthi"){
				trangThaiKhoiVang = 'duoi';
				chungToi.classList.remove('vang-dung-lai');
			}
		}
	});
},false);