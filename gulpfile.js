const gulp      = require( 'gulp' );
var sass        = require('gulp-sass')(require('sass'));
const minify    = require( 'gulp-minify' );
const concat    = require( 'gulp-concat' );
sass.compiler   = require( 'node-sass' );
const webserver = require( 'gulp-webserver' );
const purgecss = require('gulp-purgecss')


gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			fallback: 'index.html',
			livereload: true,
			port: 8080,
			directoryListing: {
				enable: false,
				path: './'
			},
			open: true,
		}));
});

gulp.task('sass', function() {
	return gulp.src('./build/sass/main.scss')
		.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./assets/css/'));
});

gulp.task('js', function() {
	return gulp.src([
		//'./node_modules/bootstrap/dist/js/bootstrap.bundle.js',
		'node_modules/vanilla-lazyload/dist/lazyload.js',
		'./build/js/main.js'
	])
		.pipe(concat('all.js'))
		.pipe(minify())
		.pipe(gulp.dest('./assets/js/'))
});


//Fonts
gulp.task('fonts', function() {
	return gulp.src([
		//'node_modules/@fortawesome/fontawesome-free/webfonts/*',
		'build/webfonts/*'
	])
		.pipe(gulp.dest('assets/webfonts/'));
});

// Images
gulp.task('images', function() {
	return gulp.src([
		'./build/img/**',
	])
		.pipe(gulp.dest('assets/img/'));
});

gulp.task('sass-watch', () => {
	gulp.watch(['./build/scss/*.scss'], (done) => {
		gulp.series(['sass'])(done);
	});
});

gulp.task('watch', () => {
	gulp.watch(['./build/sass/*.scss', './build/img/**', './build/js/**'], (done) => {
		gulp.series(['run'])(done);
	});
});

gulp.task('purgecss', () => {
	return gulp.src('./assets/css/main.css')
		.pipe(purgecss({
			content: ['index.html']
		}))
		.pipe(gulp.dest('./dist/css/'))
})

gulp.task('run', gulp.parallel('sass', 'js', 'images','watch', 'fonts'));
gulp.task('build', gulp.parallel('sass', 'js', 'images', 'fonts'));
gulp.task('run-sass', gulp.parallel( 'sass-watch'));