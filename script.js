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
console.log('~~~~~~~~~ 2 Loops A. The basics~~~~~~~~');

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

for(let h=0; h<10;h++){
    console.log(h);
}
// let h = 0;
// while (h < 10) {
//     console.log(h);
//     h++;
// }

for(let n=10; n<=400;n++){
    console.log(n);
}
let n = 10;
// while (n <= 400) {
//     console.log(n);
//     n++;
// }
for(let m=12;m<4000; m+=2){
    console.log(m);
}
// let m = 12;
// while (m < 4000) {
//     console.log(m);
//     m += 2;
// }

// ============================================================================================
console.log('~~~~~~~~~ 2 Loops B. Get even  ~~~~~~~~');
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "is an even number"
    for (let k = 1;k<=100;k++){
        if(k%2===0){
            console.log(`${k} is even number`);
        }
        console.log(`${k} is odd number`);
    }
//     let k = 1;
// while (k <= 100) {
//     if (k % 2 === 0) {
//         console.log(`${k} is even number`);
//     } else {
//         console.log(`${k} is odd number`);
//     }
//     k++;
// }

// ============================================================================================
console.log('~~~~~~~~~ 2 Loops C. Give me Five ~~~~~~~~');

for (let s = 0; s<=100; s++){
    if(s%5===0 && s !== 0){
        console.log(`I found a ${s}. High five!`);
    } else if(s%3===0){
        console.log(`I found a number. ${s} is a crowd`)
    } else if(s%3===0 && s%5===0 && i !== 0){
        console.log(`I found a ${s}. High five and crowd!`);
    }
}

// let s = 0;
// while (s <= 100) {
//     if (s % 5 === 0 && s !== 0) {
//         console.log(`I found a ${s}. High five!`);
//     } else if (s % 3 === 0 && s % 5 !== 0) {
//         console.log(`I found a number. ${s} is a crowd`);
//     } else if (s % 3 === 0 && s % 5 === 0 && s !== 0) {
//         console.log(`I found a ${s}. High five and crowd!`);
//     }
//     s++;
// }
// ============================================================================================
console.log('~~~~~~~~~ 2 Loops D. Savings account ~~~~~~~~');

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

let bank_account = 0;
for (let l = 1; l<10; l++){
    bank_account += l *2;
}
console.log(bank_account);

// let bank_account = 0;
// let l = 1;
// while (l < 10) {
//     bank_account += l * 2;
//     l++;
// }
// console.log(bank_account);



// ============================================================================================
console.log('~~~~~~~~~ 3B Easy Does It ~~~~~~~~');
// Create an array that contains three quotes and store it in a variable called quotes.
const quotes = [
    "If two wrongs don't make a right, try three. by Laurence J. Peter",
    "I follow three rules: Do the right thing, do the best you can, and always show people you care. by Laurence J. Peter",
    "Better three hours too soon than a minute too late. by William Shakespeare."
]
console.log(quotes);

// ============================================================================================
console.log('~~~~~~~~~ 3C Accessing elements ~~~~~~~~');

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]); // Output: 1
console.log(randomThings[2]); // Output: "Hello"
console.log(randomThings[3]); // Output: true

randomThings[2] = "World";
console.log(randomThings); // 1,10, "World", true


// ============================================================================================
console.log('~~~~~~~~~ 3D Change values ~~~~~~~~');

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]); // "Sardine"
ourClass[4]="Octocat";
ourClass.push("Cloud City");
console.log(ourClass);


// ============================================================================================
console.log('~~~~~~~~~ 3E Mix It Up ~~~~~~~~');
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20];
myArray.push("Aegon" , "Euphoria");
myArray.shift(); 
myArray.unshift("Bob Marley");
myArray.pop();

Array.prototype.reverse(myArray);
myArray.reverse();

console.log(myArray);

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



// ============================================================================================
console.log('~~~~~~~~~ 3H Whats in Your Closet? ~~~~~~~~');

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + "today!");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
let findYellowHat  = kristynsCloset.indexOf('yellow knit hat'); 
console.log(findYellowHat); //5
kristynsCloset.splice(6,0, 'raybans')
console.log(kristynsCloset); 

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log("Thom's shirts are: " + thomsCloset[0]);

// In the same way, access one item from Thom's pants array.
console.log("Thom's pants are: " + thomsCloset[1]);

// Access one item from Thom's accessories array.
console.log("Thom's accessories are: " + thomsCloset[2]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in" + thomsCloset [0][0] + ", " + thomsCloset[1][1] + " and "  + thomsCloset [2][1] + "!");

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1][2]);




  





















