//Arrow Funcion.. Many different way in javascript


//simple

console.log('<!------------simple values---------->');

let hi = () => { console.log("Hi Priya");}

hi();

//input paramenter
console.log('<!------------input values---------->');

let myFunction = (name) => { console.log(`Priya ${name}`)};
//passed the name parameter

myFunction('radha welcome');

//Return values

console.log('<!------------Return values---------->');

let mufUnctionReturn = (a,b) => { return a + b };
console.log(mufUnctionReturn(5,5));

//Array object

console.log('<!------------Array values---------->');
let names = ['bala','priya','radha'];
names.map((name) => { console.log(`he is my everything in the world.his name is ${name} `)}); //map the all elements 
//doubt
//how to get the one value from names?

console.log('<!------------Index values---------->');

let empNames = ['bala', 'priya', 'radha', 'solai'];
let i=0; //initial values assigned
empNames.map((empName) => {
    
    console.log(`he is my everything in the world.his name is ${empName}${i} `);
    
    i++; // increment the value 1 by 1 here
});


console.log('<!------------return variable function values---------->');

let goodNames = ['radha','priya','bala','solai moothevi'];
let transformed = goodNames.map((name) => {
    return `Hai welcome Buddies ${name}`
});
console.log(transformed);