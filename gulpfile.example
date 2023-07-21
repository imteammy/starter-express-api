const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const terser = require("gulp-terser");
const path = require("path");
const babel = require("gulp-babel"); //* 4,5,17,18 เปลี่ยน const เป็น let
const replace = require("gulp-replace");

gulp.task('scripts', function() {
  return gulp.src(['./base/required.js', './base/variable.js', './base/config.js',
  './src/schema/hero.js', './src/schema/lg.js' , './src/schema/all.js',
  './src/model/model.js', './src/model/getmodel.js', './src/controllers/controllers.js',
  './base/route.js', './base/app.js'], {
    allowEmpty : true
  })
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./'));
});
gulp.task('minify', async function(){
setTimeout(() => {
    return gulp.src(['index.js'])
  .pipe(uglify({
    mangle: true,
    compress: {
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true
    }
  }))
  .pipe(replace(/const /g, "let "))
  .pipe(babel())
  .pipe(terser({ mangle: { toplevel: true }, compress:true, sourceMap: true, ie8:true
  }))
  .pipe(gulp.dest('dist'));
  }, 3000);
})

gulp.task('default', gulp.series('scripts'));
