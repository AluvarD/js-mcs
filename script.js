
let a = prompt('Money?')

let b = prompt('How many apple?')

let c = prompt('How many bread?')

let d = prompt('How much one apple?')

let e = prompt('How much one bread?')

let f = parseFloat(b) * parseFloat(d) + parseFloat(c) * parseFloat(e)

if (a>=f){document.body.innerHTML = "<h1>true</h1>"} else document.body.innerHTML = "<h1>false</h1>"