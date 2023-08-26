//Задание 2.1 Скрыть/Показать блок с заголовком

var blockHideShow = true;
buttOne = document.getElementById('butt_one');
blockOne = document.getElementById('block_one');

buttOne.onclick = function(){
	if (blockHideShow){
			blockOne.classList.add("d-none");
			blockHideShow = false;
	}else{
				blockOne.classList.remove("d-none");
				blockHideShow = true;
		}
}

//Задание 2.2 Поменять блоки местами

var changePosition = true

buttTwo = document.getElementById('butt_two');

var itemList = document.querySelector('.itemList');
var item = document.querySelectorAll('.item');

buttTwo.onclick = function () {
	
		if(changePosition){
			itemList.insertBefore(item[2], item[1]);
			changePosition = false;
			
		}else{
			itemList.insertBefore(item[1], item[2]);
			changePosition = true;
		}
	
}

//Задание 2.3 Модальное окно при открытии страницы

window.onload = function() {
	alert('Привет, мир!');
}