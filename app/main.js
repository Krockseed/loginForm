'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const home = require('./src/routes/home');

app.use(express.static(`${__dirname}/src/public`));
//app.use(express.static(path.join(__dirname + '../public')));
app.set('views', `${__dirname}/src/views/home`);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
// url parsing 중에 한글이나 숫자 등을 만나면 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home);

module.exports = app;