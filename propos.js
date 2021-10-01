
const modalOpen = document.getElementById('open-modal');
const divModal = document.getElementById('modal');
const modalClose = document.getElementById('close-modal');
const divModal2 = document.getElementById('modal-inner');

modalOpen.addEventListener('click', function(){
  divModal.style.display = "inline"
})
modalClose.addEventListener('click', function(){
  divModal.style.display = "none"
})

