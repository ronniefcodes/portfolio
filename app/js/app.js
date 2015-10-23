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
	'cache': 'portfolio_cache'
});

//handle routing using HTML5mode
app.config(['$routeProvider', '$locationProvider', '$compileProvider', 
	function($routeProvider, $locationProvider, $compileProvider) {
		var home = {
			title: '',
			templateUrl: 'pages/home.html',
			menu: 'Home'
		},
		experience = {
			title: '',
			templateUrl: 'pages/experience.html',
			menu: 'Work'
		},
		projects = {
			title: '',
			templateUrl: 'pages/projects.html',
			menu: 'Projects'
		},
		project = {
			title: '',
			templateUrl: 'pages/project.html'	
		},
		skills = {
			title: '',
			templateUrl: 'pages/skills.html',
			menu: 'Skills'
		},
		contact = {
			title: '',
			templateUrl: 'pages/contact.html',
			menu: 'Contact'
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

app.run(['$rootScope', '$window', '$timeout', '$route', '$location', 
	function($rootScope, $window, $timeout, $route, $location) {
}]);