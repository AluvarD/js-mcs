console.log('You are at ' + window.location);

//1. ﻿Вызовет prompt с вопросом “Какой будет фон у страницы?” и заменит на введенный цвет фон body
let bodyColor = prompt('Введите цвет фона:');
document.body.style.backgroundColor = bodyColor;
//2. ﻿Вызовет prompt с вопросом “Какой будет цвет текста на странице?” и заменит цвет текста у всего .page на введенный
let textColor = prompt('Введите цвет текста:');
document.body.style.color = textColor;
//3. ﻿Вызовет prompt с вопросом “Как зовут человека, который вас вдохновляет” и вставит введенное имя в span с классом name
//let name = prompt('Введите имя:');
//document.body.innerHTML = "<span class = 'name'>" + name + "</span>";
//пока не понял
//4. ﻿Вызовет prompt с вопросом “Введите адрес картинки” и подставит введенную картинку в тег img, изменив текущий атрибут
let image = prompt('Введите адрес картинки:')
const hasimage = document.querySelector('img');
hasimage.setAttribute('src',image);
//5. ﻿Вызовет prompt с вопросом “Введите текст страницы” и вставит введенный текст в блок .shortBio
let text = prompt('Введите текст:')
const hastext = document.querySelector('p');
//не понял пока
//6. ﻿Присвоит класс animated к элементу с классом shortBio, так чтобы анимация границы з
document.querySelector('.shortBio').className += ' animated';