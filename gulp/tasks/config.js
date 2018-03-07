
//发布环境项目名称
var distProName = '3333';

//开发环境项目名称
var srcProName = '3333';


//开发环境根目录
var srcRoot = 'src/';
var srcProgectRoot = srcRoot + srcProName +'/';
//发布环境根目录
var distRoot = 'dist/';
var distProgectRoot = distRoot + distProName +'/';
module.exports = {
    //模版
    template : 'H5-template/',
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
