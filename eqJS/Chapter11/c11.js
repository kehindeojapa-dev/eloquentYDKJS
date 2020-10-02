//      ASYNCHRONOUS PROGRAMMING

// CALLBACK FUNCTIONS
// examples(1)
console.log(1);
setTimeout(() => {
    console.log(3);
},3000);
console.log(3);

// examples(2)
setTimeout(() => console.log("Tick"), 4000);
let a = 20;
setTimeout(() => console.log(c), 3000);
setTimeout(() => console.log(c), 3000);
let b = 40;
let c = a + b;


import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", () => console.log("Note delivered."));

import {defineRequestType} from "./crow-tech";

defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
});


//  PROMISES

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));


function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

Storage(bigOak, "enemies").then(value => console.log("Got", value));

new Promise((_, reject) => reject(new Error("Fail")))
    .then(value => console.log("Handler 1"))
    .catch(reason => {
        console.log("Caught Failure " + reason);
        return "nothing";
    })
    .then(value => console.log("Handler2 " + value))


class Timeout extends Error {}

function request(nest, target, type, content) {
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n) {
            nest.send(target, type, content, (failed, value) => {
                done = true;
                if (failed) reject(failed);
                else resolve(value);
            });
            setTimeout(() => {
                if (done) return;
                else if (n < 3) attempt(n-1);
                else reject(new Timeout("Timed out"));
            }, 250);
        }
        attempt(1);
    });
}


function requestType(name, handler) {
    defineRequestType(name, (nest, content, source, callback) => {
        try {
            Promise.resolve(handler(nest, content, source))
                .then(response => callback(null, response),
                    failure => callback(failure));
        } catch (exception) {
            callback(exception)
        }
    });
}

    // Generators

function* powers(n) {
    for (let current = n;; current *= n) {
        yield current;
    }
}

for (let power of powers(3)) {
    if (power > 50) break;
    console.log(power);
}


function Promise_all(array) {
    
}