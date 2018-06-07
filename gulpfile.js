var gulp = require("gulp");
var browsersync = require("browser-sync");

var Liveserver = require("gulp-live-server");

var browserify = require("browserify");
var reactify = require("reactify");

var source = require("vinyl-source-stream");

gulp.task("live-server", function() {
  var server = new Liveserver("server/main.js");
  server.start();
});



gulp.task("bundle", function() {
  return browserify({
    entries: "app/main.jsx",
    debug: true
  })
    .transform(reactify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("./.tmp"));
});

gulp.task("serve", ["bundle", "live-server"], function() {
  browsersync.init(null, {
    proxy: "http://localhost:8888",
    port: 9001
  });
});