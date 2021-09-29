const excuse = document.querySelector('.excuse')
const excuseButton = document.getElementsByClassName('btn')

const characters = ['Linus Torvalds', 'un homme en costume de Pikachu', 'le prof de data', 'Kad Merad', 'un témoin de Jéhovah', 'Jacques Chirac', 'un chat qui parle']
const verbs = ['a volé', 'a dansé avec', 'a testé un tour de magie avec', 'a défenestré', "m'a échangé ses cartes Pokémon contre", 'revendait des faux pass sanitaires contre']
const objects = ['mon dernier ticket de métro', 'mes chaussures', 'mes chaussettes', 'mon ordinateur portable', 'une tronçonneuse', 'mon appareil à raclette', 'un paquet de clopes', 'une chemise à carreaux']

excuseButton[0].addEventListener('click', function(){
    excuse.innerHTML = ''
    let excuseElement = document.createElement("li");

    let charNum = Math.floor(Math.random()*characters.length)
    let verNum = Math.floor(Math.random()*verbs.length)
    let objNum = Math.floor(Math.random()*objects.length)
    let sentence = 'Désolé de mon retard, mais ' + characters[charNum] + ' ' + verbs[verNum] + ' ' + objects[objNum]

    excuseElement.innerHTML = sentence;
    excuse.appendChild(excuseElement);


})