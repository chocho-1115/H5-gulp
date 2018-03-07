


//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    config = require('./gulp/tasks/config.js');


//新建项目
gulp.task('createProject', function() {
    console.log('!'+config.template+'media')
    return gulp.src([config.template+'**/*','!'+config.template+'media/*','!'+config.template+'media']) // 指明源文件路径、并进行文件匹配
        .pipe(gulp.dest(config.src.progectRoot));// 输出路径
});


//html任务
var html = require('./gulp/tasks/html.js');
//js任务
var js = require('./gulp/tasks/js.js');
//css任务
var css = require('./gulp/tasks/css.js');
// image任务
var image = require('./gulp/tasks/image.js');
//删除发布环境根目录
var delRoot = require('./gulp/tasks/delRoot.js');
//删除发布环境下的发布项目目录
var delProject = require('./gulp/tasks/delProject.js');
//清理发布环境下的多余文件
var cleanProject = require('./gulp/tasks/cleanProject.js');


//其他任务  复制plugins目录和media目录
gulp.task('plugins', function() {
    return gulp.src(config.src.progectRoot+'静态页面/plugins/**/*') // 指明源文件路径、并进行文件匹配
        .pipe(gulp.dest(config.dist.progectRoot+'/plugins'));// 输出路径

});

gulp.task('media', function() {
    return gulp.src(config.src.progectRoot+'静态页面/media/**/*') // 指明源文件路径、并进行文件匹配
            .pipe(gulp.dest(config.dist.progectRoot+'/media'));// 输出路径
});

//gulp.task('default',['jsTask','imageTask','cssTask']); //定义默认任务
gulp.task('default', ['html','css','image','js'], function(){
    //gulp.start('html','css','image','js');
    console.log('======================== 报告老板,项目构建发布成功~! ========================')
    gulp.start('plugins','media');
    
});

//gulp.task('js',['js-min','js-original']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径

