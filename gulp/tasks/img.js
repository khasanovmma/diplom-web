module.exports = () =>
  $.gulp.task('img', () =>
    $.gulp.src($.path.src.img)
    .pipe($.gp.webp())
    .pipe($.gulp.dest($.path.build.img)).on('end', $.bs.reload))