var counter = (function(){

    let count = 0;
    function print(message) {
        console.log(message + "" + count);
    }

    //return object
    return {
        value : count, //retrun the object

set: function(value) {
    count = value; 
}, //set the count value

get: function() { 
    return count;
},

        increment: function() {
            count+=1;
            print("After incremnt:");

        },
        reset: function() {
            print('Before Reset:');
            count=0;
            print('After Reset');
        },

        decrement: function() {

            print('Total increment:');
            count-=1;
            print('After decrement')
        }

    }
})();

console.log(counter.count)//get the count

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log("*..................*");
counter.decrement();
counter.decrement();
counter.decrement();
console.log("*.........decrement end.........*");
console.log("*.........reset start.........*");
counter.reset();
console.log("*.........reset end.........*");

console.log(counter.value)//get the value
counter.reset();
counter.decrement();

counter.set(10);

console.log(counter.get());

console.log("counter:", counter);

counter.decrement();