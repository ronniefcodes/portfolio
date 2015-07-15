angular.module('portfolio.directives').directive('gallery', 
	['$filter', function($filter) {
	    return function(scope, element, attrs) {
			var elem = angular.element(element);
			switch(attrs.gallery) {
				case 'expand':
					elem.on('click', function() {
						var project = elem;
						if(elem.not('.project')) project = elem.parents('.project');
						if(!project.is('.project--expanded')) {
							angular.element('.project--expanded').removeClass('project--expanded');
							project.toggleClass('project--expanded');
						}
					});
					break;
				case 'collapse':
					elem.on('click', function(e) {
						e.stopPropagation();
						elem.parent().removeClass('project--expanded');
					});
					break;
			}
			scope.$evalAsync();
		}
	}]);