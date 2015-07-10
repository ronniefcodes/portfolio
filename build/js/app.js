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
	'ngSanitize']);

app.constant('config', {
	'application_name': 'portfolio',
	'person_id': 1,
	'cache': 'portfolio_cache'
});