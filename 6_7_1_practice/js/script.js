/*
Создайте класс Customer, у которого будет имя в конструкторе и метод buy, 
выводящий в консоль слово “Куплено”.
Создайте подкласс childCustomer, который наследует конструктор 
и метод Customer, но имеет собственный метод getPresent, 
который выводит в консоль фразу “Шарик в подарок”.*/

class Customer {
	constructor(name){
		this.name = name
	}
	buy(){
		return 'Куплено.';
	}
}

class childCustomer extends Customer {
	getPresent() {
		return 'Шарик в подарок.';
	}
}

const man = new Customer ('Михаил');
console.log(man);
console.log(man.buy());

const child = new childCustomer ('Максим');
console.log(child);
console.log(child.buy());
console.log(child.getPresent());