var gulp = require("gulp");
var browsersync = require('browser-sync');

var Liveserver = require("gulp-live-server");

gulp.task("live-server", function() {
  var server = new Liveserver("server/main.js");
  server.start();
});


gulp.task('serve', ['live-server'], function(){
  browsersync.init(null, {
    proxy: "http://localhost:7777",
    port: 9001
  });
});

