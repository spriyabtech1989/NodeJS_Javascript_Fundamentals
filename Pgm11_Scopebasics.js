
/*Two scope is there 1.global scope
2.local scope*/

let a ="priya"; //Outside

function localText() {
console.log("localscope:",a);

}

localText();
localText();
localText();


/*Global scope*/
function globalText(){
    let a="radha";
    let b="priyabtech";
    if(a!==''){
        console.log("a", a); //inside
        console.log("inside", b); 
        let c = 'solai is myhusband';
    }

}
//console.log("c",c);
globalText();