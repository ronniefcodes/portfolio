angular.module('portfolio.directives').directive('sndbxLoader', 
	[function() {
    return {     	
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/loader.html',
    	link: function(scope, element) {
			var elem = angular.element(element), message = elem.find('.loader__message');
			scope.$on('section.load.complete', function() { elem.remove(); });
			scope.$on('section.load.error', function() { message.html('An error has occurred...'); });
			setTimeout(function() {
				message.html('This is taking longer than expected, try refreshing, maybe?');			
			}, 10000);
			scope.$evalAsync();
		}
	}
}]);