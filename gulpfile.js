var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');;
var filter      = require('gulp-filter');
var reload      = browserSync.reload;


// Sources variables
var src = {
    scss: 'sass/**/*.scss',
    css:  'app/css',
    html: 'app/*.html'
};

//  Output variables
var output = {
	css: 
}



// Build and minify 
gulp.task('js', function () {
	gulp.src(['src/**/module.js', 'src/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('.'))
})

// create a task that ensures the `js` task is complete before
// reloading browsers
//gulp.task('js-watch', ['js'], browserSync.reload);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(reload({stream: true}));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });
	gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
    gulp.watch("app/*.js").on('change', reload);
});

gulp.task('default', ['serve']);