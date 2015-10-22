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
	'ngSanitize']);

//site configurations
app.constant('config', {
	'application_name': 'portfolio',
	'cache': 'portfolio_cache'
});

//handle routing using HTML5mode
app.config(['$routeProvider', '$locationProvider', '$compileProvider', 'config', 
	function($routeProvider, $locationProvider, $compileProvider, config) {