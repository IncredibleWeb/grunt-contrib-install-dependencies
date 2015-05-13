/*
 * grunt-contrib-install-dependencies
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 Stephen Lautier, contributors
 */
module.exports = function(grunt) {
    'use strict';

    // get the command prompt
    var exec = require('child_process').exec;

    // install bower
    function installBower(options, callback) {
        exec('bower install', {
            cwd: options.cwd
        }, function(err, stdout, stderr) {
            console.log('bower install');
            if (!err) {
                grunt.log.error(err);
            }
            console.log(stdout);

            if (typeof options.callback === 'function') {
                options.callback.call(this, err, stdout, stderr, cb);
            } else {
                grunt.warn('no callback function specified');
            }
        });
    }

    grunt.registerTask('install-client-dependencies', 'Installs client dependencies.', function() {

        // default options
        var options = this.options({
            cwd: '.\\' // default to current directory
        });

        // set up async
        var done = this.async();

        // run dependency installers synchronously
        grunt.log.writeln("Installing packages...");
        installBower(options, function() {
            // inform grunt the task has completed
            done();
        });
    });
};
