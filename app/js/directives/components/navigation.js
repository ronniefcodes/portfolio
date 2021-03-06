angular.module('portfolio.directives')
    .directive('portfolioNavigation', ['$route', function($route) {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "/templates/navigation.html",
        link: function(scope, elem, attrs) {
        	var menu_items = [], routes = $route.routes;
        	for(var r in routes) {
        		if(routes[r].hasOwnProperty('menu')) {
					menu_items.push({
						url: routes[r].originalPath,
						title: routes[r].menu.title,
						priority: routes[r].menu.priority || 0
					});
        		}
        	}
        	scope.menu = menu_items;

            var element = angular.element(elem);
            element.find('.navigation__toggle').bind('click', function() {
                angular.element('body').toggleClass('navigation--opened');
            });
        }
    };
}]);