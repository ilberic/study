window.addEventListener('DOMContentLoaded', function () {
	"use strict";
	let circles = document.querySelector('.circles'),
		circle = document.querySelectorAll('.circle'),
		img = document.querySelectorAll('.slider_img');

	function hide() {
		for (let i = 0; i < img.length; i++) {
			img[i].classList.remove('show');
			img[i].classList.add('hide');
		}
	}

	function show(b) {
		if (img[b].classList.contains('hide')) {
			img[b].classList.remove('hide');
			img[b].classList.add('show');
		}
	}

	for (let i = 0; i < circle.length; i++) {
		circle[i].addEventListener('click', function () {
			hide();
			show(i);
		});
	}
	for(let i = 0; i < 3; i++){
		img[i].addEventListener('click', function (){
			hide();
			if(img[i] !== 2){
				show(++i);
			} else {
				show(i-2);
			}
		});
	}
});






// circles.addEventListener('click', function(e){
// 	if(e.target && e.target.classList.contains('circle')){
// 		for(let i = 0; i < circle.length; i++){
// 			if(e.target == img[i]){
// 				console.log('i');
// 				hide(0);
// 				show(i);
// 				break;
// 			}
// 		}
// 	}		
// });
// });

// 	circles.addEventListener('click', function(event){
// 		let target = event.target;
// 		if(target && target.classList.contains('circle')) {
// 			for(let i = 0; i < circle.length; i++){
// 				if(target == img[i]) {
// 					console.log("hi");
// 					hide(0);
// 					show(i);
// 					break;
// 				}
// 			}
// 		}
// 	});
// });