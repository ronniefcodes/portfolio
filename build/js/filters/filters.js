angular.module('portfolio.filters').filter('findByField', function() {
	return function(array, value, field) {
		if(field == null || field == undefined) field = 'id';
		for(var i = 0; i < array.length; i++) {
			if(array[i].hasOwnProperty(field) && array[i][field] == value) return array[i];
		}
		return null;
	}
});

angular.module('portfolio.filters').filter('findById', function($filter) {
	return function(array, id) {
		return $filter('findByField')(array, id);
	}
});

angular.module('portfolio.filters').filter('getUniqueById', function($filter) {
	return function(array) {
		var unique = [];
		for(var i = 0; i < array.length; i++) {
			if(array[i].hasOwnProperty('id') && $filter("findById")(unique, array[i].id) == null)
				unique.push(array[i]);
		}
		return unique;
	}
});

angular.module('portfolio.filters').filter('getIndex', function($filter) {
	return function(array, elem) {
		for(var i = 0; i < array.length; i++) {
			if(array[i].id === elem.id) return i;
		}
		return -1;
	}
});