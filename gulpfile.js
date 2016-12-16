// TODO: concat js files to one

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
    return gulp.src(['./js/side_bar.js', './js/container.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'));
});


gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);   //
    //gulp.watch(['./js/side_bar.js', './js/container.js'], ['scripts']);
});