var counter = (function(){

    let count = 0;
    function print(message) {
        console.log(`${message} => ${count}`);
    }
    function getCount() {
        return count;
    }

    function setCount(value)  {
        count = value;
    }

    function incrementCount() {
        count+=1;
        print("After incremnt:");

    }
    function resetCount() {
        print('Before Reset:');
        count=0;
        print('After Reset');
    }

    function decrementCount() {

        print('Total increment:');
        count-=1;
        print('After decrement')
    }


    //return object
    return {
      set: setCount,
      get: getCount,
      increment: incrementCount,
      decrement: decrementCount,
      reset: resetCount
    }
})();

console.log(counter.count)//get the count
console.log(counter.get());
counter.set(7);
console.log(counter.get());

//Reveals the public functions
//Clear presentation
