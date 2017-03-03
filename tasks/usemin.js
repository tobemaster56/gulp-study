/**
 * Created by jinglian on 2017/2/26.
 */
var gulp = require("gulp"),
    rev = require("gulp-rev"),
    gulpif= require("gulp-if"),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-clean-css"),
    usemin = require("gulp-usemin");


gulp.task("mini-index", function () {
   return gulp.src("useref/index.html")
       .pipe(usemin({
           css: [minifyCss(), rev()],
           js: [uglify(), rev()]
       }))
       .pipe(gulp.dest("dist"));
});