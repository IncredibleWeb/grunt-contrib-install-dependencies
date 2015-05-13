/*
 * grunt-contrib-install-dependencies
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 Stephen Lautier, contributors
 */
module.exports = function(grunt) {
    'use strict';

    // get the command prompt
    var process = require('child_process');

    grunt.registerTask('install-dependencies', 'Installs project dependencies.', function() {

        // options
        var options = this.options({
            cwd: './' // default to current directory
        });

        grunt.log.writeln("Installing packages...");
        // run dependency installers synchronously
        grunt.task.run('install-dependencies-bower');
    });

    // install bower dependencies
    grunt.registerTask('install-dependencies-bower', 'Installs bower dependencies', function() {
        var done = this.async();
        process.exec('bower install', {
            cwd: options.cwd
        }, function(err, stdout, stderr) {
            console.log(stdout);
            done();
        });
    });

};
