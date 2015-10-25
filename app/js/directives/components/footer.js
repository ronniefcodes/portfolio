angular.module('portfolio.directives')
    .directive('portfolioFooter', function() {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "/templates/footer.html"
    };
});