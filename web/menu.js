const dropdown = document.getElementsByClassName('menu');
const menuBtn = document.getElementsByClassName('icon-menu');
let menuOpen = false;
menuBtn.addEventListener('click', function(){
  if (!menuOpen) {
     menuBtn.classList.add('open');
      menuOpen = true;
  } else {
     menuBtn.classList.remove('open');
      menuOpen = false;
  }
});