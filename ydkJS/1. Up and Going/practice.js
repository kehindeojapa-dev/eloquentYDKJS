/*
• Write a program to calculate the total price of your phone pur‐
chase. You will keep purchasing phones (hint: loop!) until you
run out of money in your bank account. You’ll also buy accesso‐
ries for each phone as long as your purchase amount is below
your mental spending threshold.

• After you’ve calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly for‐
matted.

• Finally, check the amount against your bank account balance to
see if you can afford it or not.

• You should set up some constants for the “tax rate,” “phone
price,” “accessory price,” and “spending threshold,” as well as a
variable for your “bank account balance.”

• You should define functions for calculating the tax and for for‐
matting the price with a “$” and rounding to two decimal
places.

• Bonus Challenge: Try to incorporate input into this program,
perhaps with the prompt(..) covered in “Input” on page 6. You
may prompt the user for their bank account balance, for exam‐
ple. Have fun and be creative!

*/

const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = prompt("What is your spending limit for today");

let phonePrice = 99.99;
let bankBalance = prompt("Enter your Bank Account balance: ");

// Tax function
function calculateTax(amt) {
    amt = amt + (amt * TAX_RATE);
    return amt
}

// Formatting function
function addDecimalAndDollar(amt) {
    amt = amt.toFixed(2);
    amt = "$" + String(amt);
    console.log(amt);
}
// Update counters
let count = 0;
let amount = 0;
let remainder = SPENDING_THRESHOLD

// goods purchased must not go over the set spending limit
while ( amount < SPENDING_THRESHOLD ) {
    if (phonePrice < remainder) {
        console.log("i will take an accessory with the phone");
        count = count + 1;
        console.log(count);
        amount = amount + phonePrice + ACCESSORY_PRICE; 
        remainder = SPENDING_THRESHOLD - amount; // 
    }
    else {
        console.log("You have almost/already used up your spending limit for today");
        break;
    }
    
}

addDecimalAndDollar(amount);
// Adding Tax to purchased items
amount = calculateTax(amount);
console.log("Amount + VAT");
addDecimalAndDollar(amount);

// VErifying if bank account is comfortable with this kind of spending.
if (amount < bankBalance) {
    console.log("You can go ahead with these purchase")
}else {
    console.log("You can't make these purchase, due to insufficient fund");
}


