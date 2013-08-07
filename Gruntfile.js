module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },


    sass: {
        dist: {
            files: {
                'build/css/<%= pkg.name %>.css': 'src/css/<%= pkg.name %>.sass'
            }
        }
    },

    watch: {
        scripts: {
            files: ['src/**/*.js'],
            tasks: ['uglify'],
            options: {
                spawn: false,
                livereload: true
            }
        },

        sass: {
            files: ['src/css/*.sass'],
            tasks: ['sass']
        },

        livereload: {
            options: {
                livereload: true
            },
            files: ['build/css/*']
        }
    }
  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // load plugin for sass prepocessor
  grunt.loadNpmTasks('grunt-contrib-sass');

  // load plugin for watching file changes
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};
