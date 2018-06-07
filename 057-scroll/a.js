

document.addEventListener("DOMContentLoaded", function () {
	var trangThai = 'duoi400';

	var doiTuongMenu =  document.querySelector('.menu');

	//bat su kien cuon chuot
	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 400){
			if(trangThai == 'duoi400'){
				trangThai = 'tren400'; 
				doiTuongMenu.classList.add('nho-lai');
			}

		}
		else if(window.pageYOffset <= 400){
			if(trangThai == 'tren400'){
				doiTuongMenu.classList.remove('nho-lai');
				trangThai = 'duoi400';
			}
		}
	});

}, false);

