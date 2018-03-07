var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('./config.js');

gulp.task('delProject', function () {
    return gulp.src(config.dist.progectRoot, {read: false})//如果在同一流中清除后需要文件及其内容，请勿将read选项设置为false
        .pipe(clean())
});