angular.module('portfolio.directives').directive('uiAction', function() {
    return function(scope, element, attrs) {
		var elem = angular.element(element);
		switch(attrs.uiAction) {
			case "remove": 
				scope.$on('content.loaded', function(e) {
					elem.remove();
				});
				break;
		}
		scope.$evalAsync();
	}
});