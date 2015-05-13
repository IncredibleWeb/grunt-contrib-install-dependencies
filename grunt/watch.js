module.exports = {
    dev: {
        files: ['<%= paths.src %>/**/*.js'],
        tasks: ['dev'],
        options: {
            livereload: true
        }
    },
    build: {
        files: ['<%= paths.src %>/**/*.js', '<%= paths.vendor %>/**/*.js'],
        tasks: ['build', 'docs'],
        options: {
            livereload: true
        }
    },
    test: {
        files: ['<%= paths.src %>/**/*.js', '<%= paths.vendor %>/**/*.js', '<%= paths.test_specs %>/**/*.js'],
        tasks: ['test'],
        options: {
            livereload: true
        }
    },
    demo: {
        files: ['<%= paths.src %>/**/*.js', '<%= paths.vendor %>/**/*.js', '<%= paths.demo %>/**/*.js'],
        tasks: ['demo'],
        options: {
            livereload: true
        }
    }
};
