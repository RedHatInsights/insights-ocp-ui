const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const config = require('./config');

let serverSrc = 'server.js';
 
gulp.task('default', ['bsync'], () => {});

gulp.task('static', () => {
    serverSrc = 'server-static.js';
    gulp.start('default');
});

gulp.task('bsync', ['nodemon'], () => {
    browserSync.init(null, {
        proxy: 'http://localhost:' + config.port,
        files: ['app/**/*/*.*'],
        port: 7000
    });
});

gulp.task('nodemon', (done) => {
    let started = false;
    return nodemon({
        script: serverSrc,
        ext: 'js jade json'
    }).on('start', () => {
        if (!started) {
            setTimeout(function() {
                started = true;
                done();
            }, 3000);

        }
    });
});
