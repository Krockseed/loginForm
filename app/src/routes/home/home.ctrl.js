'use strict';

const userStorage = require('../../models/userStorage');

const output = {
    main: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('login');
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id, //loginForm을 통해 입력받은 values
            password = req.body.password;
        
        const users = userStorage.getUsers('id', 'password');
        console.log(`users is ${users}`);

        const response = {
            success: false,
            msg: '로그인 실패!',
        };

        // if (userInfo.users.id.includes(id)) {
        //     const idx = userInfo.users.id.indexOf(id);
        //     if (userInfo.users.password[idx] === password) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // } 
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                response.success = true;
                return res.json(response);
            }
        }
    
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};