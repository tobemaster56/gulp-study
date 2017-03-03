var gulp = require("gulp"),
    del = require("del");

// 删除文件
gulp.task("clean", function () {
    del("dist/*");
});