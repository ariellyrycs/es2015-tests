 'use strict';
let watchify = require('watchify'),
  browserify = require('browserify'),
  babel = require('babelify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps');

let customOpts = {
  entries: [
    './spec/es6/1-arrows.js',
    './spec/es6/2-templates.js',
    './spec/es6/3-defaults.js',
    './spec/es6/4-destructuring.js',
    './spec/es6/5-rest.js',
    './spec/es6/6-spread.js',
    './spec/es6/7-iterators.js',
    './spec/es6/8-generators.js',
    './spec/es6/9-asyncGeneratorSpec.js'
  ],
  debug: true,
  "presets": [ "es2015", "stage-0" ]
};
let opts = Object.assign({}, watchify.args, customOpts);
let b = watchify(browserify(opts).transform(babel));


gulp.task('default', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))//
    .pipe(source('./all.js'))//
    .pipe(buffer())//
    .pipe(sourcemaps.init({loadMaps: true}))//
    .pipe(sourcemaps.write('./'))//
    .pipe(gulp.dest('./spec/es5/'))//;
}
