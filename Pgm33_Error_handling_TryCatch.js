let a = 7* undefined/ "priya";
console.log(a);
/*
function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('if the previous line of throws an exception you will never see this.');
}

beforeTryCatch();*/

function afterTryCatch() {
    
try {
    let obj = undefined;
    console.log(obj.b);
    console.log('if the previous line of throws an exception you will never see this.');

} catch(error) {
    console.log('I caught an exception:' + error.message);

} finally {
    console.log('This will happen no matter what');
}

console.log('My application is still running');
  
}

afterTryCatch();


function performCalculation (obj) {
    if(!obj.hasOwnProperty('b')) {
        throw new Error('Objects missing property');
    }
    //continue with calculation w/ obj.b
    return 6;
    
}

function performHigherLevelOperation() {
    let obj = { };
    let value = 0;
    try {
        value = performCalculation(obj);
    } catch (error) {
        console.log(error.message);
    }
    if(value == 0) {
//contingency
//retry logic
    }

}

performHigherLevelOperation();


//doubt that page
