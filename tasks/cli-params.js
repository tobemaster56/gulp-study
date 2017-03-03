//『minimist』parse params from cli
// https://github.com/substack/minimist

var gulp = require("gulp"),
    parseArgs = require("minimist"),
    argv = parseArgs(process.argv.slice(2));


gulp.task("params:test", function () {
    console.dir(argv);
});
