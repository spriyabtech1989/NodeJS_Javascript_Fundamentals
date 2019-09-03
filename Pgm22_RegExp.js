//Regular Expresssion

let pattern = /xyz/;
console.log(pattern);
console.log( typeof pattern);

let value = `This is a more string xyz paragraph !!..`;
console.log(pattern.test(value)); //to check the pattern values whether here or not

//Replace the values 
console.log(value.replace(pattern, 'I love solai narayanan')); //Replaced xyz instead to that i love solai narayanan

//Match the string
console.log(value.match(pattern));

var match = value.match(pattern);
console.log(match.index);
console.log(match.input);






