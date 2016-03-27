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
    './spec/es6/5-iterators.js',
    './spec/es6/6-generators.js'
  ],
  debug: true
};
let bebelOpts = {optional: ['runtime']};
let opts = Object.assign({}, watchify.args, customOpts, bebelOpts);
let b = watchify(browserify(opts).transform(babel.configure(bebelOpts)));




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
