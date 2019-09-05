let first = "First paragraph!!";
let second = 'First paragraph!';
let third = '123,42347,293849,28';

//you can even clal methods on string literals
console.log('Priya i love you so mucj d nee en uyiru d ipadi sona enakunu yarumae illa'.toUpperCase());

let mySplit = third.split(',');
console.log(mySplit);


let mySlice = first.slice(1,5);
console.log(mySlice);

let mySubstr = first.substr(2,4);
console.log(mySubstr);


let myEndswith = second.endsWith('try....');
console.log(myEndswith);

let myStartswith = second.startsWith('Do');
console.log(myStartswith);

let myInclude = second.includes('there');
console.log(myInclude);

let myRepeat = 'ha!' . repeat(3);
console.log(myRepeat);

let myTrim = '                 priyaaaaaa             ';
console.log(myTrim.length);
console.log(myTrim.trim().length);
