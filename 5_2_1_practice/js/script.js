console.log('You are at ' + window.location);

var a = prompt('Введите число:')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(Math.abs(Math.pow(a,getRandomInt(1,10))));