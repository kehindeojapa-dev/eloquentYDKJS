
//  Arrays

// let sequence = [1,2,3,4,5];

// console.log(sequence);

// sequence.push(6,7,8,9);
// sequence.pop();
// console.log(sequence);


//  Ojects

// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "running"]
// }

// let descriptions = {
//     work: "went to work",
//     "touched tree": "Touched a tree",
//     1: "one"
// }

// let anObject = {
//     left: 1,
//     right: 2
// }

// delete anObject.left;//delete left property in the object
// 'left' in anObject; //checks if left property exist in anOBject

// Object.keys(descriptions);// give properties existing in an object in an array format.

// Object Assign
// let objectA = {a: 1, b: 2}
// let objectB = {c: 3, d: 4}

// let objectC = Object.assign(objectA);
// console.log(objectC);

// Arrays of Objects
// let journal = [
//     {
//         events: ["work", "pizza","running"],
//         squirrel: false
//     },
//     {
//         events: ["weekend", "beer"],
//         squirrel: true
//     }
// ];
// let journal = []
// function addEntry(events, squirrel){
//     journal.push({events,squirrel})
// }

// addEntry(["work", "pizza", "running"], false);

// Correlation

// function phi(table) {
//     return ((table[3] * table[0])-(table[2] * table[1])) / Math.sqrt((table[2] +table[3])*
//     (table[0] + table[1]) *
//     (table[1] + table[3]) *
//     (table[0] + table[2])
//     );
// }

// console.log(phi([76,9,4,1]));

// todo = ["Wash plate", "sweep floor", "code"]
// for (let todos of todo) {
//     todos = todos + " done";
//     console.log(todos)
// }

    // ArraySample
// let todoList = [];
// function remember(task) {
//     todoList.push(task);
// }
// function getTask() {
//     return todoList.shift();
// }
// function rememberUrgently(task) {
//     return todoList.unshift(task);
// }

    // ArrayPractices
// let attendance = [];
// function present(name) {
//     attendance.push(name);
// }
// function debtors() {
//     attendance.pop();
// }
// function scholars(name) {
//     attendance.unshift(name);
// }



//      Strings Properties

// console.log("coconuts".slice
// ());// Slice
// console.log("coconuts".indexOf('on')); //indexOF

// console.log("   okay \n  ".trim()); //trim

// console.log(String(100600).padStart(15, '-')); //padStart

// Split / Join  
// let sentence = "Secretary birds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words)
// console.log(words.join(".  "));

// console.log('melissa '.repeat(5)); //repeat

//  REST Parameters

// function max(...numbers) {
//     let result = -Infinity;
//     for (let number of numbers) {
//         if (number > result) {
//             result = number;
//         }
//     }
//     return result;
// }


//  Destructuring
// let {age} = {
//     name: 'Faraji',
//     age: 23
// }
// // let {named} = name
// console.log(age)

// let [array1] = ["3", "2"];

// console.log(array1);

//      JSON
// let string = JSON.stringify (
//     {
//         squirrel: false,
//         events: ["weekend", "beer"]
//     }
// )

// console.log(string);
// let norm = JSON.parse(string).;
// console.log(norm);

// let anObect = {
//     shout: function shoutHigh(){
//         console.log("Most High")
//     }
// }