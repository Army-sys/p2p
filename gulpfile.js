// 导入模块 
const { src, dest, parallel,watch } = require('gulp');
const less = require('gulp-less');   //编译插件
const uglify = require("gulp-uglify"); // 压缩js插件
const rename = require("gulp-rename"); // 重命名插件
const cleanCss = require("gulp-clean-css"); // 压缩css插件
const browserSync = require("browser-sync").create(); // 启动服务器插件
const reload = browserSync.reload; // 热加载


// css
function css() {
    return src("./less/*.less")  //处理源文件
      .pipe(less())   //编译
      // .pipe(minifyCSS())
      .pipe(cleanCss()) // 压缩处理
      .pipe(
        rename({
          // 重命名
          suffix: ".min"
        })
      )
  
      .pipe(dest("./dist/css"))
}

// js
function js() {
  return src("./js/*.js") // 要处理的文件源
  
    .pipe(uglify()) // 压缩处理
    .pipe(
      rename({
        // 重命名
        suffix: ".min"
      })
    )
    .pipe(dest("./dist/js")) // 输出
    }

    // 启动服务器
function serve() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3033
  });
}

// 观察者【上帝之眼】
function auto() {
  watch("./less/*.less", css).on("change", reload); // css
  watch("./js/*.js", js).on("change", reload); // js
  watch("**/*.html").on("change", reload) // html
}

// 暴露
exports.css=css;
exports.js=js;
exports.default = parallel(js,css,serve,auto);//没人任务gulp
