//null is defined as the object

let a;
console.log(a); //get normal values
console.log(typeof a); //get type of the vlaues.
//both will be undefined



//For eg:
let pattern = /xyz/;
let value = ' This is just a test';
let result = value.match(pattern);
console.log(result);


if(result === null) {
    console.log('no match was found');
}