angular.module('classes', []);
angular.module('services', []);
angular.module('filters', []);
angular.module('controllers', []);
angular.module('directives', []);

var app = angular.module('portfolio', ['services', 'classes', 'filters', 'directives', 'controllers']);

app.constant('config', {
	'application_name': 'portfolio'
});