module.exports = ()=>
 $.gulp.task('css', ()=>
  $.gulp.src($.path.src.css)
  .pipe($.gp.sourcemaps.init())
  .pipe($.gp.sass({outputStyle: 'expanded'}))
  .pipe($.gp.autoprefixer())
  .pipe($.gp.groupCssMediaQueries())
  .pipe($.gp.sass({outputStyle: 'compressed'}))
  .pipe($.gp.rename('main.min.css'))
  .pipe($.gp.sourcemaps.write())
  .pipe($.gulp.dest($.path.build.css)).on('end',$.bs.reload)
  )
