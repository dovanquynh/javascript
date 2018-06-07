document.addEventListener("DOMContentLoaded",function(){
	var btn = document.querySelectorAll('.next-page ul li');
	//btn tra ve mang btn
	//bat su kien click cho tung nut
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function(){
			//bo tat ca mau den di
			for (var i = 0; i < btn.length; i++) {
				btn[i].classList.remove('active-css');
			}
			this.classList.add('active-css');
		});
	}
});