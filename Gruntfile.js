module.exports = function (grunt) {
  const sass = require("node-sass");

  require("jit-grunt")(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          "css/style.css": "css/styles.scss",
        },
      },
    },

    watch: {
      files: "css/*.scss",
      tasks: ["sass"],
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ["css/*.css", "*.html", "js/*.js"],
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./",
          },
        },
      },
    },

    copy: {
      html: {
        files: [
          {
            //for html
            expand: true,
            dot: true,
            cwd: "./",
            src: ["*.html"],
            dest: "dist",
          },
        ],
      },
      fonts: {
        files: [
          {
            //for font-awesome
            expand: true,
            dot: true,
            cwd: "node_modules/font-awesome",
            src: ["fonts/*.*"],
            dest: "dist",
          },
        ],
      },
    },

    clean: {
      build: {
        src: ["dist/"],
      },
    },
  });

  grunt.registerTask("css", ["sass"]);
  grunt.registerTask("default", ["browserSync", "watch"]);
};
