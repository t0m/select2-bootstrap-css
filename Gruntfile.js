module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/*_test.js']
    }
  });

};