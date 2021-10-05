import shops  from './shops-infos.js';


const cards = document.querySelector(".cards");

function createCard(parameter) {   

  function openCardDiv(parameter) {
      document.getElementById(`descriptEnseigne${parameter.id}`).style.display = 'grid';
      document.getElementById(`cardBody${parameter.id}`).style.display = 'none';
      document.getElementById(`btnOpen${parameter.id}`).style.visibility = 'hidden';
  }
  
  function closeCardDiv(parameter) {
      document.getElementById(`descriptEnseigne${parameter.id}`).style.display = 'none';
      document.getElementById(`cardBody${parameter.id}`).style.display = 'grid';
      document.getElementById(`btnOpen${parameter.id}`).style.visibility = 'visible';
  }
  

  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement('div');
  cardImg.classList.add('card-img');
  cardHeader.appendChild(cardImg);

  const image = document.createElement('img');
  image.src = `${parameter.picture}`;
  image.alt = `${parameter.pictureAlt}`;
  image.classList.add('image-enseigne');
  cardHeader.appendChild(image);

  const trajet = document.createElement('div');
  trajet.classList.add('trajet');
  trajet.innerHTML = `${parameter.trajet} Min`;
  cardHeader.appendChild(trajet);

  const cardBody = document.createElement('div');
  cardBody.setAttribute('id', `cardBody${parameter.id}`);
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  const nomEnseigne = document.createElement('div');
  nomEnseigne.classList.add('nom-enseigne');
  nomEnseigne.innerHTML = parameter.name;
  cardBody.appendChild(nomEnseigne);

  const styleEnseigne = document.createElement('div');
  styleEnseigne.classList.add('style-enseigne');
  styleEnseigne.innerHTML = parameter.style;
  cardBody.appendChild(styleEnseigne);

  const prixEnseigne = document.createElement('div');
  prixEnseigne.classList.add('prix-enseigne');
  prixEnseigne.innerHTML = parameter.price_range;
  cardBody.appendChild(prixEnseigne);

  const avisEnseigne = document.createElement('div');
  avisEnseigne.classList.add('avis-enseigne');
  avisEnseigne.innerHTML = parameter.ratings;
  cardBody.appendChild(avisEnseigne);

  const mapsEnseigne = document.createElement('div');
  mapsEnseigne.classList.add('maps-enseigne');
  cardBody.appendChild(mapsEnseigne);

  const mapsLink = document.createElement('a');
  mapsLink.classList.add('maps-link');
  mapsLink.href = parameter.urlItineraire;
  mapsLink.className = "material-icons";
  mapsLink.innerHTML =  "&#xe536";
  mapsEnseigne.appendChild(mapsLink);
  
  const btnOpenCard = document.createElement('button');
  btnOpenCard.setAttribute('id', `btnOpen${parameter.id}`);
  btnOpenCard.onclick = () => openCardDiv(parameter);
  btnOpenCard.className = "material-icons";
  btnOpenCard.innerHTML =  "&#xe313";
  btnOpenCard.classList.add('btn-open-card');
  cardBody.appendChild(btnOpenCard);

  const descriptEnseigne = document.createElement('div');
  descriptEnseigne.setAttribute('id', `descriptEnseigne${parameter.id}`);
  descriptEnseigne.classList.add('descript-enseigne');
  card.appendChild(descriptEnseigne);

  const descriptText = document.createElement('div');
  descriptText.classList.add('descript-text');
  descriptText.innerHTML = parameter.description;
  descriptEnseigne.appendChild(descriptText);

  const descriptCoord = document.createElement('div');
  descriptCoord.classList.add('descript-coord');
  descriptCoord.innerHTML = `${parameter.coordonnees} </br> ${parameter.phone}`;
  descriptEnseigne.appendChild(descriptCoord);


  if (parameter.site != "") {
    const descriptSite = document.createElement('a');
    descriptSite.classList.add('descript-site');
    descriptSite.href = parameter.site;
    descriptSite.innerHTML = "Site Internet";
    descriptEnseigne.appendChild(descriptSite);
  }

  const btnCloseCard = document.createElement('button');
  btnCloseCard.setAttribute('id', `btnClose${parameter.id}`);
  btnCloseCard.onclick =() => closeCardDiv(parameter);
  btnCloseCard.className = "material-icons";
  btnCloseCard.innerHTML = "&#xe316";
  btnCloseCard.classList.add('btn-close-card');
  descriptEnseigne.appendChild(btnCloseCard);



  
}



const titleName = document.querySelector('.title');

for (let i = 0; i < shops.length; i++) {
  if (titleName.id == 'place' && shops[i].category.includes('restaurant')) { 
  createCard(shops[i]);
  } 
  else if (titleName.id == 'boire' && shops[i].category.includes('boire')) {
  createCard(shops[i]);
  }
  else if (titleName.id == 'snacking' && shops[i].category.includes('snacking')) {
  createCard(shops[i]);
}




//Favorites feature

function storageAvailable(type) {
  try {
      var storage = window[type],
          x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0;
  }
}
if (storageAvailable('localStorage')) {
	// Nous pouvons utiliser localStorage
  console.log('Let s go')
const title = document.querySelector('.title');
const pageFavorite = document.createElement('div');
pageFavorite.classList.add('title');
pageFavorite.className = 'material-icons';
pageFavorite.setAttribute('id', 'logoFavoris');
pageFavorite.innerHTML = `&#xe87d`;
title.appendChild(pageFavorite);


const setFavBtn = document.createElement('div');
setFavBtn.className = 'setFavBtn';
setFavBtn.innerHTML = `&#xe87e`;
cardHeader.appendChild(setFavBtn);



}
else {
  console.log('Local Storage non disponible')
}


} 












  
