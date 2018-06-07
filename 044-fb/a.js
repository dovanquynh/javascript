document.addEventListener("DOMContentLoaded",function(){
	//bien su dung
	var nut = document.getElementsByClassName("click");
	var noidung = document.getElementsByClassName('hienthi');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			for (var j = 0; j < nut.length; j++) {
				nut[j].classList.remove('mautrang');
			}
			this.classList.toggle('mautrang');

			//lay ve data-hienlen
			this.getAttribute('data-hienlen');
			var noidunghienra = this.getAttribute('data-hienlen');
			var phantuhienra = document.getElementById(noidunghienra);

			for (var i = 0; i < noidung.length; i++) {
				noidung[i].classList.remove('hienra');
			}
			phantuhienra.classList.toggle('hienra');
		}
	}
},false);