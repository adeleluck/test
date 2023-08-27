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

const myModalDialog = document.getElementById("my-modal-dialog");
const acceptMyModalDialogButton = document.getElementById("my-modal-dialog-accept-button");

	acceptMyModalDialogButton.addEventListener("click", () => {
		myModalDialog.close();
	});

    window.onload = function() {
        myModalDialog.showModal();
    }
	
//Задание 2.4 Форма

/*
const form = document.querySelector('my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();  
  
  const selectOne = form.elements['FormCustomSelectOne'];
  const selectTwo = form.elements['FormCustomSelectTwo'];
  const selectThree = form.elements['FormCustomSelectThree'];
  const selectFour = form.elements['FormCustomSelectFour'];
  const selectFive = form.elements['FormCustomSelectFive'];
  const inputOne = form.elements['myInputOne'];
  const inputTwo = form.elements['myInputTwo'];
  
  
  valid = true;
  if (inputOne.value == ""){
		alert ( "Пожалуйста заполните поле 'Поле для ввода № 1'." );
		valid = false;
  }
   if (inputTwo.value == ""){
		alert ( "Пожалуйста заполните поле 'Поле для ввода № 2'." );
		valid = false;
  }
	
	return valid;	
	
});
*/

function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const value  = Object.fromEntries(data.entries());
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(value , null, 2);
}

const form = document.querySelector('.my-form');
form.addEventListener('submit', handleFormSubmit);

