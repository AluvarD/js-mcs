let crypto = [
{
	name:"Bitcoin",
	price: 1388.37
},
{
	name: "Ethernium",
	price: 716
},
{
	name: "Litecoin",
	price: 140
}
]

const name1 = document.querySelector('.pos1');
const cost1 = document.querySelector('.cost1');
const pos1 = document.querySelector('.position1');
const name2 = document.querySelector('.pos2');
const cost2 = document.querySelector('.cost2');
const pos2 = document.querySelector('.position2');
const name3 = document.querySelector('.pos3');
const cost3 = document.querySelector('.cost3');
const pos3 = document.querySelector('.position3');

name1.innerHTML = crypto[0].name;
cost1.innerHTML = crypto[0].price;
name2.innerHTML = crypto[1].name;
cost2.innerHTML = crypto[1].price;
name3.innerHTML = crypto[2].name;
cost3.innerHTML = crypto[2].price;

pos1.style.width = crypto[0].price + 'px';
pos2.style.width = crypto[1].price + 'px';
pos3.style.width = crypto[2].price + 'px';