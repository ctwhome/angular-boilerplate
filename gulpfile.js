var gulp        = require("gulp");
var plumber 	= require('gulp-plumber');

var sass        = require("gulp-sass");
var autoprefix  = require("gulp-autoprefixer");
var sourcemaps  = require('gulp-sourcemaps')
var uncss       = require('gulp-uncss');
var minifyCSS   =  require('gulp-minify-css');
var rename 		= require('gulp-rename');

var filter      = require('gulp-filter');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
// var concat = require('gulp-concat')
// var uglify = require('gulp-uglify')
// var ngAnnotate = require('gulp-ng-annotate')



/**
 * Sources variables
 */ 
var vars = {
		src: {
			// Sources 
		    scss: 'sass/styles.scss',
	    	html: './app/**/*.html',
	    	js: "./app/**/*.js",
	    	server: "./app"
		},
		des: {
			// output 
			css: './app/css',
	    	js: './app/scripts'
		}
	};


/**
 * Start BrowserSync
 */
gulp.task('browser-sync', function () {
    browserSync({
        server: vars.src.server
    });
});
 

/**
 * Compile sass
 *
 * 1. Create source maps
 * 2. Show sass error in console and BrowserSync for 3 seconds
 * 3. Reload browserSync
 */
 var separator = "\n------------------------------\n";
gulp.task('sass', function () {
    return gulp.src(vars.src.scss)

        .pipe(sourcemaps.init())
            .pipe(sass())
                .on('error', function(err){
                    browserSync.notify(err.message, 3000);
                    var error = "\nSASS ERROR"+separator+ 'Error: '+err.message + '\nFile: '+ err.fileName +'\nLine:'+err.lineNumber +separator;
                    console.log(error);
                    this.emit('end');
                })
        .pipe(sourcemaps.write('./'))        
        .pipe(gulp.dest(vars.des.css))

        .pipe(filter("**/*.css"))
        .pipe(reload({stream:true}));
});

/**
 * Minify CSS
 *
 * 1. Remove Unnecessary Css
 * 2. Autoprefix css
 * 3. Minify css.min
 */ 
gulp.task('minifycss', function() {
  return gulp.src('./app/css/styles.css')
    .pipe(uncss({
            html: ['app/**/*.html']
        }))
    .pipe(autoprefix())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./app/css'))
});


/**
 * Build and minify JS
 */
// gulp.task('js', function () {
//  gulp.src(['src/**/module.js', src.js])
//      .pipe(sourcemaps.init())
//      .pipe(concat('app.js'))
//      .pipe(ngAnnotate())
//      .pipe(uglify())
//      .pipe(sourcemaps.write())
//      .pipe(gulp.dest(dest.js))
// })


// // create a task that ensures the `js` task is complete before
// // reloading browsers
// //gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('watch', browserSync.reload);


/**
 * Default task "gulp"
 */
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch(['app/**/*.js', 'app/**/*.html'], ['watch']);
    // gulp.watch('app/**/*.html', ['watch']);
});


