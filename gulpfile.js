
var gulp = require('gulp');
var sass = require('gulp-sass');
browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function () {
    gulp.src('XMEN/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('XMEN/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass:watch', function () {
    gulp.watch('XMEN/*.scss', ['sass']);
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('XMEN/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('XMEN/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('XMEN/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js

});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'XMEN' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});