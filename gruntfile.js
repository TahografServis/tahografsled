module.exports = function(grunt){
	var gc = {
		imageNotyfy: __dirname+'\\notify.png',
		minifyHtml: true
	};
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		globalConfig : gc,
		pkg : grunt.file.readJSON('package.json'),
		less: {
			css: {
				files : {
					'src/test/css/main.css' : [
						'src/css/main.less'
					]
				},
				options : {
					compress: true,
					ieCompat: false
				}
			}
		},
		autoprefixer:{
			options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox 16.0', 'Opera 12.1', "Chrome 26.0"],
				cascade: false
			},
			css: {
				expand: true,
				flatten: true,
				src: [
					'src/test/css/main.css'
				],
				dest: 'assets/template/leadingpage/css/'
			}
		},
		uglify : {
			options: {
				ASCIIOnly: true
			},
			main: {
				files: {
					'assets/template/leadingpage/js/main.js': [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/jquery-mousewheel/jquery.mousewheel.js',
						'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
						'bower_components/bootstrap/dist/bootstrap.js',
						'bower_components/fancybox/source/jquery.fancybox.js',
						'bower_components/slick-carousel/slick/slick.js',
						'bower_components/jarallax/jarallax/jarallax.js',
						'bower_components/jarallax/jarallax/jarallax-video.js',
						'src/js/hypher/jquery.hypher.js',
						'src/js/hypher/ru-ru.js',
						'src/js/marq.js',
						'src/js/main.js'
					]
				}
			}
		},
		imagemin: {
			base: {
				options: {
					optimizationLevel: 5,
					//progressive: true,
					//interlaced: true,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/*.{png,jpg,gif,svg}'
						],
						dest: 'assets/template/leadingpage/images/',
						filter: 'isFile'
					}
				]
			},
			css: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/css/*.{png,jpg,gif,svg}'
						],
						dest: 'src/images/bin/',
						filter: 'isFile'
					}
				]
			}
			
		},
		jade: {
			tahograf: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false
					}
				},
				files: {
					"test/tahograf/index.php": [
						"src/html/tahograf/index.jade"
					]
				}
			},
			holod: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false,
					}
				},
				files: {
					"test/holod/index.php": [
						"src/html/holod/index.jade"
					]
				}
			},
			teplo: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false,
					}
				},
				files: {
					"test/teplo/index.php": [
						"src/html/teplo/index.jade"
					]
				}
			},
			driver: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false
					}
				},
				files: {
					"test/driver/index.php": [
						"src/html/driver/index.jade"
					]
				}
			},
			speed: {
				options: {
					pretty: !gc.minifyHtml,
					data: {
						debug: false
					}
				},
				files: {
					"test/speed/index.php": [
						"src/html/speed/index.jade"
					]
				}
			}
		},
		concat: {
			options: {
				separator: '',
			},
			tahograf: {
				src: ['src/php/send.php', 'test/tahograf/index.php'],
				dest: 'dest/tahograf/index.php',
			},
			holod: {
				src: ['src/php/send.php', 'test/holod/index.php'],
				dest: 'dest/holod/index.php',
			},
			teplo: {
				src: ['src/php/send.php', 'test/teplo/index.php'],
				dest: 'dest/teplo/index.php',
			},
			driver: {
				src: ['src/php/send.php', 'test/driver/index.php'],
				dest: 'dest/driver/index.php',
			},
			speed: {
				src: ['src/php/send.php', 'test/speed/index.php'],
				dest: 'dest/speed/index.php',
			}
		},
		ftp_push: {
			draft: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'dest/tahograf',
						src: ['index.php'],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/driver',
						src: ['index.php'],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/holod',
						src: ['index.php'],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/speed',
						src: ['index.php'],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/teplo',
						src: ['index.php'],
						dest: 'teplo.88005500973.ru/'
					}
				]
			},
			html: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'dest/tahograf',
						src: ['index.php','robots.txt'],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/driver',
						src: ['index.php','robots.txt'],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/holod',
						src: ['index.php','robots.txt'],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/speed',
						src: ['index.php','robots.txt'],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'dest/teplo',
						src: ['index.php','robots.txt'],
						dest: 'teplo.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['.htaccess'],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['.htaccess'],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['.htaccess'],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['.htaccess'],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['.htaccess'],
						dest: 'teplo.88005500973.ru/'
					}
				]
			},
			vendor : {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: '',
						src: ['vendor/**/*'],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['vendor/**/*'],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['vendor/**/*'],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['vendor/**/*'],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '',
						src: ['vendor/**/*'],
						dest: 'teplo.88005500973.ru/'
					}
				]
			},
			icons: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'icons',
						src: ['*.*'],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'icons',
						src: ['*.*'],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'icons',
						src: ['*.*'],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'icons',
						src: ['*.*'],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: 'icons',
						src: ['*.*'],
						dest: 'teplo.88005500973.ru/'
					}
				]
			},
			tahografhtml: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'dest/tahograf',
						src: ['index.php'],
						dest: 'tahograf.88005500973.ru/'
					}
				]
			},
			driverhtml: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'dest/driver',
						src: ['index.php'],
						dest: 'driver.88005500973.ru/'
					}
				]
			},
			holodhtml: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'dest/holod',
						src: ['index.php'],
						dest: 'holod.88005500973.ru/'
					}
				]
			},
			speedhtml: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'dest/speed',
						src: ['index.php'],
						dest: 'speed.88005500973.ru/'
					}
				]
			},
			teplohtml: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: 'dest/teplo',
						src: ['index.php'],
						dest: 'teplo.88005500973.ru/'
					}
				]
			},
			css: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/css/*',
						],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/css/*',
						],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/css/*',
						],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/css/*',
						],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/css/*',
						],
						dest: 'teplo.88005500973.ru/'
					},
				]
			},
			fonts: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/fonts/*',
						],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/fonts/*',
						],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/fonts/*',
						],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/fonts/*',
						],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/fonts/*',
						],
						dest: 'teplo.88005500973.ru/'
					},
				]
			},
			js: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/js/*',
						],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/js/*',
						],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/js/*',
						],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/js/*',
						],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/js/*',
						],
						dest: 'teplo.88005500973.ru/'
					},
				]
			},
			images: {
				options: {
					authKey: "serverWork",
					host: "193.124.0.39",
					dest: "/www/",
					port: 21,
					incrementalUpdates: false
				},
				files: [
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/images/*',
						],
						dest: 'tahograf.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/images/*',
						],
						dest: 'driver.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/images/*',
						],
						dest: 'holod.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/images/*',
						],
						dest: 'speed.88005500973.ru/'
					},
					{
						expand: true,
						cwd: '.',
						src: [
							'assets/template/leadingpage/images/*',
						],
						dest: 'teplo.88005500973.ru/'
					},
				]
			},
		},
		watch: {
			options: {
				livereload: true,
			},
			tahografhtml: {
				files: [
					'src/html/tahograf/*.jade',
					'src/html/includes/tahograf/*.jade'
				],
				tasks: ["jade:tahograf","concat","ftp_push:tahografhtml","notify:done"]
			},
			driverhtml: {
				files: [
					'src/html/driver/*.jade',
					'src/html/includes/driver/*.jade'
				],
				tasks: ["jade:driver","concat","ftp_push:driverhtml","notify:done"]
			},
			holodhtml: {
				files: [
					'src/html/holod/*.jade',
					'src/html/includes/holod/*.jade'
				],
				tasks: ["jade:holod","concat","ftp_push:holodhtml","notify:done"]
			},
			teplohtml: {
				files: [
					'src/html/teplo/*.jade',
					'src/html/includes/teplo/*.jade'
				],
				tasks: ["jade:teplo","concat","ftp_push:teplohtml","notify:done"]
			},
			speedhtml: {
				files: [
					'src/html/speed/*.jade',
					'src/html/includes/speed/*.jade'
				],
				tasks: ["jade:speed","concat","ftp_push:speedhtml","notify:done"]
			},
			php: {
				files: [
					'src/php/*.php',
					'src/html/*.jade',
					'src/html/includes/*.jade'
				],
				tasks: ["jade","concat","ftp_push:html","notify:done"]
			},
			js: {
				files: [
					'src/js/*.js'
				],
				tasks: ['notify:watch', 'uglify','ftp_push:js','notify:done']
			},
			css: {
				files: [
					'src/css/**/*.{css,less}',
				],
				tasks: ['notify:watch', 'less', 'autoprefixer','ftp_push:css','notify:done']
			},
			fonts: {
				files: [
					'assets/template/leadingpage/fonts/*',
				],
				tasks: ['notify:watch', 'ftp_push:fonts','notify:done']
			},
			images: {
				files: [
					'src/images/*.{png,jpg,gif,svg}',
					'src/images/css/*.{png,jpg,gif,svg}'
				],
				tasks: ['notify:watch', 'imagemin', 'less', 'autoprefixer','ftp_push:images','notify:done']
			},
			icons: {
				files: [
					'icons/*.*'
				],
				tasks: ['notify:watch', 'ftp_push:icons','notify:done']
			},
			vendor: {
				files: [
					'vendor/**/*.*'
				],
				tasks: ['notify:watch', 'ftp_push:vendor','notify:done']
			}
		},
		notify: {
			watch: {
				options: {
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: 'Запуск',
					image: '<%= globalConfig.imageNotyfy %>'
				}
			},
			done: {
				options: { 
					title: "<%= pkg.name %> v<%= pkg.version %>",
					message: "Успешно Завершено",
					image: '<%= globalConfig.imageNotyfy %>'
				}
			}
		}
	});
	grunt.registerTask('default', 	['notify:watch','imagemin', 'less', 'autoprefixer', 'uglify','jade','concat','ftp_push','notify:done']);
	
	grunt.registerTask('draft', 	['notify:watch','less','autoprefixer','uglify','jade','concat','ftp_push:draft','ftp_push:js','ftp_push:css','notify:done']);
	
	grunt.registerTask('light', 	['notify:watch','less', 'autoprefixer', 'uglify','jade','concat','ftp_push','notify:done']);
	grunt.registerTask('html',		['notify:watch',"jade","concat","ftp_push:draft","notify:done"]);
	grunt.registerTask('dev', 		['watch']);
	
}