'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

//output은 가시적인 부분을 보여주는 것이기 때문에 show나 view 등 취향에 따라 변경한다
router.get('/', ctrl.output.main);

//get함수를 통해 /로 요청이 들어오면 이후 함수 실행
router.get('/register', ctrl.output.register);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

module.exports = router;