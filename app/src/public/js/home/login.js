'use strict';

const id = document.querySelector('#id'),
    paswrd = document.querySelector('#paswrd'),
    loginBtn = document.querySelector('button');


loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password: paswrd.value
    };

    console.log(req);
}