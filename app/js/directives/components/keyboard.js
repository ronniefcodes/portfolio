angular.module('portfolio.directives')
    .directive('portfolioKeyboard', ['$timeout', function($timeout) {
    return {
        replace: true,
        restrict: 'E', 
        templateUrl: "/templates/keyboard.html",
        link: function(scope, elem, attrs) {
        	var keys = [{
        		class: 'key--left',
        		trigger: '37',
        		event: function() {
                    changeBackground(-1);
        		}
        	}, {
        		class: 'key--down',
        		trigger: '40',
        		event: function() {
        			var body = angular.element('body');
        			body.addClass('hide-intro');
        		}
        	}, {
        		class: 'key--right',
        		trigger: '39',
        		event: function() {
                    changeBackground(1);
        		}	
        	}];

            function changeBackground(increment) {                
                var parent = angular.element(elem.parents('.section')),
                    background = parseInt(parent.attr('background'))
                    available_images = parseInt(parent.attr('available'));

                background += increment;
                if(background === 0) {
                    background = available_images;
                }
                if(background > available_images) {
                    background = 1;
                }

                scope.$emit('background.update.call', background);
                //parent.attr('background', background);
            }

        	for(var i = 0, len = keys.length; i < len; i++) {
        		var key = angular.element(document.createElement('div'));
        		key.addClass('key' + (keys[i].class !== '' ? ' ' + keys[i].class : ''));
        		key.bind('click', keys[i].event);
        		angular.element(elem).append(key);
        	}

    		$('html').bind('keyup', function(e) {
    			var code = e.keyCode || e.which;
    			for(var i = 0, len = keys.length; i < len; i++) {
    				if(code == keys[i].trigger) {
                        var key = angular.element(document.getElementsByClassName(keys[i].class));
                        key.addClass('key--pressed');
                        keys[i].event();
                        $timeout(function() { key.removeClass('key--pressed'); }, 150);
                    }
    			}
    		})
        }
    };
}]);