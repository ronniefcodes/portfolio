angular.module('portfolio.directives')
    .directive('portfolioHeader', function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "/templates/header.html"
    };
});