const del = require('del');

const path = require('../config/path.js');

// удаление папки public 
function clear() {
    return del(path.root);
}

// задача
module.exports = clear; 