var gulp = require('gulp');
var jsbeautifier = require('gulp-jsbeautifier');
var config = require('./config.js');

gulp.task('html', function () {
    return gulp.src(config.src.html + '/**/*.html')
        //html  格式化
        .pipe(jsbeautifier())
        .pipe(gulp.dest(config.dist.html));
});