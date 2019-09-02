//basic this keyword using by object

var carFiat = {
    modelNo: 1234,
    companyName: 'priyaCarAgency',
    carDetail: function () {
        console.log( this.modelNo + '' + this.companyName);
    }
}
carFiat.carDetail();

//Global Object

//first

function first(){
    return this;
}

first();
console.log(first() === global); //global object

//use strict

//second
function second() {
    'use strict';
    return this;
}

console.log(second() === global); //false
console.log(second() === undefined); //true 

//doubt

//value is set on the global object
let myobject = { value : 'my obj'};
global.value = 'Global object';

console.log(global.value);
console.log(myobject.value);

//third
function third() {
    return this.value;

}

console.log(third()); //return the global values

function fourth(name) {
    return this.value + '' + name;

}

//Using call() Menthod
console.log(fourth.call(myobject, 'Priya')); //first argument to call

//using Apply Method
console.log(fourth.apply(myobject, ['Radha'])); // apply and this will bound on it



function fifth() {
    console.log(this.firstName + ' ' + this.lastName); // create 2 objects
}

let customer1 = {
    firstName: 'priya',
    lastName: 'solai',
    age: 32,
    print: fifth


}