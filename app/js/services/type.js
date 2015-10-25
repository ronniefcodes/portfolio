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
			}
		}
		return type_specific;
	}

	this.replaceIdWithObject = function(ids, objs) {
		var output = [];
		for(var i = 0, len = ids.length; i < len; i++) {
			for(var j = 0, len2 = objs.length; j < len2; j++) {
				if(objs[j].id == ids[i]) output.push(objs[j]);
			}
		}
		return output;
	}
	
	this.isArray = function(obj) {
		return ('isArray' in Array) ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
	}
});