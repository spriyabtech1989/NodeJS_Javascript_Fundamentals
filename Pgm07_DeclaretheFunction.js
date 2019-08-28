//1.basic Function


function myFunction() {
    console.log("hai");
    console.log("Priya");
    console.log("..........");
}

myFunction(); //Function invoke () the function name

//Function is defined as the block of code


//2. Function Stored the variable
let varFunction = myFunction;

console.log("varFunction",varFunction);
varFunction();
console.log("1..........");
varFunction();
console.log("2.........");
varFunction();


//3.Paramenter value and Argument pass through function

function myArgumentFunction (name) { //Arugument value is name.
    console.log("hai");
    console.log("Your passing name is " +name+ " welcome"); //concat the arugument value
    console.log("..........");
}

myArgumentFunction("priya");
myArgumentFunction("radha");
myArgumentFunction("bala");

//4.Return Function
function retFunction(number) {
    let result = number * 10;
    return result;

}

retFunction(10);
let retVar=retFunction(10);
console.log("retFunction:",retVar );



