// Improvised Modules

const weekDay = function() {
    const names = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return {
        name(number){
            return names[number];
        },
        number(name){
            return names.indexOf(name);
        }
    };
}();



//      EVALUATING DATA AS CODE
// Operator Eval
const x = 1;
function evalAndReturnX(code){
    eval(code);
    return x;
}

// Function constructor
let plusTen = Function("n", "return n + 10;");


// COMMON-JS
const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear;
        if (tag == "M") return date.getMonth();
        if(tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if(tag == "Do") return ordinal(date.getDate());
        if(tag == "dddd") return days[date.getDay()];
    });
};

// ECMAScript Modules
import ordinal from "ordinal";
import { days,months } from "date-names";

export function formatDate(date, format) {
    // 
}

// renaming imported bindings
import {days as dayNames} from "date-names";
console.log(dayNames.length);



// require code in its minimal form 
require.cache = Object.create(null);

function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name);
        let module = {exports: {}};
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module);
    }
    return require.cache[name].exports;
}