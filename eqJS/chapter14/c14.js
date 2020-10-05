// let link = document.getElementsByTagName('a')[0];
// let p1 = document.getElementsByClassName('class')[0];
// let p2 = document.getElementById('id');
// console.log(link.href);
// console.log(p1.innerHTML);
// console.log(p2.innerHTML);

// // Changing the Document

// let paragraphs = document.getElementsByTagName('p');
// // document.body.insertBefore(paragraphs[2], paragraphs[0]);
// // document.body.removeChild(paragraphs[1]);
// let p = document.createElement("h1");
// document.body.appendChild(p);
// p.innerHTM

// // let h2 = document.createTextNode('Hi There');
// // document.body.appendChild(h2);

// // document.body.replaceChild(paragraphs[0], paragraphs[paragraphs.length - 1])

// // Creating Nodes

// function replaceImages() {
//     let images = document.getElementsByTagName('img');
//     for (let i = images.length - 1; i >= 0; i--) {
//         let image = images[i];
//         if (image.alt) {
//             let text = document.createTextNode(image.alt);
//             image.parentNode.replaceChild(text, image);
//         }
//     }
//     console.log(images.parentNode);
// }


// // Using Array.from to get a solid collection of nodes
// let arrayish = {
//     0: 'one',
//     1: 'two',
//     length: 2
// };
// let array = Array.from(arrayish);
// console.log(array.map(s => s.toUpperCase()));

// function elt(type, ...children) {
//     let node = document.createElement(type);
//     for (let child of children) {
//         if (typeof child != "string") {
//             node.appendChild(child);
//         } else {
//             node.appendChild(document.createTextNode(child));
//         }
//         return node;
//     }
// }

// // document.getElementById("quote").appendChild(
// //     elt("footer", -"",
// //     elt("strong","Karl Popper"), " preface to the second edition of", elt(
// //         "em", "The Open Society and Its enemies"
// //     ), ", 1950"));

// document.getElementById('quote').appendChild(elt("footer", "Writer"))


// // ATTRIBUTES 
// let paras = document.getElementsByTagName('p');
// for (let para of Array.from(paras)) {
//     if (para.getAttribute('data-classified') == 'secret') {
//         para.remove();
//     }
// }


// // LAYOUT
// // let para1 = document.getElementById('layout');
// // console.log("offsetHeight", para1.offsetHeight);
// // console.log("offsetwidth", para1.offsetWidth);
// // console.log("clientHeight", para1.clientHeight);
// // console.log("clientWidth", para1.clientWidth);
// // console.log(para1.getBoundingClientRect());


// // STYLING
// // let para = document.getElementById('para');

// // console.log(para.style.color);
// // para.style.color = 'blue';
// // console.log(para.style.color);
// // para.style["font-size"] = '32px';
// // para.style.fontSize = '32px';
// // console.log(para.style.fontSize);

// // Query Selector
// function count(selector) {
//     return document.querySelectorAll(selector).length;
// }

// console.log(count('p > .animal'));

// // Position and Animation
// let cat = document.querySelector("img");
// console.log(cat);
// let angle = Math.PI /2;

// function animate(time, lastTime) {
//     if (lastTime != null) {
//         angle += (time - lastTime) * 0.001;
//     }
//     cat.style.top = (Math.sin(angle) * 20) + "px";
//     cat.style.left = (Math.cos(angle) * 200) + "px";
//     requestAnimationFrame(newTime => animate(newTime, time));
// }
// requestAnimationFrame(animate);



// Exercise(1): BUILD A TABLE

//data set of players

set1 = [
    {
        name: 'Ronaldo',
        age: 35,
        club: 'Juventus'
    },
    {
        name: 'Messi',
        age: 32,
        club: 'Barcelona'
    },
    {
        name: 'Mbappe',
        age: 22,
        club: 'Paris'
    },
    {
        name: 'Neymar',
        age: 26,
        club: 'Paris'
    },
    {
        name: 'Grealish',
        age: 25,
        club: 'Villa'
    }
]

let heading = document.createElement('th');
let items = document.createElement('td');



function players(type, set1) {
    let node = document.createElement(type);
    let hold = document.createTextNode(set1[0].name);
    let hold2 = document.createTextNode('hello');
    for(let container of set1) {
        if (node == 'th') {
            node.appendChild(set1[0]);
        } else {
            node.appendChild(hold);
        }
    }
    return node;
}

function players2(type,...set) {
    let node = document.createElement(type);
    for(let i = 0; i < set1.length; i++) {
        let row = document.createElement('tr');
        let hold = document.createTextNode(Object.keys(set1[i]));
        let name = document.createTextNode(set1[i].name +" "+ set1[i].age+" "+ set1[i].club);
        if (type == 'th') {
            row.appendChild(hold);
            node.appendChild(row);
        } else {
            row.appendChild(name);
            node.appendChild(row);
        }
    }
    return node;
}

console.log(players2('td', set1));
document.getElementById('players').appendChild(
    players2('td', set1)
);
