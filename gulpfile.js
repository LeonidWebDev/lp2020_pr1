let gulp = require('gulp');
let sass = require('gulp-sass');


gulp.task('scss', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});