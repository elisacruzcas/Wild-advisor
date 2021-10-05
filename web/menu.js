const menuList = document.getElementsByClassName('menu');
const menuBtn = document.getElementsByClassName('icon-menu');

menuBtn[0].addEventListener('click', function(){
 if (menuList[0].style.display == "none"){
 menuList[0].style.display = "block"}
 else {
 menuList[0].style.display = "none"
 }
})