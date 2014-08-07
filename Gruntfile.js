module.exports = function(grunt) {

  require('jit-grunt')(grunt,  {
    useminPrepare: 'grunt-usemin'
  });

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Configs
    paths: {
      src: 'src',
      dist: 'dist'
    },

    useminPrepare: {
      html: '<%= paths.dist %>/*.html',
      options: {
        dest: '<%= paths.dist %>',
        root: '<%= paths.src %>',
        flow: {
          steps: {'js': ['concat'] },
          post: {}
        }
      }
    },

    usemin: {
      html: '<%= paths.dist %>/*.html'
    },

    clean: {
      tmp: { src: ['.tmp'] },
      dist: { src: ['<%= paths.dist %>'] }
    },

    copy: {
      html: {
        cwd: '<%= paths.src %>/',
        src: '*.html',
        dest: '<%= paths.dist %>/',
        expand: true
      }
    },

    // CSS
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },

        files: {
          '<%= paths.dist %>/css/jquery.form.css': '<%= paths.src %>/scss/jquery.form.scss'
        }
      },
      distMin: {
        options: {
          style: 'compressed'
        },

        files: {
          '<%= paths.dist %>/css/jquery.form.min.css': '<%= paths.src %>/scss/jquery.form.scss'
        }
      }
    },

    // JS
    jshint: {
      options: {
        jshintrc: true,
        force: true
      },
      src: {
        src: ['<%= paths.src %>/js/main.js'],
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        files: {
          '<%= paths.dist %>/js/jquery.form.min.js': ['<%= paths.dist %>/js/jquery.form.js']
        }
      }
    },

    // IMAGES
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= paths.src %>/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= paths.dist %>/img/'
        }]
      }
    },

    notify: {
      scss: {
        options: {
          title: 'Task complete',
          message: 'SCSS compile completed'
        }
      },

      js: {
        options: {
          title: 'Task complete',
          message: 'JS check completed'
        }
      },

      build: {
        options: {
          title: 'Task complete',
          message: 'Build completed successfully'
        }
      }
    },

    // Watch
    watch: {
      scss: {
        files: ['<%= paths.src %>/scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'notify:scss'],
        options: {
          livereload: true
        }
      },

      js: {
        files: ['<%= paths.src %>/js/**/*.js', '!<%= paths.src %>/js/vendor/*.js'],
        tasks: ['jshint', 'notify:js'],
        options: {
          livereload: true
        }
      },

      html: {
        files: ['<%= paths.src %>/*.html'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.registerTask('build', [
    'clean:dist',

    // HTML
    'copy:html',
    'useminPrepare',
    'concat',
    'uglify',
    'usemin',
    'clean:tmp',

    // CSS
    'sass',

    // Images
    'imagemin',

    // Notify
    'notify:build'
  ]);
};

