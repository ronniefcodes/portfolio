angular.module('portfolio.directives')
    .directive('portfolioProjectList', function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "/templates/project-list.html",
        link: function(scope, elem, attrs) {
        	scope.active_index = 0;

        	scope.projectNav = function(increment) {
        		scope.active_index += increment;
        		console.log(scope.active_index);
        	};
        }
    };
});