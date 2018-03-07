var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
//var jsbeautifier = require('gulp-jsbeautifier');
var config = require('./config.js');

gulp.task('css-min', function () {
    return gulp.src(config.src.css + '/**/*.css')
        .pipe(uglifycss({
            cuteComments: true //保留所有注释
        }))
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('css-original', function () {
    return gulp.src(config.src.css + '/**/*.css')
        .pipe(rename({suffix: '.original'}))
       // .pipe(jsbeautifier())
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('css',['css-min','css-original']); //定义默认任务