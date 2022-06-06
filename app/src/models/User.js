'use strict';

const { response } = require('express');
const { getUsersInfo } = require('./userStorage');
const userStorage = require('./userStorage');

class User {
    constructor(body) { //생성자를 통해 req.body 받아옴
        this.body = body;
    };

    login() {
        const body = this.body;
        const info = userStorage.getUsersInfo(body.id);

        if (info.id) {
            if (info.id === body.id && info.password === body.password) {
                console.log("durldhktek");
                return { success: true };
            }
            return { success: false, msg: 'wrong pw'};
        }
        return { success: false, msg: 'no exist id'};
    }
};

module.exports = User;