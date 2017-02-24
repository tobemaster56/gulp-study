# gulp_study

## gulp 学习笔记

#### gulp安装和配置
### 1、安装

```
//全局安装
npm install gulp-cli -g

//在项目中安装，node_modules
npm install --save-dev gulp

//安装gulp 插件
npm install --save-dev gulp-uglify
```

### 2、创建配置文件gulpfile.js
```
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

```
## gulp Api
#### gulp.task(name, fun)
>注册一个 gulp 任务

```
/*
*@param taskname 任务名称
*@param [] 任务依赖前置，必须执行完这个数组的任务，才可以执行任务
*@param fn 任务逻辑
*/
gulp.task("taskName", [taskDep1, taskDep2, ...], fn);
命令行 gulp taskName，即可执行gulp任务
注意：gulp.task('default'，fn)，是默认执行任务，在命令行启动gulp，默认执行动作
也可以直接gulp.task("taskName", [taskDep1, taskDep2, ...]);
// 任务是并行运行的，不是按照顺序
写例子详细解释任务的先后顺序
```

####gulp.src(glob)
>glob 是目标文件的路径，返回一个可读的 stream
```
gulp.src('index.js');
//数组，可以匹配多个路径，！开始表示排除
gulp.src(['js/**/*.js', '!js/**/*.min.js']);
```

####gulp.dest
>dest方法将管道的输出写入文件，同时将这些输出继续输出，所以可以依次调用多次dest方法，将输出写入多个目录。如果有目录不存在，将会被新建

```
gulp.dest("dist/assets")
```

写一个简单的例子，使用src和dest拷贝多个文件


####gulp.watch(glob [, opts], tasks) or gulp.watch(glob [, opts, cb]);

写一个简单的例子，使用gulp.watch


##gulp plugins
[gulp插件官网][1]


  一些常用的插件：
  gulp-concat
  gulp-uglify
  gulp-rename


##一些技巧和方法
####命令行的传参


[大牛的博客][2]


  [1]: http://gulpjs.com/plugins/
  [2]: http://www.cnblogs.com/2050/p/4198792.html