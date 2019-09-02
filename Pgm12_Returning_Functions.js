//Retruning the function from the functions

function firstOne(){
    return 'First One';
    
}


console.log(firstOne()); // Retruning the functions

/*stored the function to variable*/

function varOne(){
    return 'varOne';
    
}

let value = varOne(); //stored the function in one variable
console.log(value);
console.log(varOne());

//secondOne Function

function secondOne(){      //first function block
    return function() {     //second function block
        console.log('Two');
    }
}

let myFunction = secondOne(); //stored one variable
myFunction(); //invoke the function

//Third Function
function thirdOne(){
    return function(){
        return 'Three';
    }
}

console.log(thirdOne()()); // invoke the 2 functions
