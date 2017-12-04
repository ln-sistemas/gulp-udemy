var gulp = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');

gulp.task('rolo-compressor', function(){
	gulp.src('dev/assets/css/style.css')
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('prod/assets/css/'));
});


gulp.task('sass', function(){
	return gulp.src('dev/assets/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dev/assets/css'));
});


gulp.task('prod', function(){
	gulp.watch('dev/assets/sass/*.scss', ['sass']);
	gulp.watch('dev/assets/css/style.css', ['rolo-compressor']);
});

gulp.task('escutador', function(){
	gulp.watch('dev/assets/css/style.css', ['rolo-compressor']);
});