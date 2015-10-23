angular.module('portfolio.services').service('DataService', 
	['$http', '$q', '$filter', 'config', 'CacheService', 'Person'
	function($http, $q, $filter, config, CacheService, Person) {

	this.load = function() {
		var defer = $q.defer();
		var data = CacheService.get('person');
		if(data === undefined || data === null) {
			$http({ 
				method: 'get', 
				url: 'content/data.json', 
				cache: true
			}).then(function(response) {
				var obj = JSON.parse(response.data);

				if(obj == null) {
					var person = new Person(obj);
					CacheService.set('person', person);
					defer.resolve(person);
				} else defer.resolve(null);
			});
		} else { 
			defer.resolve(data);
		}
		return defer.promise;
	}

	function loadFromJson(url, return_func) {
		var defer = $q.defer();

		$http({
			method: 'get',
			url: url,
			cache: true
		}).then(function(response) {
			defer.resolve(return_func(response));
		})

		return defer.promise;
	}

}]);