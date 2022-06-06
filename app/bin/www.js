'use strict';

const app = require('../main');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`localhost: ${PORT} server start`);
});