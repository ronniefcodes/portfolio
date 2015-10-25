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
			templateUrl: 'pages/home.html'
		},
		experience = {
			title: 'Work Experience',
			templateUrl: 'pages/experience.html',
			menu: {
				title: 'Work'
			}
		},
		projects = {
			title: 'Projects',
			templateUrl: 'pages/projects.html',
			menu: {
				title: 'Projects'
			}
		},
		project = {
			title: '',
			templateUrl: 'pages/project.html'	
		},
		skills = {
			title: 'Skills',
			templateUrl: 'pages/skills.html',
			menu: {
				title: 'Skills'
			}
		},
		contact = {
			title: 'Contact',
			templateUrl: 'pages/contact.html',
			menu: {
				title: 'Contact'
			}
		};

	    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|fax|tel|mailto|chrome-extension):/);
	    $locationProvider.html5Mode(true);
		$routeProvider
			.when('/', home)
			.when('/experience', experience)
			.when('/projects', projects).when('/project/:project', project)
			.when('/skills', skills)
			.when('/contact', contact)
			.otherwise({ redirectTo: '/' });
}]);

app.run(['$rootScope', '$window', '$timeout', '$route', '$location', 'config',
	function($rootScope, $window, $timeout, $route, $location, config) {
		var loaded = false;

		$rootScope.$on('data.load.ok', function() {
			$rootScope.$broadcast('data.load.complete');
		});

		$rootScope.$on('content.load.ok', function() {
			if(!loaded) {
				loaded = true;

				$timeout(function() {
					$rootSCope.$broadcast('content.load.complete');
				});
			}
		})

		//to be fired upon 'page'/view change
		$rootScope.$on('$routeChangeSuccess', function(e, route) {
			if(!config.debug_mode) {
		    	//analytics page tracking
				$window.ga('send', 'pageview', { page: $location.path() });
			}

			//set document title
			if($route.current.title !== '') $rootScope.documentTitle = $route.current.title;
		});
}]);