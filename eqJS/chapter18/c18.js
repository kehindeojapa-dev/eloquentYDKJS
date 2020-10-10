// Client Request
/*
    GET /18_http.html HTTP/1.1
    Host: eloquent.net
    User-Agent: Your browser's name
*/

// Server response
/*
    HTTP/1.1 200 OK
    Content-Length: 65585
    Content-type: text/html
    Last-Modified: Mon, 08 Jan 2018 10:29:45 GMT

    <!doctype html>
    ... the rest of the document
*/

// console.log(encodeURIComponent('Yes?'));
// console.log(decodeURIComponent('Yes%3f%25'));

// FETCH

// fetch('c18.html').then(response => {
//     console.log(response.status);
//     console.log(response.headers.get('content-type'));
// });


// fetch content of c18.html
// fetch('c18.html')
//     .then(response => response.text())
//     .then(text => console.log(text));

// configure delete method for fetch
// fetch('c18.html', {method: 'DELETE'}). then (resp => {
//     console.log(resp.status);
// });

// Add request body to fetch
// fetch('c18.html', {headers: {Range: 'bytes=8-219'}})
//     .then(resp => resp.text())
//     .then(console.log);


// textarea play
// let textarea = document.querySelector('textarea');
// textarea.addEventListener('focus', event => {
//     textarea.textContent = '';
// });
// textarea.addEventListener('blur', event => {
//     textarea.textContent = 'dont go';
// });


// FOCUS
// document.querySelector('input').focus();
// console.log(document.activeElement.tagName);

// document.querySelector('input').blur();
// console.log(document.activeElement.tagName);

// Disabling Button
// let button = document.getElementById('disable');
// console.log(button);
// window.addEventListener('click', () => {
//     setTimeout(()=> {
//         button.setAttribute('disabled','1');
//     },3000);
// });


// FORM AS A WHOLE

// // form(array-object)
// let form = document.querySelector('form');
// console.log(form.elements[1].type);
// console.log(form.elements.password.type);
// console.log(form.elements.name.form == form);

// Intercepting submits event
let form = document.querySelector('form');
form.addEventListener('submit', event => {
    console.log("saving value", form.elements.value.value);
    event.preventDefault();
})