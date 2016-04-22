var gulp = require('gulp');
var gutil = require('gulp-util');

var jade = require('gulp-jade');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default',['styles','scripts'],function() {
  gutil.log('default task');
  gulp.src('src/images/**/*')
  .pipe(gulp.dest('build/img'));
});

gulp.task('styles',function() {
  gulp.src('src/styles/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('build/css'));
});

gulp.task('scripts',function() {
  gulp.src('src/scripts/lib/*.js')
  .pipe(concat('lib.min.js'))
  .pipe(gulp.dest('build/js'));
  gulp.src('src/scripts/*.js')
  .pipe(gulp.dest('build/js'));
});

gulp.task('watch',function() {
  gulp.watch('src/',['styles','scripts']);
});