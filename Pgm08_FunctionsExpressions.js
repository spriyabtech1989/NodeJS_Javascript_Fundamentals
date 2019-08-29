setTimeout(

    function(){
        console.log("Hi Priya welcome after 3sec")
    }, 3000);

//Its a normal Functions Exppressions using SetTimeout(function(){},1000);


let counter = 0; // initlize is zero
function timeOut() {
  setTimeout(
      function(){
          console.log("Am counter timeOut", counter++); //Add counter values ony by one
          timeOut();//Excute the values here
      }, 4000 );
  
}

timeOut();

//Counter values will be increased
//ctrl+c will be stop the Execution

(function(){
    console.log("hi priya, Immediatly Invoked function Expressions()");
})();




