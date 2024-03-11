const {
    src,
    dest
} = require('gulp');

const imgmin = require('gulp-imagemin');
const newer = require('gulp-newer');
const path = require('../config/path.js');


// работа с pug файлами
function img() {
    return src(path.img.imgPath)
        .pipe(newer(path.img.imgPath))
        .pipe(imgmin())
        .pipe(dest(path.img.imgDestpath));
}

// задача
module.exports = img; 