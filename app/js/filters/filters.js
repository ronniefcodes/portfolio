angular.module('portfolio.filters').filter('findByFields', function() {
	return function(array, values, field) {
		if(array == null || array == undefined) return [];
		if(field == null || field == undefined) field = 'id';
		var elems = [];
		for(var i = 0; i < array.length; i++) {
			if(array[i].hasOwnProperty(field)) {
				for(var j = 0, len = values.length; j < len; j++) {
					if(array[i][field] === values[j]) {
						elems.push(array[i]);
					}
				}
			}
		}
		return elems;
	}
});

angular.module('portfolio.filters').filter('findByField', function() {
	return function(array, value, field) {
		if(array == null || array == undefined) return null;
		if(field == null || field == undefined) field = 'id';
		for(var i = 0; i < array.length; i++) {
			if(array[i].hasOwnProperty(field)) {
				if(typeof(value) === 'number') {
					if(array[i][field] === value) 
						return array[i];
				} else {
					if(array[i][field].toUpperCase() === value.toUpperCase()) 
						return array[i];
				}
			}
		}
		return null;
	}
});

angular.module('portfolio.filters').filter('findById', 
	['$filter', function($filter) {
	return function(array, id) {
		return $filter('findByField')(array, id);
	}
}]);

angular.module('portfolio.filters').filter('findUniqueById', 
	['$filter', function($filter) {
	return function(array) {
		var unique = [];
		for(var i = 0; i < array.length; i++) {
			if(array[i].hasOwnProperty('id') && $filter("findById")(unique, array[i].id) == null)
				unique.push(array[i]);
		}
		return unique;
	}
}]);

angular.module('portfolio.filters').filter('getIndex', function() {
	return function(array, elem) {
		for(var i = 0; i < array.length; i++) {
			if(array[i].id === elem.id) return i;
		}
		return -1;
	}
});