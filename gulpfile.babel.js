import gulp from 'gulp';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import watch from 'gulp-watch';

gulp.task('pug', () =>
  gulp.src('./src/pug/**/!(_)*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dest')))

gulp.task('stylus', () =>
  gulp.src('./src/stylus/style.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./dest/css')))

gulp.task('img', () =>
  gulp.src('./src/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dest/img')))

gulp.task('fonts', () => {
  gulp.src('./src/fonts/**/*.**')
    .pipe(gulp.dest('./dest/fonts/'));
});

gulp.task('watch', () => {
  watch('./src/pug/**/*.pug', _=>gulp.start('pug'))
  watch('./src/stylus/**/*.styl', _=>gulp.start('stylus'))
  watch('./src/images/**/*.*', _=>gulp.start('img'))
})

gulp.task('default', ['pug', 'stylus', 'img', 'fonts', 'watch'])
