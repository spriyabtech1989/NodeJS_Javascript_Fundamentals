let pattern = /xyz/;
let value = 'This is xyz a test';
console.log(value.replace(pattern, 'just replaced'));

//Object method
let myString = new String('Bala subramaniyan');
console.log(myString);
console.log(myString.toString());
console.log(myString.toUpperCase());

/*string()
Number()
boolean()
object()
function()
symbol()
*/

/*
Array()
RegExp()
*/


/*Date()
Error()
*/

let myPrimitive = "This is crazy";
myPrimitive = myPrimitive.toLowerCase();
console.log(myPrimitive);
console.log( typeof myPrimitive);

//Number
let myNumber = new Number(7);
console.log(typeof myNumber);
let myPrimitive1 = myNumber.valueOf(); // wriiten object in ti 
console.log(typeof myPrimitive1);