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
    
    fetch('/login', { // 로그인 api를 구현하는 부분
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        }, 
        body: JSON.stringify(req),
    }).then((res) => res.json()) //성공 시 루트화면으로 보내고 실패 시 알람을 띄운다
    .then((res) => {
        //console.log(res);
        //console.log(`res.success = ${res.success}`);
        if (res.success) {
            location.href = '/';
            console.log('heelo ' + res);
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error('로그인 중 에러가 발생했습니다.');
    });
};