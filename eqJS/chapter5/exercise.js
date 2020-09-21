// Exercise(1)  FLATTENING


// function flatten(arrays) {
//     let array1 =[]
//     let array2 = [];
//     let sum;
//     for (let items of arrays) {     // goes through every item in th array
//         if(Array.isArray(items)) {  // checks if the item is an array
//             array2.push(items);     //add the checked array into a new array
//             sum = array2.reduce((b => b));  //this reduce this array of array into a single array
//         }else {
//             array1.push(items)  //this contain other items in the array that aren't array themself
//         }
//     }

//     return array1.concat(sum);
// }


// Exercise(3)  EVERYTHING

function every(array, predicate) {
    // let count = 0
    let array2 = []
    let array3 = []
    for (let items of array) {
        if(predicate) {
            array2.push(items)
        }
        else {
            array3.push(items);
        }
    }
    return array2;
}
