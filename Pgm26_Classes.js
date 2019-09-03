//javascript classes syntactic sugar
/*Method
Object
class
Contructor*/


//declaration
class Bike {
    constructor(ownerName,year,model,propertyName) { //constuctor create the class
        this.ownerName = ownerName ;
        this.year = year;
        this.model = model;
        this.propertyName = propertyName;                            //get the constructor property like interface
  }
    print() {
        console.log(`(${this.ownerName}) ${this.year} ${this.model} ${this.propertyName} `); //Interpolation syntax
    }
  }


//create instance of object
let newBike = new Bike('Priya',2018,'12345','Tvsbike');
console.log("!-------------newBIke------!");
newBike.print() //inheritance


//Class Extend interface
class SportsBike extends Bike {
  revEngine() {
    console.log('this is revengine goes the' + this.ownerName);
  }
}
let mySportsBike = new SportsBike('Radha',2019,'12546','scooty');
console.log("!-------------mySportsBike------!");
mySportsBike.print();

console.log("!-------------revEngine()------!");
mySportsBike.revEngine();

//doubt