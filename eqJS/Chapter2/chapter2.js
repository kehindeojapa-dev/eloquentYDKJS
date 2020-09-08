
    //     PROGRAM STRUCTURE

//  Expressions and Statements
    // 22, "psycho" : both are just expressions (produce value)
    // 1; !false;   : both are statements (can stand on its own, and can affect other statements)


//  Bindings (Variables)

    // let caught = 5*5;

    // let three = 3;

    // console.log(three * three);
    // console.log(caught)

    // let governmentDebt = 100000000;
    // governmentDebt = (3 * governmentDebt) - (2 * governmentDebt);
    // console.log(governmentDebt);

    // var name = "Adaeza ", name2 = "Ojapa";
    // const greeting = "Hello, Engineer ";

    // console.log(greeting + name + name2);

//  Functions

    // let password = prompt("Enter passcode");
    // console.log(password);

    // console.log(Math.max(45,595) + 100); //Math.max is a function with no side-effect

    // let num = 5;
    // console.log("This is number " + num);

    // let theNumber = Number(prompt("Enter a number"));
    // if (!Number.isNaN(theNumber)) {
    //     console.log("The square of the number " +theNumber+ " is " +theNumber * theNumber);
    // }else {
    //     console.log("Why don't you give me a freaking no, please");
    // }


    // let letter = String(prompt("Enter a letter"));
    // console.log(letter.length)
    // if (letter.length <= 1) {
    //     console.log("Doubling letter gives " +letter+letter);
    // } else {
    //     console.log("Don't enter more than one letter");
    // }


    // let shoeSize = Number(prompt("Enter your size of shoe"));
    // if (Number.isNaN(shoeSize)) {
    //     alert("Only input numbers");
    // }
    // else if (shoeSize < 30) {
    //     console.log("Small shoe will be fitting for you");
    // }
    // else if (shoeSize < 43) {
    //     console.log ("Medium shoe will be fittng for you");
    // }
    // else if (shoeSize < 50) {
    //     console.log("Large shoe will be fitting for you")
    // }
    // else {
    //     console.log(shoeSize+ " sized shoe is not available");
    // }


//  LOOPS

    // WHILE LOOP

    // let number = 0;
    // let count = 0;
    // while (number <= 12 ) {
    //     console.log(number);
    //     number = number + 2;
    //     count = count + number;
    // } 
    // console.log(count);


    // power of 2 
    // let result = 1;
    // let counter = 0;
    // while (counter < 4) {
    //     result = result * 2;
    //     counter = counter + 1;
    // }
    // console.log(result);
    
    // power of any Number
    // let root = Number(prompt("Enter number of base root"));
    // let power = Number(prompt("Enter the number you want multipled to the power of base root"));
    // let result = 1;
    // let counter = 0;
    // while (counter < power) {
    //     result = result * root;
    //     counter = counter + 1;
    // }
    // console.log(result);

    // do-while LOOP

        // let yourName;
        // do {
        //     yourName = prompt("enter your name");
        // }while (!yourName);
        // console.log(yourName);
    
    
    //  For LOOP
    // let count = 0;
    // for (let number = 0; number <= 12; number = number + 2) {
    //     console.log(number);
    //     count = count + number;
    // }
    // console.log(count);

    // Power of any number using for loop
    // let root = Number(prompt("Enter number of base root"));
    // let power = Number(prompt("Enter the number you want multipled to the power of base root"));
    // let result = 1;
    // for (let counter = 0; counter < power; counter = counter + 1) {
    //     result = result * root;
    // }
    // console.log(result);

    //  Breaking Out of loop

    // for (let current = 20; ;current = current + 1) {
    //     if (current % 7 == 0) {
    //         console.log(current);
    //         // break;
    //     }
    // }
    

    //  SWITCH Control Flow
    // switch (prompt("what is today: ")) {
    //     case "monday"://, "tuesday", "wednesday":
    //         console.log("Working-time");
    //         break;
    //     case "thursday"://, "friday":
    //         console.log("Is weekend already");
    //     default:
    //         break;
    // }



