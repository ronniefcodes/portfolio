angular.module('portfolio.services').service("TypeService", function() {
	this.loadArrayWithType = function(array, type) {		
		var type_specific = [];

		if(array != null && array.length > 0) {
			for(var i = 0; i < array.length; i++) {
				if(array[i] instanceof type)
					type_specific.push(array[i]);
			}
		}

		if(array instanceof type)
			type_specific = [ array ];

		return type_specific;
	}
	
	this.isArray = function(obj) {
		return ('isArray' in Array) ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
	}
});