/**
 * Created by jinglian on 2017/2/25.
 */
var gulp = require("gulp");

// base + glob ==> dest + glob (dest 替换 base）
gulp.task("copy", function () {
    return gulp.src("glob/src/test/*.js", {base: "glob/src"})
        .pipe(gulp.dest("dist"));
});
