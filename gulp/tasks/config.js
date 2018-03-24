
//项目名称
var projectName = 'demo1';

//开发环境根目录
var srcRoot = 'src/';
var srcProgectRoot = srcRoot + projectName +'/';
//发布环境根目录
var distRoot = 'dist/';
var distProgectRoot = distRoot + projectName +'/';
module.exports = {
    //模版
    template : 'template/',
    // 开发环境
    src : {
        root: srcRoot,
        progectRoot: srcProgectRoot,
        html: srcProgectRoot + '静态页面/',
        js: srcProgectRoot + '静态页面/js/',
        css: srcProgectRoot + '静态页面/css/',
        image: srcProgectRoot + '静态页面/image/'
    },
    // 发布环境
    dist : {
        root: distRoot,
        progectRoot: distProgectRoot,
        html: distProgectRoot,
        js: distProgectRoot + 'js',
        css: distProgectRoot + 'css',
        image: distProgectRoot + 'image'
    }
}
