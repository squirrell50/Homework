// const p=fetch('https://jsonplaceholder.typicode.com/todos');
// let responce = null;
//async function f() {
//     try {
//         const j=await p.json();
//         responce = await j.json();
//         console.log(responce);
//     }
//     catch (function(err) {
//         console.log(e);
//     });
// }
//
// f();

// let response = await fetch('https://jsonplaceholder.typicode.com/todos');
// let bodytext = await response.json();
// console.log(bodytext);

const div = document.createElement('div');
document.body.append(div);
const input = document.createElement('input');
div.append(input);

const button = document.createElement('button');
button.innerText = 'ADD';

button.addEventListener('click', function(){
    const str = input.value;
    if ((str =='') || (str == null) ) {
        console.log('error: Enter text!');
    }
    else{
        const p = document.createElement('p');
        document.body.append(p);
        p.innerText = str;
    }
});
div.append(button);


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(arrresponse => {
        for (let i = 0; i < arrresponse.length; i++) {

            const p = document.createElement('p');
            document.body.append(p);
            p.innerText = arrresponse[i].title;

            p.addEventListener('click', function () {
                p.remove();
            });
        }
    });