let familyMembers = ['Sundaram','Iyams','radha','priya'];
let sefishNames = ['senthil','vanitha'];

let lostMyYear = [2015, 2016, 2017, 2018, 2019];
let fibonacci = [1, 1, 2, 3, 5, 8, 12, 20, 32, 52 ];

var combine = lostMyYear.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));

//push, pop

console.log(lostMyYear.shift());
console.log(lostMyYear); //First in First Out

lostMyYear.unshift(2020,2021);
console.log(lostMyYear); //First In 

console.log(familyMembers);
console.log(familyMembers.reverse());
console.log(familyMembers.sort());


console.log(sefishNames.indexOf('solai narayanan moothevi'));


console.log(combine);
console.log(combine.lastIndexOf('1'));


//map

var filtered = combine.filter((x) => {
if(x <=15) return x;
});

console.log(filtered);

familyMembers.forEach((name) => console.log(` Hi ${name}`));

console.log(filtered.every((num) => num < 10));
console.log(filtered.every((num) => num < 16));

console.log(fibonacci.some((num) => num > 50 ));
console.log(fibonacci.some((num) => num > 100 ));

