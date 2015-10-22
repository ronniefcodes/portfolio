angular.module('sandbox.services').service('CacheService', 
	['$cacheFactory', 'config', function($cacheFactory, config) {
	var cache = $cacheFactory(config.cache);
	this.get = function(key) {		
		return cache.get(key);		
	}
	this.set = function(key, value) {
		cache.put(key, value);
		return cache.get(key) == value;
	}
}]);