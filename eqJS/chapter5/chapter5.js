//      HIGHER-ORDER FUNCTIONS


    //  Creating Abstraction
// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i)
//     }
// }

// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`)
// });
// console.log(labels)


//  HOF

// greaterThan Function
// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10());


// noisy function(function that changes other function)
// function noisy(f) {
//     return (...args) => {
//         console.log("calling with", args);
//         let result = f(...args);
//         console.log("Called with", args, ",returned", result)
//         return result;
//     }
// }


// unless function(functions can provide new types of control flow)
// need the repeat function created above to work
// function unless(test,then) {
//     if(!test) then();
// }
// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, 'is even'); 
//     });
// });

//  forEach(forloop as a higher-order function)
// ["A", "B"].forEach(i => console.log(i));


//  FILTERING ARRAYS

array1 = [1,2,3,4,5,6,7,8]
// function filter(array1,test) {
//     let array2 = [];
//     for (let element of array1) {
//         if (element % 2 == 0) {
//             array2.push(element);
//         }
//     }
//     return array2;
// }

// array1.filter(i => {
//     let array2 = []
//     if (i % 2 == 0) {
//         array2.push(i);
//     }
// });
    // or
// array.filter(i => i % 2 == 0);


//  ARRAY TRANSFORM WITH MAP

// function map(array1) {
//     let mapped =[];
//     for (let element of array1) {
//         mapped.push(10 + element);
//     }
//     return mapped;
// }
    // or
// array.map(i => 10 + i);


// SUMMARIZING ARRAY WITH REDUCE
// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//         current = combine(current,element);
//     }
//     return current;
// }

// console.log(reduce([1,2,3,4], (a,b) => a * b, 1));

// // or

// console.log([1,2,3,4].reduce((a,b) => a*b));


// CHECKING WITH SOME

// array1.some(i => i % 2 == 0); // returns true since some elements in the array is even


//  Strings and Character Codes
// let horseShoe = "@#";
// console.log(horseShoe.length);
// console.log(horseShoe.charCodeAt(0));
// console.log(horseShoe.codePointAt(0));


// RECOGNIZING TEXT

// function countBy(items, groupName) {
//     let counts = [];
//     for (let item of items) {
//         let name = groupName(item);
//         let known = counts.findIndex(c => c.name == name);
//         if (known == -1) {
//             counts.push({
//                 name,
//                 count: 1
//             });
//         } else {
//             counts[known].count++;
//         }
//     }
//     return counts;
// }

// console.log(countBy([1,2,3,4,5], n => n >2));


// array2 = [2,4,6,8];
// console.log(array2.findIndex(i => i > 5));

// array3 = array1.concat(array2);
// console.log(array3);