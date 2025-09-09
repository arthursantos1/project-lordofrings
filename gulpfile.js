const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function style() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

exports.default = gulp.parallel(style)
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
}