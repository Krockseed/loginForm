'use strict';

// const { json } = require("body-parser");
// const { application } = require("express");

const id = document.querySelector('#id'),
    paswrd = document.querySelector('#paswrd'),
    loginBtn = document.querySelector('button');


loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password: paswrd.value
    };

    // console.log(req);
    console.log(JSON.stringify(req));
    
    fetch('/login', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        }, 
        body: JSON.stringify(req),
    }).then((res) => console.log(res.json()));
};