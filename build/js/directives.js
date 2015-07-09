angular.module('directives').directive('uiAction', function() {
    return function(scope, element, attrs) {
		var elem = angular.element(element);
		switch(attrs.uiAction) {
			case "remove": 
				elem.remove();
				break;
		}
		scope.$evalAsync();
	}
});