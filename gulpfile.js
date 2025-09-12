const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

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

function script() {
    return gulp.src('./src/script/*js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script'))
}

exports.default = gulp.parallel(style, images, script);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
}