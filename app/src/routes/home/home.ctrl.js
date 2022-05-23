'use strict';

const user = {
    id: ['hello', 'wood', 'krockseed'],
    password: ['369369', '5577', '7742'],
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

        if (user.id.includes(id)) {
            const idx = user.id.indexOf(id);
            if (user.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        } 

        return res.json({
            success: false,
            msg: '로그인에 실패하셨습니다.'
        });
    },
};

module.exports = {
    output,
    process,
};