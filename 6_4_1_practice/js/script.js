const APIKey = ' '; //не дает залогиниться сайт
const city = prompt('Введите город:');
const url = 'http://api.openweathermap.org/data/2.5/forecast/wheather?q='+ city +'&appid='+APIKey;

let xnr = new XMLHttpRequest();

xnr.open('GET', url, false);
xnr.send();

if(xnr.status != 200){
	console.log(xnr.status + ' ' + xnr.statusText);
} else {
	var DATA = JSON.parse(xnr.responseText);
	console.log(DATA);
	document.write(DATA.main.temp - 273);
}