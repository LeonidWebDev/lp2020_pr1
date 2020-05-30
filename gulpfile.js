const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const del = require('del');


function html() {
    return src('dist/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('app/'));
}

function css() {

}

exports.html = html;