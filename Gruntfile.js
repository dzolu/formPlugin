module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['index.html']
            },
            scripts: {
                files: ['**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass', "autoprefixer"],
            },

        },
        sass: {
            dist: {
                files: {
                    'style.css': 'style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browers: ['> 0.2%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
            },
            css: {
                src: "style.css"
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            with_overrides: {
                options: {
                    curly: false,
                    undef: true,
                },
                files: {
                    src: ['script.js']
                },
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('build', ['sass', "autoprefixer"]);
    grunt.registerTask('default', ['connect', 'watch']);
};
