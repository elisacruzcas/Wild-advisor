import {getCharacters, getVerbs, getObjects} from './surprise-data.js'




// SEARCH ENGINE PART
const results = document.querySelector('.search-results')
const resultsButton = document.querySelector('.first-button')
const closeButton = document.querySelector('.close-button')

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