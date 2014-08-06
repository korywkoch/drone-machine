module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/lib/class.js', 'src/js/**/*.js'],
        dest: 'lib/js/<%= pkg.name %>.js'
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
          "lib/css/drone-machine.css": "src/less/drone-machine.less"
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
        files: ['src/less/**/*.less', 'src/js/**/*.js', 'spec/**/*.js'], // which files to watch
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
