global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
      serverDir: './app/dist',
      tasks: require('./gulp/config/tasks.js'),
      src:{
        html: './app/src/*.{html,pug,jade}',
        css:  './app/src/styles/main.scss',
        js:   './app/src/scripts/*.js',
        font: './app/src/fonts/**/*.ttf',
        img:  './app/src/images/*.{gif,jfif,jpg,jpeg,webp,png,tiff}',
        video:  './app/src/video/*.*'
      },
      build:{
        html: './app/dist/',
        css:  './app/dist/styles/',
        js:   './app/dist/scripts/',
        font: './app/dist/fonts/',
        img:  './app/dist/images/',
        video:  './app/dist/video/'
      },
      watch:{
        html: ['./app/src/*.{pug,html,jade}','./app/src/views/**/*.{pug,html,jade}'],
        css:  ['./app/src/styles/*.scss','./app/src/styles/**/*.scss'],
        js:   './app/src/scripts/*.js',
        font: './app/src/fonts/**/*.*',
        img:  './app/src/images/**/*.*',
        video:  './app/src/video/*.*'
      }
    }
  }
  
  $.path.tasks.forEach(task=>require(task)())
  
  $.gulp.task('default',$.gulp.series($.gulp.parallel('html','css','js','img','video','font','watch','serve')))