const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload())
    done()
});
gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload())
    done()
});

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
    done()
})


//服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })

    done()
});
// 监听
gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"))
    gulp.watch("sass/*.scss", gulp.series("sass"))
    gulp.watch("js/*.js", gulp.series("js"))

    done()
})

gulp.task("build", gulp.parallel("html", "sass"))
gulp.task("default", gulp.series("build", "server", "watch"))



