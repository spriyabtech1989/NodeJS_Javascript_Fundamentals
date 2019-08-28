//Single line comments
/*Multiple line comments 
Data types are 
1.number
2.strings
3.boolean
4.undefined
5.null
6.object
7.Arrays
8.function
*/

//Number:

let x = 10;
console.log("Type Of Datatypes:", typeof x); //Number used only decimal values [0-9]
// Binary [0 and 1], octal values [0-7], Decimal values [0-9], HexadecimalValues [0-9, a,b,c,d,e,f]
//Fixed values are called also Literal values

let fullName = 'priya sundaram'; //Strings using by ' quotes and "" quotes
console.log("Type Of Datatypes:", typeof fullName); //Stings

let showLoading = false; // True or false only used that
console.log("Type of Datatypes:", typeof showLoading);

let a;
console.log("Type of Datatypes:", typeof a);

let age = null;
console.log("Type of Datatypes:", typeof age);

let employeeDetails = { empName: "Priya", empAge: "12", empSalary: 50000, empDesignation: "senior software engineer"};

console.log("Type of Datatypes:", typeof employeeDetails);
console.log("employeeDetails", employeeDetails.empAge,employeeDetails.empDesignation,employeeDetails.empName,employeeDetails.empSalary);

let productDetails = ["computer" , "laptop", "tablet", "iphone", "mobile"];
console.log("productDetails", productDetails[0],productDetails[1],productDetails[2],productDetails[3],productDetails[4]);
console.log("Type of productDetails:", typeof productDetails);

console.log(typeof function myFunction() {

});







