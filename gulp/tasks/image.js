var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var tinypng = require('gulp-tinypng');
var config = require('./config.js');

//cho849890769@foxmail.com     5AP9misXfetjEinithl2N-ix_ApLMXzV

//	gulp.task('image', function () {
//	    return gulp.src(config.src.image + '/**/*.{png,jpg,gif,ico}')
//	        .pipe(imagemin({
//	            optimizationLevel: 4, //类型：Number  默认：3  取值范围：0-7（优化等级）
//	            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//	            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//	            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//
//	        }))
//	        .pipe(gulp.dest(config.dist.image));
//	});


//其他任务  复制plugins目录和media目录
//	gulp.task('plugins_', function() {
//	    return gulp.src(config.src.image + '/**/*.{jpg,gif,ico}') // 指明源文件路径、并进行文件匹配
//	        .pipe(gulp.dest(config.dist.image));
//
//	});



gulp.task('image', function () {

    gulp.src(config.src.image + '/**/*.png')
        .pipe(tinypng('5AP9misXfetjEinithl2N-ix_ApLMXzV'))
        .pipe(gulp.dest(config.dist.image))

    gulp.src(config.src.image + '/**/*.{jpg,gif,ico}') // 指明源文件路径、并进行文件匹配
        .pipe(gulp.dest(config.dist.image))

})