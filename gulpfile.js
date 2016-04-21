var gulp = require('gulp');
var gutil = require('gutil');

var jade = require('gulp-jade');

gulp.task('default',['views'],function() {
  gutil.log('default task');
});

gulp.task('views',function() {
  gulp.src('src/views/index/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('build/views/index'));
});