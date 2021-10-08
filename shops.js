import shops  from './shops-infos.js';


//Card Constructor
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
  
  function setFavorite(parameter) {
      const favCheck = document.getElementById(`setFavBtn${parameter.id}`); 
      
      if (!parameter.isFavorit ) {
        // console.log('add');
          setFavBtn.innerHTML = `&#xe87d`;
          parameter.isFavorit = true
          localStorage.setItem(parameter.id, parameter.name);
        } else {
          // console.log('remove');
          setFavBtn.innerHTML = `&#xe87e`;
          parameter.isFavorit = false
          localStorage.removeItem(parameter.id);
        }     
        // console.log(localStorage);
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
  avisEnseigne.style = `--rating: ${parameter.ratings}`;
  cardBody.appendChild(avisEnseigne);

  const mapsEnseigne = document.createElement('div');
  mapsEnseigne.classList.add('maps-enseigne');
  cardBody.appendChild(mapsEnseigne);

  const mapsLink = document.createElement('a');
  mapsLink.classList.add('maps-link');
  mapsLink.href = parameter.urlItineraire;
  mapsLink.target = "_blank";
  mapsLink.rel = "noreferrer noopener";
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
    descriptSite.target = "_blank";
    descriptSite.rel = "noreferrer noopener";
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

// Favorite Feature in cards
  const setFavBtn = document.createElement('a');
  setFavBtn.setAttribute('id', `setFavBtn${parameter.id}`);
  setFavBtn.className = 'material-icons';
  setFavBtn.classList.add('favButton');
  cardHeader.appendChild(setFavBtn);

    if (parameter.name == localStorage.getItem(parameter.id)) {
      setFavBtn.innerHTML = `&#xe87d`;
      parameter.isFavorit = true
    } else {
      setFavBtn.innerHTML = `&#xe87e`;
      parameter.isFavorit = false
    }
  setFavBtn.addEventListener('click', () => setFavorite(parameter)); 
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
  else if (titleName.id == 'favoris' && shops[i].name == localStorage.getItem(shops[i].id)) {
  createCard(shops[i]);
  }

}

export {createCard}