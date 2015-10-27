module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		config: {
			port: 9098,
			dist: 'dist',
			build: 'app',
			tmp: '.tmp'
		},
		connect: {
			options: {
				port: '<%= config.port %>',
				open: true,
				hostname: 'localhost',
				base: '<%= config.dist %>',
				middleware: function(connect, options, middlewares) {
		            var modRewrite = require('connect-modrewrite');

		            // enable Angular's HTML5 mode
		            middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.jpg|\\.png$ /index.html [L]']));

		            return middlewares;
				}
			},
			server: {
				options: {
					livereload: true,
					base: '<%= config.dist %>'
				}
			}
		},
		clean: {
			all: ['<%= config.dist %>', '<%= config.tmp %>']
		},
		autoprefixer: {
			options: {
				browsers: [
					'> 1%',
					'last 2 versions',
					'Firefox ESR',
					'Opera 12.1',
					'ie 9',
					'Safari 6'
				]
			},
			dist: {
				src: '<%= config.tmp %>/css/style.css',
				dest: '<%= config.tmp %>/css/style.css'
			}
		},
		copy: {
			etc: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: '<%= config.build %>',
						dest: '<%= config.dist %>',
						src: [
							'images/**', 
							'fonts/**', 
							'content/**', 
							'js/vendor/**', 
							'pages/**', 
							'templates/**', 
							'*.*', '!*.html'
					  	]
					}
				]
			}
		},
		sass: {
			options: {
				roundingPrecision: -1
			},
			sass: {
				files: [{
					expand: true,
					cwd: '<%= config.build %>/scss/',
					src: ['style.scss'],
					dest: '<%= config.tmp %>/css/',
					ext: '.css'
				}]
			},
		},	
		uglify: {
			options: {
				mangle: true
			},
			js: {
				files: {
					'<%= config.dist %>/js/scripts.js': ['<%= config.build %>/js/app.js', 
													'<%= config.build %>/js/filters/**/**.js',
													'<%= config.build %>/js/classes/**/**.js', 
													'<%= config.build %>/js/services/**/**.js', 
													'<%= config.build %>/js/controllers/**/**.js',
													'<%= config.build %>/js/directives/**/**.js' ]
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'<%= config.dist %>/css/style.css': ['<%= config.tmp %>/css/style.css']
				}
			}
		},
		includereplace: {
			html: {
				files: [{
					expand: true,
					cwd: '<%= config.build %>/',
					src: '*.html',
					dest: '<%= config.dist %>/'
				}]
			}
		},
		watch: {
		  options: {
	        livereload: true
	      },
	      data: {
	      	files: ['<%= config.build %>/content/**'],
	      	tasks: ['copy']
	      },
		  images: {
		  	files: ['<%= config.build %>/images/**'],
		  	tasks: ['copy']
		  },
		  sass: {
		    files: ['<%= config.build %>/**/*.scss'],
		    tasks: ['sass', 'autoprefixer', 'cssmin']
		  },
		  js: {
		  	files: ['<%= config.build %>/js/**'],
		  	tasks: ['uglify']
		  },
		  html: {
		  	files: ['<%= config.build %>/**/*.html'],
		  	tasks: ['includereplace', 'copy']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['clean', 'includereplace', 'sass', 'copy', 'autoprefixer', 'cssmin', 'uglify', 'connect', 'watch']);
};

