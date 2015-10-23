angular.module('portfolio.services').service("TypeService", function() {
	this.loadArrayWithType = function(array, type) {	
		var type_specific = [];
		if(array !== null && array !== undefined) {
			if(this.isArray(array) && array.length > 0) {
				for(var i = 0, len = array.length; i < len; i++) {
					if(array[i] !== undefined) {
						if(array[i] instanceof type) type_specific.push(array[i]);
						else type_specific.push(new type(array[i]));
					}
				}
			} else {
				if(array instanceof type) type_specific = [ array ];
				else type_specific = new type(array);
			}
		}
		return type_specific;
	}
	
	this.isArray = function(obj) {
		return ('isArray' in Array) ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
	}
});