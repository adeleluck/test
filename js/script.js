//Задание 2.1 Скрытие блока с заголовком
var block_hide_show = true;
butt_one = document.getElementById('butt_one');
block_one = document.getElementById('block_one');

butt_one.onclick = function(){
	if (block_hide_show){
			block_one.classList.add("d-none");
			block_hide_show = false;
	}else{
				block_one.classList.remove("d-none");
				block_hide_show = true;
		}
}