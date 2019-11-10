const div = document.getElementById('numbers');
var array = [];

for (var i = 1; i < 100000; i++) {
	var a = i % 6;
	if (a == 0) array.push(i);
}

div.innerHTML = array;