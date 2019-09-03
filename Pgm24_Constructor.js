//Constructor

function Car(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('TVS', ' 123456', 2018); //new keyword is a any function
console.log(myCar);


//Object
function myFunction() {
    console.log('I am a Simple function');
}

let newMyfunction = new myFunction(); //Object
console.log(typeof newMyfunction);

