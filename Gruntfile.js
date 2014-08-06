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
          steps: {'js': ['concat'], 'css': ['concat'] },
          post: {}
        }
      }
    },

    usemin: {
      html: '<%= paths.dist %>/*.html'
    },

    autoprefixer: {
      options: {
        cascade: true
      },

      dist: {
        expand: true,
        flatten: true,
        src: '<%= paths.dist %>/css/*.css',
        dest: '<%= paths.dist %>/css/'
      }
    },

    // JS
    copy: {
      html: {
        cwd: '<%= paths.src %>/',
        src: '*.html',
        dest: '<%= paths.dist %>/',
        expand: true
      }
    },

    jshint: {
      options: {
        jshintrc: true,
        force: true
      },
      src: {
        src: ['<%= paths.src %>/js/main.js'],
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
      css: {
        files: ['<%= paths.src %>/css/**/*.css'],
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
    // HTML
    'copy:html',
    'useminPrepare',
    'concat',
    'usemin',

    // CSS
    'autoprefixer:dist',

    // Images
    'imagemin',

    // Notify
    'notify:build'
  ]);
};

