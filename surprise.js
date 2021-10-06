import {getCharacters, getVerbs, getObjects} from './surprise-data.js'

// SEARCH ENGINE PART
const results = document.querySelector('.search-results')
const resultsButton = document.querySelector('.first-button')
const closeButton = document.querySelector('.close-button')

resultsButton.addEventListener('click', function(){
    const price = document.getElementById("price-select").selectedIndex;
    console.log(price)
    // 0 = n'importe  -  1 = €  -  2 = €€  -  3 = €€€     TYPE NUMBER

    const distance = document.getElementById("distance-select").selectedIndex;
    console.log(distance)
    // 0 = n'importe  -  1 = 5min  -  2 = 10min  -  3 = 15min

    const rating = document.getElementById("rating-select").selectedIndex;
    console.log(rating)
    // 0 = n'importe  -  1 = *** -  2 = ****  -  3 = *****


})











// <select name="price" id="price-select">
// <option value="none">Peu importe</option>
// <option value="€">€</option>
// <option value="€€">€€</option>
// <option value="€€€">€€€</option>
// </select>
// </div>

// <div class="form-element">
// <label for="distance">Distance</label>
// <select name="distance" id="distance-select">
// <option value="none">Peu importe</option>
// <option value="5">5 min</option>
// <option value="10">10 min</option>
// <option value="15">15 min</option>
// </select>
// </div>

// <div class="form-element">
// <label for="rating">Avis</label>
// <select name="rating" id="rating-select">







// resultsButton.addEventListener('click', function(){
//     results.style.display = 'block'
// })
// closeButton.addEventListener('click', function(){
//     results.style.display = 'none'
// })


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