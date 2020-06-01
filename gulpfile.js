const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const sync = require('browser-sync').create();


function html() {
    return src('dist/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('app/'));
}

function css() {
    return src('dist/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest('app/css/'));
}

function clean() {
    return del(['app/index.html', 'app/css/**/*.css'])
}

function serve() {
    sync.init({
        server: './app'
    })

    watch('app/index.html', series(html)).on('change', sync.reload)
    watch('dist/scss/style.scss', series(css)).on('change', sync.reload)

}

exports.html = html;
exports.css = css;
exports.clean = clean;

exports.build = series(clean, html, css);
exports.serve = series(clean, html, css, serve);