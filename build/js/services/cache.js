angular.module('portfolio.services').service('CacheService', function($cacheFactory, config) {
	var cache = $cacheFactory(config.cache);
	this.get = function(key) {		
		return cache.get(key);		
	}
	this.put = function(key, value) {
		cache.put(key, value);
		return cache.get(key) == value;
	}
});