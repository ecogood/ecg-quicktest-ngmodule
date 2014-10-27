// Generated on 2014-09-30 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('jit-grunt')(grunt, {
    ngconstant: 'grunt-ng-constant',
    filesToJavascript: 'grunt-files-to-javascript-variables',
    protractor: 'grunt-protractor-runner'
  });

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    src: 'src/',
    test: 'test/',
    e2e: 'test/e2e'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    dir: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      options: {
        spawn: false
      },
      js: {
        files: ['<%= dir.src %>/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      sass: {
        files: ['<%= dir.src %>/main.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= dir.src %>/{,*/}*.html',
          '<%= dir.src %>/{,*/}*.css',
          '<%= dir.src %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: {
            appName: 'chromium-browser'
          },
          middleware: function(connect) {
            return [
              connect().use(
                '/src',
                connect.static('./src')
              ),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.test)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function(connect) {
            return [
              connect().use(
                '/src',
                connect.static('./src')
              ),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.test)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= dir.src %>'
        }
      }
    },


    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= dir.src %>/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    sass: {
      options: {
        sourceMap: false
      },
      src: {
        files: {
          '<%= dir.src %>/main.css': '<%= dir.src %>/main.scss'
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
      ],
      test: [
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/unit/karma.conf.js',
        singleRun: true
      }
    },

    protractor: {
      options: {
        configFile: 'node_modules/protractor/referenceConf.js', // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      e2eQuickTest: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: '<%= dir.e2e %>/protractor.conf.js', // Target-specific config file
          args: {} // Target-specific arguments
        }
      }
    },

    /* jshint camelcase:false */
    json_merge: {
      englishFiles: {
        files: {
          '<%= dir.src %>/services/i18n/generated/generated-texts.en.json': [
            '<%= dir.src %>/services/i18n/*en.json',
            'node_modules/ecg-quicktest-texts/data/*en.json'
          ]
        }
      },
      germanFiles: {
        files: {
          '<%= dir.src %>/services/i18n/generated/generated-texts.de.json': [
            '<%= dir.src %>/services/i18n/*de.json',
            'node_modules/ecg-quicktest-texts/data/*de.json'
          ]
        }
      }
    },

    filesToJavascript: {
      texts: {
        options: {
//          inputFilesFolder: 'node_modules/ecg-quicktest-texts/data',
          inputFilesFolder: '<%= dir.src %>/services/i18n/generated',
          inputFilePrefix: 'generated-texts.',
          inputFileExtension: 'json',
          outputBaseFile: '<%= dir.src %>/services/quicktest-texts-base.service.js',
          outputBaseFileVariable: 'ecgQuicktestTexts',
          outputFile: '<%= dir.src %>/services/generated/quicktest-texts.service.js'
        }
      }
    },

    browserify: {
      quicktestModel: {
        files: {
          '<%= dir.src %>/services/generated/quicktest-model.service.js': [
            '<%= dir.src %>/services/quicktest-model-base.service.js'
          ]
        }
      }
    }

  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'json_merge',
      'filesToJavascript',
      'browserify',
      'sass',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'connect:test',
    'protractor'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('hint', [
    'jshint'
  ]);

  grunt.registerTask('convertTexts', [
    'json_merge', 'filesToJavascript'
  ]);

};
