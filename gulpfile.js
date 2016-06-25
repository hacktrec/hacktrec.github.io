const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const cssmin = require('gulp-csso');
const uncss = require('gulp-uncss');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const flatten = require('gulp-flatten');
const rename = require('gulp-rename');
const server = require('gulp-server-livereload');

gulp.task('default',['imagemin','cssopti','jsmin','htmlmin','src-watch'],()=>{
});

gulp.task('serve', ()=>{
  gulp.src('.')
    .pipe(server({
      livereload: true,
      defaultFile: "index.html"
    }));
});

gulp.task('bower-copy',()=>{//Temp task to copy all the min.js and min.css from bower to my defs , i know , I am Lazy :P :D
  gulp.src('bower_components/**/dist/**/*.min.js')
    .pipe(flatten())
    .pipe(gulp.dest('client/dist/js/'))
    .pipe(gulp.dest('client/src/js/'));
  gulp.src('bower_components/**/dist/**/*.min.css')
      .pipe(flatten())
      .pipe(gulp.dest('client/dist/css/'))
      .pipe(gulp.dest('client/src/css/'));
});

gulp.task('imagemin',function(){
  gulp.src('client/src/img/*')
    .pipe(imagemin({use:[imageminMozjpeg({quality:80,quantTable:3})]}))
    .pipe(gulp.dest('client/dist/img/'));
});
gulp.task('cssopti',function(){
  gulp.src('css/home.css')
/*  .pipe(uncss({
    html:['*.html']
  }))//Only keep used CSS*/
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))//Add Browser prefixes to the Used CSS
    .pipe(cssmin())//Minify the CSS with CSSO
    .pipe(rename((path)=>{
                    path.extname = ".min.css";
                    return path;
                    }))
    .pipe(gulp.dest('css/'));
});
gulp.task('jsmin',()=>{
  gulp.src('js/*')
    .pipe(uglify())
    .pipe(rename((path)=>{
                    path.extname = ".min.js";
                    return path;
                    }))
    .pipe(gulp.dest('js/'));
});
gulp.task('htmlmin',()=>{
  gulp.src('client/src/*')
    .pipe(htmlmin({collapseWhitespace: true,
                   removeAttributeQuotes: true,
                   collapseBooleanAttributes: true,
                   removeComments: true
                  }))
    .pipe(gulp.dest('client/dist/'));
});
//Watchers start here
gulp.task('src-watch',()=>{
    var CSSwatcher = gulp.watch('css/*',['cssopti']);
  //  var JSwatcher = gulp.watch('js/*',['jsmin']);
  //  var Imgwatcher = gulp.watch('img/*',['imagemin']);
    //var HTMLwatcher = gulp.watch('client/src/*',['htmlmin']);//Def tasks for HTML here
    CSSwatcher.on('change', function(event) {
      console.log('<CSS>:File ' + event.path + ' was ' + event.type);
    });
  /*  JSwatcher.on('change', function(event) {
      console.log('<JS>:File ' + event.path + ' was ' + event.type);
    });
    Imgwatcher.on('change', function(event) {
      console.log('<IMG>:File ' + event.path + ' was ' + event.type);
    });
    HTMLwatcher.on('change',function(event){
      console.log('<HTML>:File ' + event.path + ' was ' + event.type);
    });*/
});
