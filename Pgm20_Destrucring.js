//Destructure the object values

let a,b,c,d,e; //structure values declared

let names=['priya','solai narayanan','radha','iyams','sundaram'];

[b,a,c,d,e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log("Below Others!!!!!!!!!!!!!!!!!!!");

let others;
[b, ...others] = names;
console.log(b);
console.log(others); //it can be displayed except values

let year,model;
({ year,model} = {
name: "Tvs",
model: 787,
year: 2018,
value : 1000

});

console.log(year);
console.log(model);
