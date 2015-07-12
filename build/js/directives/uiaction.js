angular.module('portfolio.directives').directive('uiAction', [ function() {
    return function(scope, element, attrs) {
		var elem = angular.element(element);
		switch(attrs.uiAction) {
			case "remove": 
				scope.$on('content.load.ok', function(e) {
					elem.remove();
				});
				scope.$on('content.load.error', function(e) {
					elem.find('h1').html('An error has occurred...');
				})
				break;
			case "smooth-anchor": 
				elem.on('click', function(e) {
					e.preventDefault();
                    $("body, html").animate({
                        scrollTop: angular.element(elem.attr("href"))[0].offsetTop
                    }, { duration: 1000 });
                    
                    scope.$apply();
				});
				break;
		}
		scope.$evalAsync();
	}
}]);