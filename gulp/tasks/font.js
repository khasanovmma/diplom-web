module.exports = ()=>
 $.gulp.task('font',()=>
  $.gulp.src($.path.src.font)
  .pipe($.gp.ttf2woff())
   .pipe($.gulp.dest($.path.build.font)).on('end',$.bs.reload))