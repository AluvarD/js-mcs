console.log('You are at ' + window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.Class.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector,firstBySelector);

const quest = prompt ('Что вывести на странице?');


byId.innerHTML = quest;
firstBySelector.innerHTML = "<h2>id div2</h2>";