//  REGULAR EXPRESSIONS

let re1 = new RegExp('abc');
let re2 = /abc/;

let eighteenPlus = /eighteen\+/

// Testing for matches

// console.log(re2.test('abxabcf'));
// console.log(re2.test('abxabf'));

// Set of Characters
// console.log(/[0123456789]/ .test('in 1992'));
// or
// console.log(/[0-9]/.test('in 1992'));


// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("01-20-2004 30:34"));
// console.log(dateTime.test('01-01-2005 91:10'));


// let dateTime2 = /[\D]/;
// console.log(dateTime2.test('11'));

// INVERT set of characters
// let notBinary = /[^01]/;
// console.log(notBinary.test('0111010100010')); //false
// console.log(notBinary.test('0111222200010')); //true



// Repeating Parts of a Pattern

// let digit = /'\d+'/;
// console.log(digit.test("'1'"));  //true
// console.log(digit.test("'1f'"));  //false

// let digit2 = /'\d*'/;
// console.log(digit2.test("''"));  //true
// console.log(digit2.test("'123'"));  //true
// console.log(digit2.test("'f'"));  //false

// let you = /your?/;
// console.log(you.test("your")) //true
// console.log(you.test("youse")) //

//  precise repititon of pattern
// let dateTime3 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime3.test('1-21-2002 15:12'));


//  Grouping Sub-Expressions

// let cartoonCrying = /boo+(hoo+)+/i;
// console.log(cartoonCrying.test('Boohoo'));


//  Matches and Groups
// let match = /\d+/.exec('what is 55 plus 45');
// console.log(match); //55
// console.log(match.index);   //8

// console.log("hundred one 100".match(/\d+/)); //100

// let quotedText = /'([^']*)'/
// console.log(quotedText.exec("she said 'hello'"));

// console.log(/bad(ly)?/.exec('bad')) //['bad',undefined]
// console.log(/(\d)+/.exec("123"));   //['123', '3']


//  THE DATE CLASS
// console.log(new Date());

//create a specific time
// console.log(new Date(2009, 1, 9));
// console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// console.log(new Date(2013, 10, 25).getTime());
// console.log(new Date(1385337600000));

// console.log(new Date(2013));

// function getDate(string) {
//     let [_, month, day, year] =
//         /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
//     return new Date(year, month-1, day);
// }

// console.log(getDate("02-28-2003"));

// //  WORD and String Boundaries
// console.log(/cat/.test('concatenate'))  //true
// console.log(/cat\b/.test('conbcatenatecats'))   //false

//  Choice Patterns
// let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
// console.log(animalCount.test('some 15 pigs legs')); //true
// console.log(animalCount.test('15 pigcow'));     //false


// BACKTRACKING
// let track = /\b([01]+b|[\da-f]+h|\d+)\b/;
// console.log(track.test('afh'));


// THE REPLACE METHOD
// console.log("pappa".replace('p','m'));  //mappa
// console.log("pappa".replace(/[p]/g,'m'));   //mamma

// console.log(
//     "Grande, Ariana AG\nJohansson, Scarlet JS\n Angelou, Maya AM"
//     .replace(/(\w+), (\w+) (\w+)/g, "$3, $2-$1")
// );
 
// passing function into replace method
// let s = 'the fucking cia and fbi';
// console.log(s.replace(/\b(cia|fbi)/g, str => str.toUpperCase()));

    // example(2)
// let stock = "1 lemon, 2 cabbages, and 101 eggs";
// function minusOne(match, amount, unit) {
//     amount = Number(amount) - 1;
//     if (amount == 1) { // only one left, remove the 's'
//         unit = unit.slice(0,unit.length-1);
//     } else if(amount == 0) {
//         amount = 'no';
//     }
//     return amount + " " + unit;
// }

// console.log(stock.replace(/(\d+) (\w+)/g, minusOne));


// GREED
//function to remove all comments from a js code.
// function stripComments(code) {
//     return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
// }
// function stripCommentsWell(code) {
//     return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
// }
// console.log(stripComments("1 * 3/*cup*/"))
// console.log(stripComments("1 /* a */ + /* b */ 1")); //"1  1"
// console.log(stripCommentsWell("1 /* a */ + /* b */ 1")); //"1 + 1"


// Dynamically Creating Regexp Objects
// let name = 'kenny';
// let name2 = 'taiwo'
// let text = 'Kenny is a suspicious taiwo character';
// let regexp = new RegExp("\\b("+ name +")\\b", "gi");
// let regexp2 = new RegExp("\\b("+ name2 +")\\b", "gi");

// console.log(text.replace(regexp, "_$1_"))

// let name = 'dea+hF()[][]l';
// let text = 'This dea+hF()[][]l guy is super annoying.';
// let escaped = name.replace(/[\\()[.+|^$]/g, "\\$&");
// let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
// console.log(text.replace(regexp, "_$&_"));
// console.log(escaped);