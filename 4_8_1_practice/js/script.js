console.log('You are at ' + window.location);

let money = parseFloat(prompt('Сколько денег?'));
let apple = parseFloat(prompt('Сколько купили яблок?'));
let bread = parseFloat(prompt('Сколько купили хлеба?'));
let applecost = parseFloat(prompt('Сколько стоит одно яблоко?'));
let breadcost = parseFloat(prompt('Сколько стоит один хлеб?'));

function haveEnough(money,apple,bread,applecost,breadcost){
	let allbuy = apple * applecost + bread * breadcost;
	if (money>=allbuy) {
		document.body.innerHTML = "<h1>Денег хватит</h1>";
	} else document.body.innerHTML = "<h1>Денег не хватит</h1>";
};

haveEnough(money,apple,bread,applecost,breadcost);