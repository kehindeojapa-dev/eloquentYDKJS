/* ( 1 )
Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

// let minimum = function(a,b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

   

/*  ( 2 )
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
 •Zero is even.
 • One is odd.
 • For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// function isEven(num) {
//     if (num < 0) {
//         return null;
//     }
//     else if (num == 0) { 
//         return true; 
//     } else if (num == 1) {
//         return false;
//     }
//     else {
//         return isEven(num-2)
//     }
// }


/*  ( 3 )
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last  one to be found at position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/


// function countBs(string) {
//     let stringLength = string.length;
//     let count = 0;
//     for (let i = 0; i < stringLength; i++) {
//         if (string[i] == "B") {
//             count++;
//         }else {
//             count = count
//         }
//     }
//     console.log(count);
// }

function countChar(string, character) {
    let stringLength = string.length;
    let count = 0;
    for (let i = 0; i < stringLength; i++) {
        if (string[i] == character) {
            count++;
        } else {
            count = count;
        }
    }
    console.log(count);
}

// query
// Making it Recursive
// let count = 1;
// let i = 0;
// function countBs(string) {
//     let count = 0;
//     if (string.length == 1 && string[i] == "B") {
//         count++;
//         return count;
//     }
//     else if(string[i] != "B") {
//         count = count;
//     }
//     else {
//         i++;
//         string = string.slice(0,string.length -1)
//         return 0 + countBs(string);
//     }
// }
// let count = 0;
// let i = 0;
// function backward(string) {
//     let i = string.length-1;
//     if(string.length == 0) {
//         return 0;
//     }
//     else {
//         if (string[i] == "B") {
//             count+=1;
//             i--;
//             return count + backward(string.slice(0,string.length-1));
//         } else {
//             i--;
//             return backward(string.slice(0,string.length-1));
//         }        
//     }
// }



