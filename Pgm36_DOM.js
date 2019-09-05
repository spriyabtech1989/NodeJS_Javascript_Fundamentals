(function(){
    
    function ClickHandler1(message1) {
    console.log('welocome ..............' + message1);
    }
    //get the reference
    let myButton1 = document.getElementById('myButton1');
    myButton1.addEventListener('click',
    
    function(){
        ClickHandler1('HI my life')
    });

})();