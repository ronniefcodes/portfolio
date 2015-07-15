module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		config: {
			port: 9000,
			dist: 'build',
			build: 'src'
		},
		connect: {
			options: {
				port: '<%= config.port %>',
				open: true,
				hostname: 'localhost'
			},
			server: {
				options: {
					livereload: true
				}
			}
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
				src: '<%= config.build %>/css/style.css',
				dest: '<%= config.build %>/css/style.css'
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
							'img/**', 
							'fonts/**', 
							'data/**', 
							'js/vendor/**', 
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
					cwd: '<%= config.build %>/scss',
					src: ['style.scss'],
					dest: '<%= config.build %>/css/',
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
													'<%= config.build %>/js/filters/**.js',
													'<%= config.build %>/js/classes/**.js', 
													'<%= config.build %>/js/services/**.js', 
													'<%= config.build %>/js/controllers/**.js',
													'<%= config.build %>/js/directives/**.js' ]
				}
			}
		},
		cssmin: {
			target: {
				files: {
					'<%= config.dist %>/css/style.css': ['<%= config.build %>/css/style.css']
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
		  	tasks: ['includereplace']
		  },
		  img: {
		  	files: ['<%= config.build %>/img/**'],
		  	tasks: ['copy']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['includereplace', 'sass', 'copy', 'autoprefixer', 'cssmin', 'uglify', 'connect', 'watch']);
};

