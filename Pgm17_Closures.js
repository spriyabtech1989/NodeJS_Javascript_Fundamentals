//3 functions return in the same functions


function sayHello(name){ //parameter value will pass here
    return function() {
    console.log("Your Name is:"+ name);
    }
}

//1
let functionFirst = sayHello('Priya');

//2

let functionSecond = sayHello('Solai Narayanan');

//3

let functionThird = sayHello('BS');

//Excute below

functionFirst();
functionSecond();
functionThird();
