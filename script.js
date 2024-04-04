console.log('~~~~~~~~~ 1A Variables~~~~~~~~');

const myName = "Olena";
let favoriteLanguage = "Python";
let newFavoriteLanguage = "JavaScript";
newFavoriteLanguage = favoriteLanguage;
console.log(`My name is ${myName} and my favorite lanquage is ${newFavoriteLanguage}` ); 

// ============================================================================================
console.log('~~~~~~~~~ 1b Strings~~~~~~~~');
let firstVariable;
let secondVariable;

firstVariable ="Hello World";
firstVariable = " 12 34 56 78";
secondVariable = firstVariable;
secondVariable = "ABC DEF GHI";
console.log(firstVariable);

const yourName = "Olena";
console.log(`Hello, my name is ${yourName}`);

// ============================================================================================
console.log('~~~~~~~~~ 1c Booleans~~~~~~~~');

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e ==='Kevin');
console.log(a != b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// ============================================================================================
console.log('~~~~~~~~~ 1d The farm~~~~~~~~');

let animal = 'Cat';
console.log("Cat says meow meow MEEOOOW");
    if (animal !== "Cat"){
        console.log("Hey! You're not a cat.");
    } else {
        console.log("Hey Cat!");
    }

// ============================================================================================
console.log('~~~~~~~~~ 1d Drivers Ed ~~~~~~~~');

let age = 27;
    if ( age >= 16){
        console.log("Here are the keys!");
    } else {
        console.log("Sorry, you're too young.");
    }

    // ============================================================================================
console.log('~~~~~~~~~ 3F Biggie Smalls ~~~~~~~~');

let num = 6;
    if(num <100){
        console.log("Little number, smaller then 100." );
    } else {
        console.log(`${num} is bigger the 100.`);
    }

    // ============================================================================================
console.log('~~~~~~~~~ 3G Monkey in the Middle ~~~~~~~~');
    if (num <5 ){
        console.log(`${num} is smaller then 5` );
    } else if (num >10){
        console.log(`${num} is bigger then 10` );
    } else {
        console.log("Monkey");
    }






