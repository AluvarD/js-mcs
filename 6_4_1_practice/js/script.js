const APIKey = ' '; //не дает залогиниться сайт
const city = prompt('Введите город:');
const url = 'http://api.openweathermap.org/data/2.5/forecast/wheather?q='+ city +'&appid='+APIKey;
const name1 = document.querySelector('.tmp');
const button = document.querySelector('button');

let xnr = new XMLHttpRequest();

xnr.open('GET', url, false);

button.onclick = function(){
		xnr.send();
		if(xnr.status != 200){
			console.log(xnr.status + ' ' + xnr.statusText);
		} else {
			var DATA = JSON.parse(xnr.responseText);
			console.log(DATA);
			name1.innerHTML = DATA.main.temp - 273;
			//document.write(DATA.main.temp - 273);
		}
	}
