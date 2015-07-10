angular.module('portfolio.controllers').controller('PortfolioController', 
	function($scope, $rootScope, $timeout, 
		$filter, DataService, CacheService, config) {

		var person = CacheService.get('person');
		if(person == null) person = DataService.getPerson(config.person_id);
		$scope.person = person;
		
		$timeout(function() {
			$rootScope.$broadcast('content.loaded');
			console.log($scope.person);
		});

	});