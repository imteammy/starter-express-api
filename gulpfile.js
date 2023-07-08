const gulp = require('gulp');
const terser = require('gulp-terser');
const path = require('path');
const babel = require('gulp-babel');  //! 4,5,17,18 เปลี่ยน const เป็น let
const replace = require('gulp-replace'); //!

const sourceDirectory = 'src';
const destinationDirectory = 'dist';

gulp.task('minify-js', function() {
  return gulp
    .src([
      path.join(sourceDirectory, '**/*.js'), // JavaScript files in src directory and subdirectories
      'index.js', // Additional file: index.js in the root folder
      'aliases.js' // Additional file: aliases.js in the root folder
    ])
    .pipe(replace(/const /g, 'let ')) //! Replace 'const' with 'let'
    .pipe(babel()) //! Transform the code with Babel
    .pipe(terser({ mangle: { toplevel: true } })) // Minify JavaScript and mangle variable names
    .pipe(gulp.dest(destinationDirectory)); // Destination for the minified files
});

gulp.task('copy-a', function() {
  return gulp
    .src(['package.json', '.env'])
    .pipe(gulp.dest(destinationDirectory));
});

gulp.task('default', gulp.parallel('minify-js', 'copy-a'));
