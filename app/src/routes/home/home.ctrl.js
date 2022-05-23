'use strict';

const user = {
    id: ['qq', 'ww', 'ee'],
    password: ['1', '23', '123123'],
};

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
        const id = req.body.id;
        const password = req.body.password;
        const response = {
            success: false,
            msg: '로그인 실패!',
        };

        if (user.id.includes(id)) {
            const idx = user.id.indexOf(id);
            if (user.password[idx] === password) {
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