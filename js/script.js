Hihmg = document.getElementById('href_my_image');
img = document.getElementById('my_image');
close_image = document.getElementById('close_img');


Hihmg.onclick = function() {

    	Hihmg.classList.add("zoom_img");
		close_image.classList.remove("d-none");
		
  };
 close_image.onclick = function() {

    	Hihmg.classList.remove("zoom_img");
		close_image.classList.add("d-none");
		
		
  };
  