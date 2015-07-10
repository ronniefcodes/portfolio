angular.module('portfolio.directives').directive('gallery', function() {
    return function(scope, element, attrs) {
		var elem = angular.element(element);
		switch(attrs.gallery) {
			case "expand":
				elem.on('click', function() {
					if(!elem.is(".project--expanded")) elem.toggleClass('project--expanded');
				});
				break;
			case "close":
				elem.on('click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					elem.parent().removeClass('project--expanded');
				});
				break;
		}
		scope.$evalAsync();
	}
});