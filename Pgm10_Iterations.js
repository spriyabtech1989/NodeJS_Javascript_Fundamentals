/*Iterations are 
1.For Loop
2.While loop

*/

for(let i =0 ; i<=10; i++){
    console.log("Solai narayanan", i); //Excuted will be 0 to 10
}

//Array using For Loop

let a = [5, 10 , 15, 20]; 
for (j=0; j< a.length; j++) { //length using for loops
    console.log('solai priya', j);
}

let b = [5, 10 , 15, 20]; 
for (j=0; j< a.length; j++) {
    const c= b[j]; //stored the array values
    console.log(c);
}


//while loop
let x=1;
while (x <= 10) {
    console.log( "stament excute", x++); //excute taking from 1 to 10
    if (x == 5) break; //5 is a break
}

