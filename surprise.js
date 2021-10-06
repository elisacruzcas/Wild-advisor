import {getCharacters, getVerbs, getObjects} from './excuse-data.js'
import {createCard} from './shops.js'
import shops  from './shops-infos.js';


// SEARCH ENGINE PART
const results = document.querySelector('.search-results')
const resultsButton = document.querySelector('.first-button')
const closeButton = document.querySelector('.close-button')

resultsButton.addEventListener('click', function(){
    let price = document.getElementById("price-select").selectedIndex;
    console.log(price)
    // 0 = n'importe  -  1 = €  -  2 = €€  -  3 = €€€     TYPE NUMBER

    let distance = document.getElementById("distance-select").selectedIndex;
    distance *= 5
    console.log(distance)
    // 0 = n'importe  -  1 = 5min  -  2 = 10min  -  3 = 15min

    let rating = document.getElementById("rating-select").selectedIndex;
    if (rating != 0) {
        rating +=2
    }
    console.log(rating)
    // 0 = n'importe  -  1 = *** -  2 = ****  -  3 = *****

    let results = []

    for (let shop of shops) {
        if (shop.price_range.length <= price) {
            if (shop.trajet <= distance) {
                if (shop.ratings.length >= rating) {
                    results.push(shop.name)
                    createCard(shop)
                }
            }
        }
    }

    console.log(results)

})

//   {
//     id: "01",
//     name: "Le Quinze",
//     picture: "shops-assets/leQuinze.jpg",
//     pictureAlt: "Le Quinze",
//     category: ["boire", "restaurant"],
//     price_range: "€€",
//     ratings: "⯪★★★★",
//     trajet: 3,
//     description: "Le spectacle du soir est chaudement recommandé par Thomas, notre maître à tous",
//     coordonnees: "15 Rue du Surmelin",
//     phone: "0143643856",
//     urlItineraire: "https://goo.gl/maps/W9Thjmk5157EctMj6",
//     site: "",
//     style: "Bar et restaurant avec terrasse",
//   },






resultsButton.addEventListener('click', function(){
    results.style.display = 'block'
})
closeButton.addEventListener('click', function(){
    results.style.display = 'none'
})


// BAD EXCUSES PART
const characters = getCharacters()
const verbs = getVerbs()
const objects = getObjects()

const excuse = document.querySelector('.excuse')
const excuseButton = document.getElementsByClassName('btn')

excuseButton[0].addEventListener('click', function(){
    excuse.innerHTML = ''
    let excuseElement = document.createElement("p");

    let charNum = Math.floor(Math.random()*characters.length)
    let verNum = Math.floor(Math.random()*verbs.length)
    let objNum = Math.floor(Math.random()*objects.length)
    let sentence = 'Désolé de mon retard, mais ' + characters[charNum] + ' ' + verbs[verNum] + ' ' + objects[objNum]


    excuseElement.innerHTML = sentence;
    excuseButton[0].innerHTML = 'AUTRE EXCUSE'
    excuse.appendChild(excuseElement);
})