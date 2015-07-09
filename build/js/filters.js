angular.module('filters').filter('findById', function() {
	return function(array, id) {
		for(var i = 0; i < array.length; i++) {
			if(array[i].hasOwnProperty('id') && +array[i].id == +id) return array[i];
		}
		return null;
	}
});

angular.module('filters').filter('getUniqueById', function($filter) {
	return function(array) {
		var unique = [];
		for(var i = 0; i < array.length; i++) {
			console.log($filter("findById")(unique, array[i].id));
			if(array[i].hasOwnProperty('id') && $filter("findById")(unique, array[i].id) == null) {
				console.log("add id: " + array[i].id);
				unique.push(array[i]);
			}
		}
		console.log(unique);
		return unique;
	}
});