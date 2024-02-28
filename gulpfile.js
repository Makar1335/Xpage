const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
const browserSync = require('browser-sync').create();

const buildPug = require('./tasks/pug.js');
const buildSass = require('./tasks/sass.js');
const clear = require('./tasks/clear.js');
const img = require('./tasks/img.js');

const path = require('./config/path.js');

// сервер
function server() {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
    watch(path.watcher.sass , buildSass).on('change', browserSync.reload);
    watch(path.watcher.pug, buildPug).on('change', browserSync.reload);
}

exports.img = img

// задачи
exports.dev = series(
    clear,
    img,
    buildSass,
    buildPug,
    server
);