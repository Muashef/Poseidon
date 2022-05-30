// Create an array that will contain the name of your team members starting with your team lead's name and that of your team members. Then console.log your name based on the position it is in the array

let poseidon =['mubarak', 'goodness','divine', 'clinton', 'sherif', 'dijah', 'jimoh'];

console.log(poseidon[4]);


// QUESTION 3
let bio = {
    firstName: "Muhammed",
    lastName : "Sherif",
    bestMovie: "Power",
    bestFood : "Salad",
    complexion :"black",
    birthMonth : "june",
    state : "lagos",
    groupName : "poseidon",
}

console.log(bio.bestMovie);


// QUESTION 4
let noun = "dog";
let verb = "love";
let adjective = "huge";

const firstSentence = ("I bought" + " a " + adjective + " " + noun);

const secondSentence= "I " + verb + " " + adjective +" "+ noun +'.';

const thirdSentence = 'I ' + verb + ' ' + 'to ' + 'play ' + 'with ' + noun + '.';

const fourthSentence = 'My ' + noun + ' ' + 'is ' + 'very ' + adjective + '.';

const fifthSentence = 'Gosh! ' + 'it\'s ' + 'hard ' + 'to ' + 'form ' + 'a ' + 'sentence ' + 'with ' + adjective + ' ' + 'and ' + verb + '.';

console.log(firstSentence)
console.log(secondSentence)
console.log(thirdSentence)
console.log(fourthSentence)
console.log(fifthSentence);

// QUESTION 5

function remainder(a,b){
    let modulo = a%b;
    console.log(modulo);
}
remainder(11,3);

// QUESTION 6
const quadratic = (a, b, c) => {
    const first = Math.pow(b, 2);
    const second = 4 * a * c;
    const third = first - second;
    const fourth = Math.sqrt(third);
    const fifth = 2 * a;
    const sixth = -b + fourth;
    const seventh = sixth / fifth;
    const eighth = -b - fourth;
    const ninth = eighth / fifth;
    console.log(seventh);
    console.log(ninth);
  }
  quadratic(4, -11, -21);

// QUESTION 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb ="ran";
const myAdverb = "quickly";

const wordBlanks ='The ' + myAdjective + ' ' + myNoun +' '+ myVerb + ' ' + myAdverb + '.';

console.log(wordBlanks);

// QUESTION 8
function area(radius){
    let pi = 3.142;
    let radSquare =(radius*radius);
    console.log(pi*radSquare);
}
area(9);

// QUESTION 9
function si(p,r,t){
    let multiply = p * r * t;
    console.log(multiply/100);
}
si(8200,17.5,2.6);

// QUESTION 10
console.log(10 % 4);

// QUESTION 11

function meritBmi(mass, height) {
    const square = height * height;
    console.log(mass / square);
  }
  function nutjobBmi(mass, height) {
    const square = height * height;
    console.log(mass / square);
  }
  const meritHigherBmi = (meritBmi, nutjobBmi) => {
    if(meritBmi > nutjobBmi) {
    return true;
  } else {
    return false;
  }
  }
  
  meritBmi(95, 1.88);
  nutjobBmi(85, 1.76);

 