module.exports = function(grunt) {

  var options = {};

  options.jsFiles = {
      'app/dist/js/main.js': [
          'app/src/js/libs/jquery-1.11.3.min.js',
          'app/src/js/libs/bootstrap.min.js',
          'app/src/js/libs/angular.min.js',
          'app/src/js/libs/angular-sanitize.min.js',
          'app/src/js/utilities.js',
          'app/src/js/app.js',
          'app/src/js/controller.js',
          'app/src/js/getData.js',
          'app/src/js/dataHandler.js'
      ]
  };

  options.cssFiles = {
      'app/dist/css/style.css': [
          'app/src/css/bootstrap.min.css',
          'app/src/css/style.css'
      ]
  };

  // Project configuration.
  grunt.initConfig({
    // This line makes your node configurations available for use
    pkg: grunt.file.readJSON('package.json'),
    // htmllint: {
    //     all: 'app/index.html'
    // },
    // This is where we configure JSHint
    jshint: {
      all: [
           'Gruntfile.js',
           'app/src/js/*.js'
           ]
    },
    concat: {
      all: {
        files: [options.jsFiles, options.cssFiles]
      }
    },
    uglify: {
        prod: {
            files: options.jsFiles
        }
    },
    less: {
        all: {
          files: {
              'app/src/css/style.css' : 'app/src/css/less/style.less'
          }
      }
    },
    cssmin: {
        all: {
            files: {
                'app/dist/css/style.css' : 'app/dist/css/style.css'
            }
        }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'app/**/*', '!**/dist/**', '!**app/src/css/style.css**'],
        tasks: ['jshint', 'less', 'concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('start', ['less', 'concat']);
  grunt.registerTask('dev', ['jshint', 'less', 'concat', 'watch']);
  grunt.registerTask('prod', ['jshint', 'less', 'concat', 'uglify:prod', 'cssmin']);

};