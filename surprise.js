const excuse = document.querySelector('.excuse')
const excuseBox = document.querySelector('.excuses-bidons')
const excuseButton = document.getElementsByClassName('btn')

const characters = ['Linus Torvalds', 'un homme en costume de Pikachu', 'le prof de data', 'Kad Merad', 'un témoin de Jéhovah', 'Jacques Chirac', 'un chat noir', "une bactérie de l'évier", 'Thomas', 'Paul-Emmanuel']
const verbs = ['a volé', 'a dansé avec', 'a testé un tour de magie avec', 'a défenestré', "m'a échangé ses cartes Pokémon contre", "voulait s'enfuir de la Wild avec", 'revendait des faux pass sanitaires contre', "m'a fait passer la douane en cachant", "m'a proposé de tourner un film sur", 'me poursuivait avec']
const objects = ['mon dernier ticket de métro', 'mes chaussures', 'mes chaussettes', 'mon ordinateur portable', 'une tronçonneuse', 'mon appareil à raclette', 'un paquet de clopes', 'une chemise à carreaux', 'toutes les machines à café']

excuseButton[0].addEventListener('click', function(){
    excuse.innerHTML = ''
    let excuseElement = document.createElement("p");

    let charNum = Math.floor(Math.random()*characters.length)
    let verNum = Math.floor(Math.random()*verbs.length)
    let objNum = Math.floor(Math.random()*objects.length)
    let sentence = 'Désolé de mon retard, mais ' + characters[charNum] + ' ' + verbs[verNum] + ' ' + objects[objNum]

    excuseBox.style.height = '17em'
    excuseElement.innerHTML = sentence;
    excuseButton[0].innerHTML = 'AUTRE EXCUSE'
    excuse.appendChild(excuseElement);
})