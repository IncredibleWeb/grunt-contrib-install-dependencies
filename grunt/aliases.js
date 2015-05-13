module.exports = function (grunt) {
    grunt.registerTask('dev', ['jshint']);
    grunt.registerTask('dev_watch', ['watch:dev']);
};