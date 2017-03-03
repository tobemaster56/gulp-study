/*
* 这里展示的是 default 任务，可以直接在终端中输入 gulp 运行
* 非 default 任务，需要 gulp taskName 运行
*
* */
var gulp = require("gulp");
var gulpSequence = require("gulp-sequence");

gulp.task("default", function (cb) {

    setTimeout(function () {
        console.log("default");
        cb();
    }, 3000);
});

gulp.task("task1", function (cb) {
    setTimeout(function () {
        console.log("task1");
        cb();
    }, 5000);
});

gulp.task("task2", function (cb) {
    setTimeout(function () {
        console.log("task2");
        cb();
    }, 3000);
});

// gulp.task("dep", ["task1", "task2", "default"]);

gulp.task("sequence", gulpSequence(["task1", "task2"], ["default"]));
