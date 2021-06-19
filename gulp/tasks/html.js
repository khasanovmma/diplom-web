module.exports = () =>
$.gulp.task('html', ()=>
$.gulp.src($.path.src.html)
  .pipe($.gp.pug())
  .pipe($.gp.include())
  .pipe($.gulp.dest($.path.build.html)).on('end',$.bs.reload))