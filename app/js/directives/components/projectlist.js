angular.module('portfolio.directives')
    .directive('portfolioProjectList', function() {
    return {
        replace: true,
        restrict: 'E', 
        scope: {
        	projects: '&'
        },
        templateUrl: "/templates/project-list.html"
    };
});