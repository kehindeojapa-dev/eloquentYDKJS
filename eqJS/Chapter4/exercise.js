//  Exercise(1):  THE SUM OF A RANGE  

// let array1=[]

/*  SOLUTION WITHOUT STEP
function range(start,end) {
    for (let i = start; i <=end; i++) {
        if (start <= end){
            array1.push(start);
            start++;
        }
    }
    return array1
}
*/

//  SOLUTION WITH STEP
/*
function range(start, end, step=1) {
    if (step > 0) {
        for (let i = start; i <= end; i+=step) {

            array1.push(i);
            // start+=2;
        }
        return array1
    } else {
        for (let i = start; i >= end; i+=(step)) {
            array1.push(i);
        }
        return array1;
    }

}

//  SUM FUNCTION FOR THE RANGE
function sum (array1){
    let num = 0
    for (let i = 0; i < array1.length; i++) {
        num = num + array1[i]
    }
    return num;
}
*/



//  Exercise(2):  REVERSING AN ARRAY

/*  reverseArray solution
function reverseArray(array1) {
    let array2 = [];
    let arrayLength = array1.length;
    for (let i = 0; i < arrayLength; i++) {
       array2.unshift(array1.shift());
    //    array1 = array1.shift();
    }
    
    return array2;
}
*/
/*  reverseArrayInPlace solution
function reverseArrayInPlace(array1) {
    let array2 =[];
    let arrayLength = array1.length;
    for (let i = 0; i < arrayLength)
}
*/