var gulp = require("gulp"),
    // https://github.com/substack/minimist
    // 解析命令行参数
    minimist = require("minimist"),
    gulpif = require("gulp-if"),
    del = require("del");
    argv = minimist(process.argv.slice(2));

gulp.task("default", function () {
   console.log(gulp);
});

gulp.task("params", function () {
   // console.dir(argv);
   gulpif(argv.env === 'dev', console.log("dev"));
});

// 删除文件
gulp.task("clear", function () {
    del()
});
