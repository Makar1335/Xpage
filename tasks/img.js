const {
    src,
    dest
} = require('gulp');

const imgmin = require('gulp-imagemin');
const path = require('../config/path.js');


// работа с pug файлами
function img() {
    return src(path.img.imgPath)
        .pipe(imgmin())
        .pipe(dest(path.img.imgDestpath));
}

// задача
module.exports = img; 