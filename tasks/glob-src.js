// module『through』 output the path of matched files to test glob
// module 『minimist』 parse params

var gulp = require("gulp"),
    through = require("through2"),
    parseArgs = require("minimist");

var argv = parseArgs(process.argv.slice(2)),
    basePath = "glob/src/test",
    paramsMapper = {
        single: [basePath + "/*.js"],
        double: ["glob/**"],
        exclude: [basePath + "/*.js", "!" + basePath + "/al*.js"],
        expand: ["glob/src/demo/demo{a..d}.html"],
        likeReg: ["glob/src/demo/demo[a,d].html"]
    },

    globSrc = paramsMapper[argv.src];


gulp.task("glob:test", function () {
    gulp.src(globSrc)
        .pipe(through.obj(function (file, enc, cb) {
            console.dir(file.path);
            cb();
        }));
});