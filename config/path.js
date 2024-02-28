const pugPath = 'src/pug/*.pug';
const sassPath = 'src/sass/*.scss';
const imgPath = 'src/img/**/*.{jpg,jpeg,png,gif,svg}';
const destpath = 'public/';
const imgDestpath = 'public/img/';
const watcherPug = 'src/**/*.pug';
const watcherSass = 'src/**/*.scss';

module.exports = {
    root: destpath,
    watcher: {
        pug: watcherPug,
        sass: watcherSass
    },
    pug: {
        pugPath,
        destpath
    },
    sass: {
        sassPath,
        destpath
    },
    img: {
        imgPath,
        imgDestpath
    }
}