$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};
//const menuBtn = document.querySelector('.menu-btn');
//let menuOpen = false;//
//menuBtn.addEventListener('click', () => {
  //if (!menuOpen) {
    //  menuBtn.classList.add('open');
      //menuOpen = true;
  //} else {
    //  menuBtn.classList.remove('open');
      //menuOpen = false;
  //}
//});