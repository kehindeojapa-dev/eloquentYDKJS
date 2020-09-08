/*
    EXERCISE1:  LOOPING A TRIANGLE
*/
        // solution1
// let hash = "#######";
// for (let i=hash.length; i >= 0; i--) {
//     console.log(hash.substring(i))
//     // break;
// }

        // solution2
// let pyramid = Number(prompt("enter levels for pyramid; "));
// let hash = "#";
// for (let i = 0; i < pyramid; i++) {
//     console.log(hash);
//     hash = hash + "#"
// }

        // solution3
// let hash = "#######";
// let hashitem = "#";
// for (let i = 0; i < hash.length; i++) {
//     console.log(hashitem);
//     hashitem = hashitem + "#"
// }


/*
    EXERCISE2:  FIZZBUZZ
*/
 
// for (let i = 1; i <=100; i++) {
//     // console.log(i)
    
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("fizzbuzz " +i)
//     }
//     else if (i % 5 ==0) {
//         console.log("buzz " +i )
//     }
//     else if (i % 3 == 0) {
//         console.log("fizz " +i)
//     }
//     else {
//         console.log(i);
//     }
// }


/*
    EXERCISE3:  CHESSBOARD
*/


// let blackspot = "#"
// let whitespot = " ";
// let size = Number(prompt("Enter width of grid"));
// let height = Number(prompt("Enter height of grid"));

// for (let i = 0; i < height; i++) {      // create a vertical matrix
//     let line = '';          //Spot container(BLACK/WHITE)
//     for (let j = 0; j < size; j++ ) {      //create a horizontal matrix
//         if (i % 2) {        //  look for the even row in the matrix
//             if (j % 2) {    //  looks for the even spot in the even row 
//                 line = line + blackspot;    //  even spot
//             }else {
//                 line = line + whitespot;    //  odd spot
//             }
//         }else{
//             if (j % 2) {        //  look for the odd row in the matrix
//                 line = line + whitespot;    //  even spot
//             }else {
//                 line = line + blackspot;    //  odd spot
//             }
//         }
//     }
//     console.log(line);
// }

