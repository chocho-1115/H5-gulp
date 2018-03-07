var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jsbeautifier = require('gulp-jsbeautifier');
var config = require('./config.js');

gulp.task('js-min', function () {
    return gulp.src(config.src.js + '/*.js')
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true //类型：Boolean 默认：true 是否完全压缩
            // preserveComments: all //保留所有注释
        }))
        .pipe(gulp.dest(config.dist.js));
});

gulp.task('js-original', function () {
    return gulp.src(config.src.js + '/*.js')
        .pipe(rename({suffix: '.original'}))
        .pipe(jsbeautifier())
        .pipe(gulp.dest(config.dist.js));
});

gulp.task('js',['js-min','js-original']); //定义默认任务