'use strict';

module.exports = function(gruntConfig) { //can be an anonymous fn
    gruntConfig.initConfig({

      //  clean: ['build/'],
       //
       //
      //   concat: {
      //       alljs: {
      //           options: {
      //               sourceMap: true
      //           },
      //           src: ['src/js/shopular.module.js', 'src/js/**/*.js'],
      //           dest: 'build/js/app.js'
      //       }
      //   },
       //
       //
      //   babel: {
      //       all: {
      //           options: {
      //               presets: ['es2015'],
      //               sourceMap: true //maps the sourcecode we are converting
      //           },
      //           files: {
      //               'build/js/app.js': 'build/js/app.js'
      //           }
       //
      //       }
      //   },
       //
       //
      //   sass: {
      //       all: {
      //           files: {
      //               //destination file       //source file
      //               'build/style.css': 'src/sass/main.scss'
       //
      //           }
      //       }
      //   },

        // jshint:{
        //   source:{
        //     options:{
        //       'predef': ['angular'],
        //       jshintrc:'.jshintrc'
        //     },
        //       files:{
        //           src:['src/**/*.js']
        //       },
        //     }
        //   },

        karma: {
            all: {
                options: {
                    frameworks: ['mocha', 'chai'],
                    browsers: ['Chrome'],
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/shopular.module.js',
                        'src/js/**/*.js',
                        'test/**/*.spec.js'
                    ],
                    singleRun: true,
                    preprocessors: {
                        'src/js/**/*.js': ['coverage']
                    },
                    reporters: ['dots', 'coverage'], //for coverage
                    coverageReporter: {
                        type: 'text-summary'
                    }
                }
            }
        }
//
//       copy: {
//             copyhtml: {
//                 files: [{
//                     cwd: 'src', //start from 'src'
//                     src: ['*.html'],
//                     dest: 'build/',
//                     expand: true
//                 }]
//
//             }
//         },
//
    });
//
//     require('load-grunt-tasks')(gruntConfig);
     gruntConfig.loadNpmTasks('grunt-karma');
//     gruntConfig.loadNpmTasks('grunt-babel');
//     gruntConfig.loadNpmTasks('grunt-contrib-concat');
     gruntConfig.registerTask('build', ['karma']);
 };
