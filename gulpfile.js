var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var cleanCss = require("gulp-clean-css");
var imagemin = require( "gulp-imagemin");
gulp.task("copy-sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("copy-css",function(){
	gulp.src("sass/*.css").pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("copy-icon",function(){
	gulp.src("iconfont/*.*").pipe(gulp.dest("dist/iconfont")).pipe(connect.reload());
})
gulp.task("copy-img",function(){
	gulp.src("img/**/*.*").pipe(gulp.dest("dist/img")).pipe(connect.reload());
})
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})
gulp.task("server",function(){ 
	connect.server({
		root:"dist",
		livereload:true 
	});
	gulp.watch("sass/*.scss",["copy-sass"]);
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("sass/*.css",["copy-css"]);
})
/*gulp.task('copy-image',function(){
    gulp.src("img/*.jpg").pipe(gulp.dest("dist/images"));
})*/
/*gulp.task("sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(cleanCss()).pipe(gulp.dest("dist/css"));
})*/
/*gulp.task("concat",function(){
	gulp.src(["js/a.js","js/b.js"]).pipe(concat("common.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("dist/js"))
})
gulp.task("images",function(){
	gulp.src('img/*') 
	.pipe(imagemin()) 
	.pipe(gulp.dest("dist/images"))
 }) 
gulp.task("default", function () {  
    gulp.src("es2016.js")  
    .pipe(babel({"presets":["es2015"]}))  
    .pipe(gulp.dest("dist"));  
}); */