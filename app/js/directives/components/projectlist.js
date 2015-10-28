angular.module('portfolio.directives')
    .directive('portfolioProjectList', function() {
    return {
        replace: true,
        restrict: 'E', 
        templateUrl: "/templates/project-list.html"
    };
});