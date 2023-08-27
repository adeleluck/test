//Задание 2.1 Скрыть/Показать блок с заголовком

var blockHideShow = true;
btnOne = document.getElementById('btn_one');
blockOne = document.getElementById('block_one');

btnOne.onclick = function(){
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

btnTwo = document.getElementById('btn_two');

var itemList = document.querySelector('.itemList');
var item = document.querySelectorAll('.item');

btnTwo.onclick = function () {
	
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
	