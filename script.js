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

docBody = document.body;
const fragment = document.createDocumentFragment();
const parentDiv = document.createElement("div");

const div = document.createElement('div');
const input = document.createElement('input');
div.append(input);

const removeTag = function(event) {
    event.target.remove();
};

const CreateNewTag = function () {
    const str = input.value;
    if ((str =='') || (str == null) ) {
        console.log('error: Enter text!');
    }
    else{
        const p = document.createElement('p');
        parentDiv.append(p);
        docBody.append(parentDiv);
        p.innerText = str;
    }
};

const button = document.createElement('button');
button.innerText = 'ADD';
button.addEventListener('click', CreateNewTag);

div.append(button);
docBody.append(div);



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(arrresponse => {
        for (let i = 0; i < arrresponse.length; i++) {

            const p = document.createElement('p');
            fragment.append(p);
            p.innerText = arrresponse[i].title;
        };
        parentDiv.append(fragment);
        parentDiv.addEventListener("click", removeTag);
        docBody.append(parentDiv);
    });


