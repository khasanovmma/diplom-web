module.exports = () =>
$.gulp.task('video', () =>
  $.gulp.src($.path.src.video)
  .pipe($.gulp.dest($.path.build.video)).on('end', $.bs.reload))