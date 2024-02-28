const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const groupCSSMediQqueries = require('gulp-group-css-media-queries');
const sassGlop = require('gulp-sass-glob');

const path = require('../config/path.js');

// работа с sass файлами
function buildSass() {
    return src(path.sass.sassPath, {sourcemaps: true})
        .pipe(sassGlop())
        .pipe(sass())
        .pipe(groupCSSMediQqueries())
        .pipe(dest(path.sass.destpath, {sourcemaps: true}));
}

// задача
module.exports = buildSass; 