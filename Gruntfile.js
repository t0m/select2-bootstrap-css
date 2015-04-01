module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/*_test.js']
    },

    sass: {
      options: {
        style: 'expanded',
        sourcemap: 'none'
      },
      dist: {
        files: {
          '_jekyll/select2-bootstrap.css': 'lib/build.scss',
          'docs/select2-bootstrap.css': 'lib/build.scss',
          'select2-bootstrap.css': 'lib/build.scss'
        }
      },
      test: {
        files: {
          'tmp/select2-bootstrap.css': 'lib/build.scss'
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', '*.json']
    },

    bump: {
      options: {
        files: ['package.json', 'bower.json', 'lib/select2-bootstrap/version.rb'],
        push: false
      }
    }

  });

};
