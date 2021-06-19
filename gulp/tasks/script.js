module.exports = ()=>
 $.gulp.task('js', ()=>
 $.gulp.src($.path.src.js)
  .pipe($.gp.sourcemaps.init())
  .pipe($.gp.include())
  .pipe($.gp.babel({
    presets: ['@babel/preset-env']
  }))
  .pipe($.gp.rename('common.min.js'))
  .pipe($.gp.sourcemaps.write())
  .pipe($.gulp.dest($.path.build.js)).on('end',$.bs.reload))