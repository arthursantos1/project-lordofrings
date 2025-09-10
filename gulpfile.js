const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}

function style() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

exports.default = gulp.parallel(style, images)
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
}