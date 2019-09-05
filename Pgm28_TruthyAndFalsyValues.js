console.log('<!----------below values everything falsy values----------!!!');

if(false) {} else { console.log('false is falsy'); }
if(null) {} else { console.log('null is falsy'); }
if(0) {} else { console.log('0 is falsy'); }
if(NaN) {} else { console.log('NaN is falsy'); }
if('') {} else { console.log('an empty sting with single quotes is falsy'); }
if("") {} else { console.log('an empty sting with double quotes is falsy'); }

console.log('<!----------below values everything Truthy values----------!!!');

if(true) { console.log('True is Truthy'); }
if({}) { console.log('An empty object is Truthy'); }
if([]) { console.log('An empty Array is Truthy'); }


if ('Priya') { console.log(' a nonempty string is Truthy');}
if (new RegExp()) {  console.log(' a new instance of an object is Truthy')}


if(10) { console.log(' Positive integer is Truthy'); }
if(-10) {  console.log('negative integer is Truthy'); }
if(10.3) {  console.log(' Positive float is Truthy'); }
if(-0.10) {  console.log(' negative integer is Truthy'); }
if(Infinity) {  console.log(' Positive infinity is Truthy');  }
if(-Infinity) {  console.log(' negative infinity is Truthy');  }


