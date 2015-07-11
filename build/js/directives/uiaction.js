angular.module('portfolio.directives').directive('uiAction', function() {
    return function(scope, element, attrs) {
		var elem = angular.element(element);
		switch(attrs.uiAction) {
			case "remove": 
				scope.$on('content.load.ok', function(e) {
					elem.remove();
				});
				scope.$on('content.load.error', function(e) {
					console.log("Error will robinson");
					elem.find('h1').html('An error has occurred...');
				})
				break;
		}
		scope.$evalAsync();
	}
});