//      SECRET LIFE OF OBJECTS


//      Method
// let rabbit = {
//     speak: function(line) {
//         console.log(`The rabbit says '${line}'`);
//     }
// };
// rabbit.speak("I'm alive. ");

    //example
// function speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }
// let whiteRabbit = {
//     type: 'white',
//     speak
// };
// let hungryRabbit = {
//     type: 'hungry',
//     speak
// };
// whiteRabbit.speak("Oh my ears and whiskers");
// speak.call(whiteRabbit, 'burp');


    //example 2
// function intro(line) {
//     console.log(`Mr ${this.name}, thanks for banking with ${line}`);
// }
// let customer1 = {
//     name: 'Daniel',
//     intro
// }
// let customer2 = Object.create(customer1s);
// customer2.name = "Godwin"
// customer1.intro("Wema Bank");
// customer2.intro("Gtb Bank")


//  PROTOTYPES

// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());
// console.log(Object.getPrototypeOf({}));
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));
// console.log(Object.getPrototypeOf(customer1));

// console.log(Function.prototype);

// //  example
// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says ${line}`);
//     }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('SKREEEE');

// //  example2
// let protoNums = {
//     PI: 3.142,
//     areaCircle (radius) {
//         console.log( this.PI * radius * radius) ;
//     }
// }
// let area = Object.create(protoNums);
// area.areaCircle(7);

//  CLASSES

// function makeRabit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }


// function Rabbit(type) {
//     this.type = type;
// }
// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says ${line}`)
// };
// let weirdRabbit = new Rabbit('weird');
// weirdRabbit.speak("Bull shit");
// console.log(Object.getPrototypeOf(Rabbit));
// console.log(weirdRabbit.prototype);


//  example
// function Shape(lenght, height) {
//     this.lenght = lenght;
//     this.height = height;
// }
// Shape.prototype = {
//     color: 'red',
//     shapes: 'regular',
//     area: function() {
//         console.log(this.lenght * this.height);
//     }
// }
// let triangle = new Shape(10,20);
// triangle.area();


//  CLASS NOTATION
// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} says '${line}'`)
//     }
// }
// let killerRabbit = new Rabbit('Killer');
// killerRabbit.speak('Fucked up');

// class Shape {
//     constructor(length, height) {
//         this.length = length;
//         this.height = height;
//     }
//     shapes = 'regular'
//     area() {
//         console.log(this.length * this.height);
//     }
//     perimeter() {
//         console.log(this.length + this.height);
//     }
// }

// let triangle = new Shape(10,20);
// triangle.area();
// triangle.perimeter();

// Using class as an expression
// let object = new class {
//     getWord() {
//         return "hello";
//     }
// };
// console.log(object.getWord());

//  example 2 
// let person = new class {
//     sayGreeting() {
//         return "Hello, how do you do ?";
//     }
// };
// console.log(person.sayGreeting());


//  MAPS

// let ages = Object.create(null); 
// ages.Boris= 39;
// ages.Liang=  22;
// ages.Julia = 62;
// console.log(`Julia is ${ages.Julia}`)
// console.log("Is Liang's age known?", "Liang" in ages);
// console.log("Is toString age known", "toString" in ages);

// Map Object
// let ages = new Map();
// ages.set('boris', 39);
// ages.set('liang', 22);
// ages.set('julia', 62);
// console.log(`Julia is ${ages.get('julia')}`);
// console.log("Is jack age known", ages.has('jack'));
// console.log(ages.has(toString));


//  hasOwnProperty
// let games = {
//     sony: 'playstations',
//     microsoft: 'x-boxs',
//     sega: 'nintendo'
// } 
// console.log(games.hasOwnProperty('microsoft'));

    //  POLYMORPHISM
// function Rabbit(type) {
//     this.type = type;
// }

// Rabbit.prototype.toString = function() {
//     return `a ${this.type} rabbit`;
// }
// let blackRabbit = new Rabbit('black');
// console.log(String(blackRabbit));

// console.log(Object.prototype);


//     Symbols

// let sym = Symbol("name");
// let sym2 = Symbol("name")
// console.log(sym);
// console.log(sym == Symbol("name"));
// console.log(sym == sym2);
// Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym]);

// //  Example(Symbol)
// const toStringSymbol = Symbol("toString");
// const toStringSymbol2 = Symbol("toString");
// Array.prototype[toStringSymbol] = function() {
//     return `${this.length} cm of blue yarn`;
// };
// Array.prototype[toStringSymbol2] = function() {
//     return `${this.length} cm of red yarn`;
// };
// console.log([1,2].toString());
// console.log([1,2][toStringSymbol]());
// console.log([1,2][toStringSymbol2]());


// // Example2(symbol)
// const toStringLength = Symbol("giveLength");
// Array.prototype[toStringLength] = function() {
//     return `this is the length`;
// }
// console.log([1,2][toStringLength]());

// //  Example3(Symbol)
// let stringObject = {
//     [toStringSymbol]() {
//         return "a jute rope";
//     }
// }

// console.log(stringObject[toStringSymbol]());


//  The Iterator Interfaec(Symbol.iterator)

// let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

    // example2
// let notOKIterator = {};
// notOKIterator[Symbol.iterator] = function* () {
//     yield name = 'kenny';
//     yield age = 22;
//     yield occupation = 'Software-Engineer';
// }
// console.log([...notOKIterator])


//  Matrix example
// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.content = [];
    
//         for(let y = 0; y < height; y++) {
//             for (let x = 0; x < width; x++) {
//                 this.content[y * width + x] = element(x, y);
//             }
//         }
//     }

//     get(x, y) {
//         return this.content[y * this.width + x];
//     }
//     set(x, y, value) {
//         this.content[x * this.width + x] = value;
//     }
// }

// class MatrixIterator {
//     constructor(matrix) {
//         this.x = 0;
//         this.y = 0;
//         this.matrix = matrix;
//     }

//     next() {
//         if (this.y == this.matrix.height) {
//             return {done: true};
//         }
//         let value = {
//             x: this.x,
//             y: this.y,
//             value: this.matrix.get(this.x, this.y)
//         };
//         this.x++;
//         if (this.x == this.matrix.width) {
//             this.x = 0;
//             this.y++;
//         }
//         return {value, done: false};
//     }
// }
// Matrix.prototype[Symbol.iterator] = function() {
//     return new MatrixIterator(this);
// }

// let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
// for (let {x,y, value} of matrix) {
//     console.log(x, y, value);
// }


//  GETTERS, SETTERS, AND STATICS

// let anObject = new Map();
// // anObject.set('name', 'kenny');
// // anObject.set('occupation','software-engineer');
// console.log(anObject.size);


//  Getters example
// let varySize = {
//     get size() {
//         return Math.floor(Math.random() * 100);
//     },
//     get sayHello() {
//         return console.log("Hello");
//     }
// };
// console.log(varySize.size);
// console.log(varySize.sayHello);

// Setters example

// class Temperature {
//     constructor(celsius) {
//         this.celsius = celsius;
//     }
//     get fahrenheit() {
//         return this.celsius * 1.8 + 32;
//     }
//     set fahrenheit(value) {
//         this.celsius = (value - 32) / 1.8;
//     }
//     static fromFahrenheit(value) {
//         return new Temperature((value - 32) / 1.8);
//     }
// } 

// let calcTemp = new Temperature(5);
// calcTemp.fahrenheit = 41;
// // console.log(calcTemp.celsius);
// // console.log(calcTemp.fahrenheit);

//  example(getters,setters,static)
// class Currency {
//     constructor(naira) {
//         this.naira = naira;
//     }
//     get dollar() {
//         return `N${this.naira * 350}`;
//     }
//     set dollar(value) {
//         this.naira = value / 350;
//     }
//     static fromEuros(value) {
//         return new Currency(value * 400);
//     }
// }

// // let getNaira = new Currency(1000);
// // console.log(getNaira.dollar);
// // getNaira.dollar = 450000;
// // console.log(`$${getNaira.naira.toFixed(2)}`);
// // let euros = Currency.fromEuros(1000);
// // console.log(euros.naira);


// //  Inheritances

// class otherCur extends Currency {
//     constructor(pounds) {
//         super(pounds)
//         this.pounds = pounds;
//     }
//     get getpounds() {
//         return this.pounds * 500;
//     }
//     set(pounds) {
//         super.set(dollar(pounds))
//     }
// }

// let conv = new otherCur(1000);
// conv.dollar = 350000;
// console.log(conv.getpounds)
// console.log(conv.pounds);

// // InstanceOf

// console.log(Currency instanceof otherCur);
// console.log(new otherCur instanceof Currency);

let anObject = new Set();
    anObject.add('name')
    anObject.add('age')
    anObject.add('occupation');
    // anObject.name = 'kenny';
console.log(anObject);
console.log(anObject.has('name'));