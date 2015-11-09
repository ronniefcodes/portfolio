angular.module('portfolio.classes', []);
angular.module('portfolio.services', []);
angular.module('portfolio.filters', []);
angular.module('portfolio.controllers', []);
angular.module('portfolio.directives', []);

var app = angular.module('portfolio', 
	['portfolio.services', 
	'portfolio.classes', 
	'portfolio.filters', 
	'portfolio.directives', 
	'portfolio.controllers', 
	'ngRoute',
	'ngSanitize',
	'ng']);

//site configurations
app.constant('config', {
	'application_name': 'portfolio',
	'cache': 'portfolio_cache',
	'debug_mode': true
});

//handle routing using HTML5mode
app.config(['$routeProvider', '$locationProvider', '$compileProvider', 
	function($routeProvider, $locationProvider, $compileProvider) {
		var home = {
			title: 'Home',
			templateUrl: 'pages/home.html',
			page: {
				title: 'Ronnie Cheung - Full Stack Developer'
			}
		},
		projects = {
			title: 'My work',
			templateUrl: 'pages/projects.html',
			menu: {
				title: 'My work'
			},
			page: {
				title: 'My work - Ronnie Cheung - Full Stack Developer'
			}
		},
		project = {
			title: '',
			templateUrl: 'pages/project.html',
			controller: 'ProjectController'
		},
		about = {
			title: 'About me',
			templateUrl: 'pages/about.html',
			menu: {
				title: 'About me'
			},
			page: {
				title: 'About me - Ronnie Cheung - Full Stack Developer'
			}
		};

	    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|fax|tel|mailto|chrome-extension):/);
	    $locationProvider.html5Mode(true);
		$routeProvider
			.when('/', home)
			.when('/about', about)
			.when('/projects', projects).when('/projects/:project', project)
			.otherwise({ redirectTo: '/' });
}]);

app.run(['$rootScope', '$window', '$timeout', '$route', '$location', 'config',
	function($rootScope, $window, $timeout, $route, $location, config) {
		//handle loading classes
		$rootScope.appStatus = 'site--loading';

		$rootScope.$on('data.load.ok', function() { 
			$rootScope.$broadcast('data.load.complete'); 
			$timeout(function() {
				$rootScope.appStatus = 'site--loaded';
			});
		});

		var content_loaded = false;
		$rootScope.$on('content.load.ok', function() {
			if(!content_loaded) {
				content_loaded = true;
				$timeout(function() { $rootSCope.$broadcast('content.load.complete'); });
			}
		})

		$rootScope.$on('background.update.call', function(e, val) {
			$rootScope.$broadcast('background.update', val);
		});

		$rootScope.$on('document.title.change', function(e, title) {
			$rootScope.documentTitle = title + ' - Ronnie Cheung - Full Stack Developer'
			$rootScope.pageClass = "page--project page--" + title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
		});

		//to be fired upon 'page'/view change
		$rootScope.$on('$routeChangeSuccess', function(e, route) {
			if(!config.debug_mode) {
		    	//analytics page tracking
				$window.ga('send', 'pageview', { page: $location.path() });
			}

			if($route.current.title !== 'Home') angular.element('body').addClass('keys--disabled').removeClass('hide-intro');
			else angular.element('body').removeClass('keys--disabled');
			angular.element('body').removeClass('navigation--opened');

			//set document title
			if($route.current.title !== '') $rootScope.documentTitle = $route.current.page.title || $route.current.title;
			$rootScope.pageClass = "page--" + $route.current.title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
		});
}]);