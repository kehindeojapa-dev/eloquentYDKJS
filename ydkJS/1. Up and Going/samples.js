//      IIFE

// var a = 10;
// (function IIFE() {
//     // var a = 20;
//     var b = 30;
//     console.log(a);
//     console.log(a + b);
// })();
// console.log(a);
// console.log(a + b);


// var x = (function IIFE() {
//     return "Hello World"
// })();

// x;

// console.log(`am calling out ${x}`)


//      CLOSURE

// function makeAdder(x) {
//     // parameter 'x' is an inner variable

//     // inner function 'add()' uses 'x', so
//     // it has a "closure" over it
//     function add(y) {
//         return y - x;
//     };
//     return add;
// }

// var plusOne = makeAdder(10);

// // console.log(plusOne(3));
// console.log(plusOne( 3 ));
function surname(surname) {
    function firstname(f_name) {
        return f_name + surname;
    }
    return firstname;
}

var fullname = surname(" Ojapa");

console.dir(fullname);