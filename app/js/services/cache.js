angular.module('portfolio.services').service('CacheService', 
	['$cacheFactory', 'config', function($cacheFactory, config) {
	var cache = $cacheFactory(config.cache);
	this.get = function(key) {		
		console.log({'cache': key, 'data': cache.get(key)});
		return cache.get(key);		
	}
	this.set = function(key, value) {
		cache.put(key, value);
		return cache.get(key) == value;
	}
}]);