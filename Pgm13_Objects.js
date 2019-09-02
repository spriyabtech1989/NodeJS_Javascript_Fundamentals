//Object desfined as the real time values, Properities and methods. 


let car = {
    modelNo: '123456',
    name: 'indigo',
    year: 2019
}

console.log("carName:",car.name);

let bike = {
    modelNo: '787',
    name: 'tvs',
    getPrice: function() {
        return  350000;
        }
}


console.log("BikeRate", bike.getPrice());//Return the values;


let mamaBike = {
    modelNo: '787',
    name: 'tvs',
    getPrice: function() {
        return  350000;
        },
    getDescription: function() {
        console.log(this.modelNo + '' + this.name);
    }
}


mamaBike.getDescription();

console.log(mamaBike.getDescription()); //Undefined

console.log("SolaiBikeName",mamaBike['name']);
console.log("SolaiBikemodelNo",mamaBike['modelNo']); //get the single variable only


var flight = {}; //Empty objects
flight.name = 'solai flight'; //declare the object variable and then values
console.log("Fligh name will add in flight{}", flight.name);

var a = {

  myProperty : {
      b : "HI priya",
      c : "Hi Solai"
  }  
}

console.log("nested objects",a.myProperty.b);
console.log("nested objects",a.myProperty.c);


// var alone = {

//     whoisAlone: [
//         {girl: 'priya'},
//         {lover: 'solai'},
//         {mom: 'no'}

//     ]
// };

// alone.whoisAlone.girl;

var bikeMore = {
    contact: [
    {name: 'TVS', bikeOwner: 'Solai', bikeModelno: 123},
    {name: 'TVS1', bikeOwner: 'Solai1', bikeModelno1: 12231},
    {name: 'TVS2', bikeOwner: 'Solai2', bikeModelno2: 12232}
    ]
};

//doubt

