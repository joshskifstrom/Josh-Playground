// higher order functions - Functions that operate on 
// other functions, either by taking them as arguments or by returning them, are called higher-order functions.
function triple (x) {
    return x * 3
};

var waffle = triple;
// console.log(waffle(12));

var animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

var doggies = animals.filter((animal)=> animal === 'dog');

var array = [];
for(i = 0; i < animals.length; i++) {
    if(animals[i].species === 'dog') {
    array.push(animals[i]);
    }
}

// console.log('new array', array);

//MAP!
var onlyAnimals = animals.map((animal)=> animal.species)
// console.log('oA',onlyAnimals)

var animals = [
    {name: "jo", species: "dog"},
    {name: "so", species: "dog"},
    {name: "do", species: "goat"},
    {name: "wo", species: "cat"}
]

const dogs = animals.filter((animal)=>animal.species === 'dog');

// console.log('dogs', dogs);
// console.log('dogs ' + dogs);
// console.log('dogs: ' + JSON.stringify(dogs));

//Reduce

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

/*console.log(orders.reduce(function(sum, order){
    return sum + order.amount
},0));*/

/*
let totalAmount = 0;
for (i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
console.log('totalAmount',totalAmount);
*/

//REDUCE ADVANCED
var fs = require('fs');
//import fs from 'fs' - didn't work and required a module.

let output = fs.readFileSync('/Users/joshskifstrom/Desktop/data.txt','utf8')
.trim()  
.split('\n')
.map((line => line.split('\t')))
.reduce((customers, line)=> {
    //console.log('customers: ',customers)
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[4]
    })
    return customers
}, {})


//console.log('output', output);
//console.log('outputJSON', JSON.stringify(output, null, 2));

//Closures - referencing variable outside of function

let me = 'Bruce Wayne'
function greetMe() {
    //console.log('Hello', me + '!')
}
greetMe()

//Recurions - a function that calls itself until it doesn't

    let countDownFrom = (num) => {
        if(num === 0) return; 
            //console.log(num)
            countDownFrom(num - 1)        
}
countDownFrom(10);

let categories = [
    {id: 'animals', 'parent': null},
    {id: 'mammals', 'parent': 'animals'},
    {id: 'cats', 'parent': 'mammals'},
    {id: 'dogs', 'parent': 'mammals'},
    {id: 'chihuahua', 'parent': 'dogs'},
    {id: 'labrador', 'parent': 'dogs'},
    {id: 'persian', 'parent': 'cats'},
    {id: 'siamese', 'parent': 'cats'}
]

let makeTree = (categories, parent)=> {
    let node = {}
    let funct = categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node
}

console.log(
    JSON.stringify(makeTree(categories, null), null, 2))