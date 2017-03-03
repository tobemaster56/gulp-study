/**
 * Created by jinglian on 2017/2/25.
 */
var gulp = require("gulp");

gulp.task("watch", function () {
    gulp.watch("glob/gl*.js", function (event) {
        console.dir(event);
    });
});