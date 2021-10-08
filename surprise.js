import {getCharacters, getVerbs, getObjects} from './excuse-data.js'
import {createCard} from './shops.js'
import shops  from './shops-infos.js';


// SEARCH ENGINE PART
const results = document.querySelector('.search-results')
const resultsButton = document.querySelector('#search-button')
const closeButton = document.querySelector('#search-close-button')
const otherCloseButton = document.querySelector('#other-search-close-button')
const cardContainer = document.querySelector('.cards')

resultsButton.addEventListener('click', function(){
    cardContainer.innerHTML = ""

    let price = document.getElementById("price-select").selectedIndex;

    let distance = document.getElementById("distance-select").selectedIndex;
    distance *= 5

    let rating = document.getElementById("rating-select").selectedIndex;
    switch (rating) {
        case 1:
            rating = 3.5
            break
        case 2:
            rating = 4
            break
        case 3:
            rating = 4.5
            break
    }

    for (let shop of shops) {
        if (price == 0 || shop.price_range.length <= price) {
            if (distance == 0 || shop.trajet <= distance) {
                if (shop.ratings >= rating) {
                    createCard(shop)
                }
            }
        }
    }
})

resultsButton.addEventListener('click', function(){
    results.style.display = 'block'
})
closeButton.addEventListener('click', function(){
    results.style.display = 'none'
})
otherCloseButton.addEventListener('click', function(){
    results.style.display = 'none'
})

// BAD EXCUSES PART
const characters = getCharacters()
const verbs = getVerbs()
const objects = getObjects()

const excuse = document.querySelector('.excuse')
const excuseButton = document.querySelector('#excuse_button')

excuseButton.addEventListener('click', function(){
    excuse.innerHTML = ''
    let excuseElement = document.createElement("p");

    let charNum = Math.floor(Math.random()*characters.length)
    let verNum = Math.floor(Math.random()*verbs.length)
    let objNum = Math.floor(Math.random()*objects.length)
    let sentence = 'Désolé de mon retard, mais ' + characters[charNum] + ' ' + verbs[verNum] + ' ' + objects[objNum]


    excuseElement.innerHTML = sentence;
    excuseButton.innerHTML = 'AUTRE EXCUSE'
    excuse.appendChild(excuseElement);
})