//  EVENT HANDLERS
// window.addEventListener("click", () => {
//     console.log('You knocked');
// });


//EVENTS AND DOM NODES
// let button = document.querySelector('button');
// button.addEventListener("click", () => {
//     console.log('Button clicked');
// }) 

// removeEventListener
// let button = document.querySelector('button')
// function once() {
//     console.log("Done");
//     button.removeEventListener("click", once);
// }
// button.addEventListener("click", once);


// EVENT OBJECTS
// let button = document.querySelector('button');
// button.addEventListener("mousedown", event => {
//     if (event.button == 0) {
//         console.log("Left button");
//     } else if (event.button == 1) {
//         console.log("Middle button");
//     } else if (event.button == 2) {
//         console.log("Right button");
//     }
// });


// PROPAGATION
// button = document.querySelector('button');
// para = document.querySelector('p');

// para.addEventListener("click", () => {
//     console.log('clicked paragraph');
// });
// button.addEventListener("click", () => {
//     console.log("clicked button");
//     event.stopPropagation();
// });

//target 
// document.body.addEventListener("click", event => {
//     // if (event.target.nodeName == "BUTTON") {
//     //     console.log("Clicked", event.target.textContent);
//     // }
//     if(event.target.textContent == 'A') {
//         console.log("You clicked the right button");
//     }
// });


// DEFAULT ACTIONS
// let link = document.querySelector('a');
// link.addEventListener('click', event => {
//     console.log("Nope. not allowed");
//     event.preventDefault();
// });


// KEY EVENTS
// window.addEventListener("keydown", event => {
//     if (event.key == 'V' || event.key == 'v') {
//         document.body.style.background = 'violet';
//     }
// });
// window.addEventListener('keyup', event => {
//     if(event.key == 'V' || event.key == 'v') {
//         document.body.style.background = '';
//     }
// });

//  Event for control + space
// window.addEventListener("keypress", event => {
//     if (event.key == " " && event.ctrlKey) {
//         console.log('continuing');
//     }
// })


// MOUSE CLICK
//a primitive drawing program.
// window.addEventListener('click', event => {
//     let dot = document.createElement('div');
//     dot.className = 'dot';
//     dot.style.left = (event.pageX - 4) + 'px';
//     dot.style.top = (event.pageY - 4) + 'px';
//     document.body.appendChild(dot);
// });


// MOUSE MOTION 
// a Drag width program.
// let lastX; // Tracks the last observed mouse X position
// let bar = document.querySelector('div');
// bar.addEventListener("mousedown", event => {
//     if (event.button == 0) {
//         lastX = event.clientX;
//         window.addEventListener("mousemove", moved);
//         event.preventDefault(); // Prevent selection
//     }
// });

// function moved(event) {
//     if (event.buttons == 0) {
//         window.removeEventListener('mousemove', moved);
//     } else {
//         let dist = event.clientX - lastX;
//         let newWidth = Math.max(10, bar.offsetWidth + dist);
//         bar.style.width = newWidth + 'px';
//         lastX = event.clientX; 
//     }
// }


// TOUCH EVENT
// function update(event) {
//     for (let dot; dot = document.querySelector('dot');) {
//         dot.remove();
//     }
//     for (let i = 0; i < event.touches.length; i++) {
//         let {pageX, pageY} = event.touches[i];
//         let dot = document.createElement('dot');
//         dot.style.left = (pageX - 50) + 'px';
//         dot.style.top = (pageY - 50) + 'px';
//         document.body.appendChild(dot);
//     }
// }
// window.addEventListener("touchstart", update);
// window.addEventListener('touchmove', update);
// window.addEventListener('touchend', update);


// a followMe program
// document.addEventListener('mousemove', event => {

//     for (let dot2; dot2 = document.querySelector('div');) {
//         dot2.remove();
//     }
//     let dot = document.createElement('div');
//     dot.className = 'dot';
//     dot.style.left = (event.pageX - 4) + 'px';
//     dot.style.top = (event.pageY - 4) + 'px';
//     document.body.appendChild(dot);

// });


// SCROLL EVENTS

// Create some content
// document.body.appendChild(document.createTextNode('Superlicious'.repeat(1000)));

// let bar = document.querySelector('#progress');
// window.addEventListener('scroll', () => {
//     let max = document.body.scrollWidth - innerWidth;
//     bar.style.width = `${(pageXOffset / max) * 100}%`;
//     // bar.style.width = '60%';
//     console.log(bar.style.width);
// });


// FOCUS EVENTS

// example displays help text for the text field that currently has focus
// let help = document.querySelector('#help');
// let fields = document.querySelectorAll('input');

// for (let field of Array.from(fields)) {
//     field.addEventListener('focus', event => {
//         let text = event.target.getAttribute('data-help');
//         help.textContent = text;
//     });
//     field.addEventListener('blur', event => {
//         help.textContent = '';
//     })
// }


// LOAD EVENT
// Ask user for confirmation to leave the site so as not to lose any work on current site.
// window.addEventListener('beforeunload', event => {
//     // event.returnValue = '';
//     return 0;
// });


// Workers
// let squareWorker = new Worker('squareworker.js');
// squareWorker.addEventListener("message", event => {
//     console.log("The worker responded:", event.data);
// });

// squareWorker.postMessage(50);



// TIMERS
//defuses the bomb if the value is greater than 0.5
// let bombTimer = setTimeout(() => {
//     console.log('BOOM!');
// }, 500);

// if (Math.random() < 0.5) {
//     console.log('Defused');
//     clearTimeout(bombTimer);
// }

// setInterval and clearInterval
// let ticks = 0;
// let clock = setInterval(() => {
//     console.log("tick", ticks++);
//     if (ticks == 10) {
//         clearInterval(clock);
//         console.log("Stop.");
//     }
// }, 500);


// DEBOUNCING

// let textarea = document.querySelector('textarea');
// let timeout;
// textarea.addEventListener('input', () =>{
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//         return console.log("Typed")
//     }, 500);
// });

//space responses
let scheduled = null;
window.addEventListener('mousemove', event => {
    if (!scheduled) {
        setTimeout(() => {
            document.body.textContent = 
            `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
            scheduled = null;
        }, 250);
        scheduled = event;
    }
});