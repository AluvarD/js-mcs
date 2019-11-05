window.addEventListener('load',function(){
	const button = document.querySelector('button');
	const popup = document.querySelector('.popup');
	const closepopup = document.querySelector('.closePopup');
	const menubuttonclose = document.querySelector('.closeMenu');
	const menu = document.querySelector('.menu');


	button.onclick = function(){
		popup.style.display = 'block';
	}

	closepopup.onclick = function(){
		popup.style.display = 'none';
	}

	menubuttonopen.onclick = function(){
			menu.style.left = 0;
	}

	menubuttonclose.onclick = function(){
		menu.style.left = '-50vw';
	}
})
