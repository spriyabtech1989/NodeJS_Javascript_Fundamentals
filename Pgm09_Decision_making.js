/*Decision making those are, 
1.If conditional statement
2.Switch statement
3.Ternary operators
*/

//If statements

let counter = 3; //Initial value is 3

if (counter == 4 ){ //To check the first level of the condition. its come and check with first condions whether is true or not.. if its counter == 3 only is statement will be excuted but its wrong so going next level
    console.log("Am counter is 3");
}
else if (counter >= 4) { // First condition is wrong that so check the second level. counter values is 3 only but gives the values higher than counter = 3 value
console.log("COunter is grater than or equal to 4");
}
else if (counter <=4) { // above conditions is wrong that so seeing 3rd level. its value lower than 4 so condition will be excuted
    console.log("counter is less than or equal to 4");
}
else {
    console.log("Condition is wrong"); // above all conditions wrong that else part will be excuted
}


//Switch Statement
let hero = "husband"; //Hero is a husband. his responsiblities are will give the trust to wife and don't lie to her, don't cheat to her, A man for a woman A woman for a man

switch( hero){ //variable declared is husband. will check  the all blocks which block is variable block this block will be excuted

    case 'husband': //this block will be excuted and won't give the break word means all block will be excuted.
        console.log("Wifeku or love panura ponnuku durogam panna kudathu");
        console.log("Husbandku pinadi yellamuma wife mattum than irukanumnu asapaduva..vera endha ponnu pathium perumaiya soli avala hurt pana kudathu");
        console.log("sex kand mattum avala use pana kudathu avalukum manasu irukunudratha purujukanum");
        console.log("periods agira endha ponugakitaium ladieskitaum unlimited ah pesa kudathu");
        break; //variable block only excuted other case is exit
    case 'kalakadhal':
        console.log('Aayul thandanai alikanum.wife ku theriyama affair vachurukira naikala');
        console.log('thooku thandai vangi thharanum ipadi irukira ambalaikala');
        break;
    case 'poriki':

    console.log('pombala pillaikala pombalaikala porukama roadla vera outerla engaium pondatiyae kankanda deivamnu irukanum');
    console.log(' pondatiya thavira vera endha thevudyalaium rasika kudathu');
    break;
    default:
        console.log('sec ku sec ku wife ah love pani ava manasu nokama avala santhosama parthukitu ava soluratha kettu life la yeven oruthen muneri varano aven than unmaiyana meesa vacha ambala');
}

//Ternary Operatos
let a = 10, b = 10;
let result= ( a == b) ?  "this is true" : "this is false"; // first is True : second is False
console.log("Result", result);

let c = 10; d = "priya";
let result1 = (c != d) ? 'This is true' : ' This is False'; // Excuted will be based on condition
console.log("Result1", result1);

