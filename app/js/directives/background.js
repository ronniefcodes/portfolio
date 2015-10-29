angular.module('portfolio.directives')
    .directive('handleBackground', function() {
    return {
        replace: true,
        restrict: 'A',
        scope: {
        	default: '@',
        	available: '@'
        },
        link: function(scope, elem, attrs) {
        	var attribute = 'background';
        	
        	//determine initial background image
        	if(attrs.default !== undefined) {
        		elem.attr(attribute, attrs.default);
        		elem.removeAttr('default');
        	} else elem.attr(attribute, Math.floor(Math.random() * ((attrs.available || 1) - 1) + 1));

        	scope.$on('background.update', function(e, val) {
        		elem.attr(attribute, val);
        	});

        	elem.removeAttr('handle-background');
        }
    };
});