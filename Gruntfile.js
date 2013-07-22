module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-version');

  // Some boilerplate for grunt version.
  // Provides `grunt version:bump:patch` etc.
  var versions = {}
  grunt.util._.each(['patch', 'minor', 'major'], function(release) {
    versions[release] = {
      options: {release: release},
      src: ['package.json', 'bower.json']
    }
  });

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/*_test.js']
    },
    
    sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
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

    version: grunt.util._.extend(versions, {
      options: {
        pkg: grunt.file.readJSON('package.json')
      }
    })

  });

};