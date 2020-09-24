// function test(label, body) {
//     if (!body()) {
//         console.log(`failed: ${label}`);
//     }
// }

// test("convert Latin text to uppercase", () => {
//     return "hello".toUpperCase() == "HELLO";
// });

// function promptNumer(question) {
//     let result = Number(prompt(question));
//     if(Number.isNaN(result)) return null;
//     else return result;
// }

// function lastElement(array) {
//     if (array.length == 0) {
//         return {failed: true};
//     } else {
//         return {element: array[array.length - 1]};
//     }
// }

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection('which way?') == 'L') {
        return "a house";
    } else {
        return 'two angry bears';
    }
}

try {
    console.log('You see', look());
} catch (error) {
    console.log('Something went wrong: ' + error);
}