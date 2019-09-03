let name = 'priya';

console.log(`Hai ${name}`);

let sentennce = `Priya is very good girl. she has more good qulaities
                 she is a lucky girl. she is looking very cute and pretty.
                 her voice is very sweet. she won't lie to anyone. she is follow the concept 
                 Oruvanuku oruthi. Oruthiku Oruvan. she is a very possive girl.
                 she s born its god given the gifts to mom and solai.. she s very talent girl
                 she is very bold, she is sensitive for loved only.`

console.log(sentennce) ;                

function getReasonCount() {
    return 2;
}

let fun=getReasonCount();

console.log(fun);

let interpolation = `Give Me ${(getReasonCount() == 2)?'one good reason':'one few reason'} to try this` ;
console.log(interpolation);
