//          FUNCTIONS


//   Defining a Function

// const square = function(x) {
//     return x * x;
// }

// console.log(square(0.1));


//  Functions with multiple parameters/no parameter

// const sayHello = function() {
//     console.log("Hello");
// }
// sayHello();


// "use strict";
// let myName = prompt("What is your name");
// const sayName = function(name) {
//     alert("Your name is "+name);
// }
// sayName(myName);


// let powerbase = Number(prompt("Enter base power"));
// let powerExponent = Number(prompt("enter power exponent"));
// const power = function(base, exponent) {
//     let result = 1;
//     for(let counter = 0; counter < exponent; counter++) {
//         result = result * base;
//     }
//     return result;
// }
// console.log(power(powerbase, powerExponent));


//  Scopes

// let x = 10;
// if(true) {
//     let y = 30;
//     var z = 20;
//     console.log(x + y + z);
// }
// console.log (x+z);


// const hummus = function (factor) {
//     const ingredient = function (amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//         }
//         unit += " of"
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// };


//  Function as a Value

// let sayHello = function () {
//     console.log("Helloooo");
// }
// if (true) {
//     let hi = sayHello();
//     console.log(hi);
//     // sayHello = "Hi"
//     // console.log(sayHello);
//     let greet = sayHello();
//     console.log(greet);
// }


//  Declaration Notation

// function square(x) {     // Function Delaration
//     return x * x;
// }
    
//  Arrow function
    // const square = (x) => {return x * x;};
    // const square = x => x * x;
    // const horn = () => {console.log ("Toot");};


//  Optional Arguments
    // function minus(a,b) {
    //     if (b === undefined) {
    //         return -a;
    //     }
    //     else {
    //         return a-b;
    //     }
    // }

    // console.log(minus(100));

//  CLOSURE
// function multiplier(factor) {
//     return number => number + factor;
// }
// let twice = multiplier(5); 
// console.log(twice(2)); 

// function familyName(name,surname) {
//     return middlename => "hi " + name + middlename + surname; 
// }

// let middlename1 = familyName("kehinde"," ojapa");

// console.log(middlename1('daniel'));


//  RECURSION
// function power(base,exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent -1);
//     }
// }

// console.log(power(2,3));

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1,"1");
// }

// console.log(findSolution(29));
