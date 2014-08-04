module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/lib/class.js', 'js/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "dist/css/drone-machine.css": "less/drone-machine.less"
        }
      }
    },
    // Configure a mocha test task
    mocha: {
      test: {
        options: {
          reporter: 'Spec',
          run: true
        },
        src: ['spec/**/*.html']
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less', 'js/**/*.js', 'spec/**/*.js'], // which files to watch
        tasks: ['less', 'concat', 'mocha'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'less', 'mocha', 'watch']);
};
