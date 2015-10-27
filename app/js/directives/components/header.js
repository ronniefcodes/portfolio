angular.module('portfolio.directives')
    .directive('portfolioHeader', ['$document', '$window', function($document, $window) {
    return {
        replace: true,
        restrict: 'E',  
        templateUrl: "/templates/header.html",
        link: function(scope, elem, attrs) {
        	var header = angular.element(elem), 
        		docHeight = $document.outerHeight();
        	angular.element($document).on('scroll', function() {
        		console.log([$window.pageYOffset, docHeight]);
        		if($window.pageYOffset > 1.5*docHeight) header.addClass('header--sticky');
        		else header.removeClass('header--sticky');
        	})
        }
    };
}]);