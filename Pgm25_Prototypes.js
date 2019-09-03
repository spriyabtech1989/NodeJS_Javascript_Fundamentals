//Javascript is an objects,
//called the name is Class
//All the properties parant class from child class. 
//Instance the object
//A create a instance on object
//Relationshp b/w classes and objects
//inheritance
//oops concept
//Protype and Inheritance
//objects linkin other objects

//Object
let secondHandBike = {
    make: 'tvs',
    model: 'old',
    oldBike: 'yes',
    year: 2018,
    ownerName: 'solai'
};

//New object based on Existing Objects
let newBike = Object.create(secondHandBike);//Prototype is a create the instance of the object
console.log(newBike.ownerName); // get the value from secondhandbike



//we have 2 objects. we need to change the exisiting property

console.log(Object.getPrototypeOf(newBike)); //values in newBike... getPrototypeOf

let myPrototype = Object.getPrototypeOf(newBike);
console.log(myPrototype.ownerName);

secondHandBike.ownerWifeName = 'priya'; //Additional property and value will be added
console.log(newBike.ownerWifeName);


//hasOwnProperty Method

console.log(secondHandBike.hasOwnProperty('year')); //To check the hasOwnproprty values

//doubt


console.log(secondHandBike.hasOwnProperty('model')); //To check the hasOwnproprty values

console.log(newBike.hasOwnProperty('model')); //To check the hasOwnproprty values

//change the Property name
newBike.ownerName = 'Solai Narayanan Moothevi';

console.log(newBike.ownerName);