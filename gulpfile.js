var
    gulp=require("gulp"),
    sync=require("browser-sync").create(),
    del=require("del"),
    plugins=require("gulp-load-plugins")({
        scope:["devDependencies"]
    });
    var IS_DEV =true;

gulp.task("html",function () {
    return gulp.src("src/views/*.html")
        .pipe(plugins.htmlExtend())
        .pipe(gulp.dest("dist"));
});
gulp.task("js",function () {
    return gulp.src("src/js/*.js")
        .pipe( plugins.if(IS_DEV,plugins.sourcemaps.init()) )
        .pipe(plugins.concat("app.min.js"))
        .pipe(plugins.uglify())
        .pipe(gulp.dest("dist/js"));
});
gulp.task("copy",function () {
    return gulp.src([
        "src/all_media/**/*.png",
        "src/all_media/*.png"
    ])
        .pipe(gulp.dest("dist/all_media"))
});

gulp.task("styles:bootie" ,function () {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ]).pipe(plugins.concat("bootie.min.css"))
        .pipe(gulp.dest("dist/css"))
});
gulp.task("js:myJS",function () {
    return gulp.src([
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/knockout/build/output/knockout-latest.js",
        "node_modules/slideout/dist/slideout.min.js",
        "node_modules/jquery-validation/dist/jquery.validate.min.js",
        "node_modules/masonry-layout/dist/masonry.pkgd.min.js"
    ]).pipe(plugins.concat("allDev.min.js"))
        .pipe(gulp.dest("dist/js"))
});

gulp.task("fonts:bootie",function () {
    return gulp.src([
        "node_modules/bootstrap/dist/fonts/*"
    ]).pipe(gulp.dest("dist/fonts"));
});


gulp.task("styles:app",function () {
    return gulp.src("src/css/app.less")
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .pipe(plugins.rename({suffix:".min"}))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream());
});


gulp.task("clean",function (cb) {
    del.sync("dist");
    cb();
});

gulp.task("build",["clean"],function () {
    gulp.start(["html","styles:app","styles:bootie","fonts:bootie","js","js:myJS","copy"]);
});
gulp.task("watch",["build"],function () {
    sync.init({
       server:"dist"
    });
    gulp.watch("src/css/**/*.less",["styles:app"]);
    gulp.watch("dist/css/app.min.css").on("change",sync.reload);

    gulp.watch("src/js/*.js",["js"]);
    gulp.watch("dist/js/*.js").on("change",sync.reload);

    gulp.watch("src/views/**/*.html",["html"]);
    gulp.watch("dist/*.html").on("change",sync.reload);
});
gulp.task("default",["watch"]);