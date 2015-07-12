angular.module('portfolio.directives').directive('gallery', 
	['$filter', function($filter) {
	    return function(scope, element, attrs) {
			var elem = angular.element(element);
			switch(attrs.gallery) {
				case "expand":
					elem.on('click', function() {
						if(!elem.parent().is(".project--expanded")) 
							elem.parent().toggleClass('project--expanded');
					});
					break;
				case "collapse":
					elem.on('click', function(e) {
						e.stopPropagation();
						elem.parent().removeClass('project--expanded');
					});
					break;
			}
			scope.$evalAsync();
		}
	}]);