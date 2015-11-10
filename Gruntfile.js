module.exports = function(grunt) {

  var options = {};

  options.jsFiles = {
      'app/dist/js/main.js': [
          'app/src/js/lib/bootstrap.min.js',
          'app/src/js/lib/jquery-1.11.3.min.js',
          'app/src/js/lib/angular.min.js',
          'app/src/js/lib/angular-route.min.js',
          'app/src/js/lib/angular-sanitize.min.js',
          'app/src/js/app.js',
          'app/src/js/app/controller.js',
          'app/src/js/app/getData.js',
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
    htmlmin: {
        prod: {
            options: options.htmlmin,
            files: {
                'app/index.html': 'app/index.html'
            }
        }
    },
    // This is where we configure JSHint
    jshint: {
      all: [
           'Gruntfile.js',
           'app/src/js/app/*.js'
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
              'app/src/css/style.css' : 'app/src/less/style.less'
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
    // copy: {
    //   all: {
    //       cwd: '',
    //       src: '',
    //       dest: '',
    //       expand: true
    //   }
    // },
    watch: {
      scripts: {
        files: ['app/**/*', '!**/dist/**', '!**app/src/css/style.css**'],
        tasks: ['jshint', 'less', 'concat']
      }
    }
  });
  // Each plugin must be loaded following this pattern
  // grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('start', ['less', 'concat']);
  grunt.registerTask('dev', ['jshint', 'less', 'concat', 'watch']);
  grunt.registerTask('prod', ['htmlmin:prod', 'jshint', 'less', 'concat', 'uglify:prod', 'cssmin']);

};