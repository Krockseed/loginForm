'use strict';

const app = require('../main');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`${__dirname} 에서 서버 시작`);
});