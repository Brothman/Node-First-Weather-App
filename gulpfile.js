const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            proxy: 'http://localhost:4000',
            port: 4000
        }
    })
})

// gulp.task('browserSync', () => {
//     browserSync.init(null, {
//         server: {
//             port: 5000,
//             proxy: "localhost:5000/",
//             host: 'localhost:5000',
//             open: 'false'
//         }
//     })
// })


// gulp.task('watch', gulp.series('browserSync', () => {
//     gulp.watch('frontend/src/*.css');
//     //other watchers
// }));
