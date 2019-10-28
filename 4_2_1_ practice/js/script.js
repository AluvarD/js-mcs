console.log('You are at ' + window.location);

var number = prompt('Введите число:');
var numberInt = parseInt(number);

if (numberInt == 0){
	console.log('Введен 0:');
} else {
	var modul = Math.abs(numberInt);
	console.log(modul);
}