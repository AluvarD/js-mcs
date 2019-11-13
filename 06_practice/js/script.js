/*
1. ﻿Дождаться прогрузки окна, после этого выполнять весь код программы

2. ﻿Создать класс Person
 а. ﻿Конструктор класса как аргумент содержит name
 b. ﻿Сам конструктор класса содержит this.name равное аргументу и 
this.happiness равное 0

3. ﻿Методы класса
 a. ﻿hasCat() — возвращает this.happiness увеличенное на 1
 b. ﻿hasRest() — возвращает this.happiness увеличенное на 1
 c. ﻿hasMoney() — возвращает this.happiness увеличенное на 1
 d. ﻿isSunny() — получает данные о погоде в Москве из API и в случае если 
температура в цельсиях больше 15 градусов. увеличивает this.happiness на 1 
и возвращает this.happiness (всегда возвращается this.happiness, независимо, 
увеличили на 1 или нет)
4. ﻿Когда мы заполняем форму в левой колонке и нажимаем submit, происходит 
такой алгоритм
 a. ﻿Отменяется дефолтное событие
 b. ﻿Собираются в переменные все данные из формы
 c. ﻿Создается экземпляр класса Person, с аргументом name взятом из поля 
ввода с именем
 d. ﻿Делаются проверки, если радиобаттоны установлены на yes в полях 
“Есть кот?”, “Отдыхал недавно?”, “Денег ок?”, то вызываются методы hasCat(), 
hasRest() и hasMoney() созданного экземпляра соответственно
 e. ﻿Вызывается метод isSunny() созданного экземпляра
 f. ﻿Выбираются элементы .personName и .icon
 g. ﻿В .personName вставьте namе экземпляра и знак :
 h. ﻿Осуществляется проверка итогового значения happiness экземпляра. 
Если значение 4 вставьте иконку в блок .icon, если 2 или 3 — 😐, 
в противном случае — ﻿☹️*/

window.addEventListener('load',function(){
	const APIKey = ' '; //не дает залогиниться сайт
	const city = 'Москва';
	const url = 'http://api.openweathermap.org/data/2.5/forecast/wheather?q='+ city +'&appid='+APIKey;
	
	let xnr = new XMLHttpRequest();
	xnr.open('GET', url, false);
	
	class Person {
		constructor(name){
			this.name = name;
			this.happiness = 0;
		}
		hasCat(){
			this.happiness = this.happiness + 1;
		}
		hasRest(){
			this.happiness = this.happiness + 1;
		}
		hasMoney(){
			this.happiness = this.happiness + 1;
		}
		isSunny(){
			this.happiness = this.happiness + 1;
		}
	}

	const form = document.forms[0];

	form.onsubmit = function(e){
		e.preventDefault();
		const person = new Person (form.elements.name.value);
		const icon = document.querySelector('.icon');

		/*xnr.send(); строка 84

		if(xnr.status != 200){
			console.log(xnr.status + ' ' + xnr.statusText);
		} else {
			var DATA = JSON.parse(xnr.responseText);
			console.log(DATA);
			var temp = DATA.main.temp - 273;
			
		}*/

		console.log(person);
		var a = 0
		console.log(form.cat.value)
		if (form.cat.value == 'yes') person.hasCat();
		if (form.rest.value == 'yes') person.hasRest();
		if (form.money.value == 'yes') person.hasMoney();
		//if (temp > 15) person.isSunny(); //не отработает, да и смысла нет зима-холодно 
		console.log(person);
		if (person.happiness == 4) {
			icon.innerHTML = '😁';
		} else if (person.happiness == 2 || person.happiness == 3) {
			icon.innerHTML = '😐';
		} else {
			icon.innerHTML = '﻿☹️';
		}
	}
})

