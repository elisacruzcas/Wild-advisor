import shops  from './information.js';

const cards = document.querySelector(".cards");

function createCard(parameter) {   // TODO rajouter autres éléments de shops dans la fonction

  function openCardDiv(parameter) {
    console.log('coucou');
      document.getElementById(`descriptEnseigne${parameter.id}`).style.visibility = 'visible';
      document.getElementById(`btnOpen${parameter.id}`).style.visibility = 'hidden';
  }
  
  function closeCardDiv(parameter) {
    console.log('bye')
      document.getElementById(`descriptEnseigne${parameter.id}`).style.visibility = 'collapse';
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
  mapsLink.innerHTML = "<img src=\'map.svg'>";
  mapsEnseigne.appendChild(mapsLink);
  
  

  const btnOpenCard = document.createElement('button');
  btnOpenCard.setAttribute('id', `btnOpen${parameter.id}`);
    btnOpenCard.onclick = () => openCardDiv(parameter);
  btnOpenCard.className = "material-icons";
  btnOpenCard.innerHTML = "&#xe313";
  btnOpenCard.classList.add('btn-open-card');
  cardBody.appendChild(btnOpenCard);

  const descriptEnseigne = document.createElement('div');
  descriptEnseigne.setAttribute('id', `descriptEnseigne${parameter.id}`)
  descriptEnseigne.classList.add('descript-enseigne');
  card.appendChild(descriptEnseigne);

  const descriptText = document.createElement('div');
  descriptText.classList.add('descript-text');
  descriptText.innerHTML = parameter.description;
  descriptEnseigne.appendChild(descriptText);

  const descriptPaiement = document.createElement('div');
  descriptPaiement.classList.add('descript-paiement');
  descriptPaiement.innerHTML = parameter.paiement;
  descriptEnseigne.appendChild(descriptPaiement);

  const descriptCoord = document.createElement('div');
  descriptCoord.classList.add('descript-coord');
  descriptCoord.innerHTML = `${parameter.coordonnees} - ${parameter.phone}`;
  descriptEnseigne.appendChild(descriptCoord);

  const descriptSite = document.createElement('a');
  descriptSite.classList.add('descript-site');
  descriptSite.href = parameter.site;
  descriptSite.innerHTML = "Site";
  descriptEnseigne.appendChild(descriptSite);

  const btnCloseCard = document.createElement('button');
  btnCloseCard.setAttribute('id', `btnClose${parameter.id}`);
    btnCloseCard.onclick =() => closeCardDiv(parameter);
    btnOpenCard.className = "material-icons";
    btnCloseCard.innerHTML = "&#xe313";
  btnCloseCard.classList.add('btn-close-card');
  descriptEnseigne.appendChild(btnCloseCard);
}

for (let i = 0; i < shops.length; i++) {
    createCard(shops[i]);
}










  

//   const cardImg = document.createElement("div");
//   cardImg.style.backgroundImage = `url(${parameter.picture})`;
//   cardImg.classList.add("card-img");
//   cardHeader.appendChild(cardImg);

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");
//   card.appendChild(cardBody);

//   const cardTitle = document.createElement("h2");
//   cardTitle.classList.add("card-title");
//   cardTitle.innerHTML = parameter.name;
//   cardBody.appendChild(cardTitle);

//   const cardButton = document.createElement("button");
//   cardButton.classList.add("details");
//   cardButton.innerHTML = "touch to see details";
//   cardBody.appendChild(cardButton);

//   const cardPrice = document.createElement('div');
//   cardPrice.classList.add('details');
//   cardPrice.innerHTML = parameter.price_range;
//   cardBody.appendChild(cardPrice);
 
//   const cardRatings = document.createElement('div');
//   cardRatings.classList.add('details');
//   cardRatings.innerHTML = parameter.ratings;
//   cardBody.appendChild(cardRatings);

//   const cardTrajet = document.createElement('div');
//   cardTrajet.classList.add('details');
//   cardTrajet.innerHTML = parameter.trajet;
//   cardBody.appendChild(cardTrajet);


// }

// for (let i = 0; i < shops.length; i++) {
//     createCard(shops[i]);
// }