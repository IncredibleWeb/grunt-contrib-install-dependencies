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
    function installBower(options) {
        exec('bower install', {
            cwd: options.cwd
        }, function(err, stdout, stderr) {
            console.log('Running bower install...');
            if (!err && err !== null) {
                grunt.log.error(err);
            }

            if (!stdout && !stderr) {
                console.log('No missing packages found.')
            } else {
                console.log(stdout, stderr);
            }

            if (typeof options.callback === 'function') {
                options.callback.call(this, err, stdout, stderr);
            } else {
                grunt.warn('no callback function specified');
            }
        });
    }

    grunt.registerTask('install-client-dependencies', 'Installs client dependencies.', function() {

        // set up async
        var done = this.async();

        // default options
        var options = this.options({
            cwd: './', // default to current directory
            callback: function() { // allow users to set up their own callback
                done();
            }
        });

        // run dependency installers synchronously
        grunt.log.writeln("Installing packages...");
        installBower(options);
    });
};
