const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
const pug = require('gulp-pug');

const path = require('../config/path.js');

// работа с pug файлами
function buildPug() {
    return src(path.pug.pugPath)
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest(path.pug.destpath));
}

// задача
module.exports = buildPug; 