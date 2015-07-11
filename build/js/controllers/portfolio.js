angular.module('portfolio.controllers').controller('PortfolioController', 
	function($scope, $rootScope, $timeout, 
		DataService, CacheService, Project, config) {

		var person = CacheService.get('person');
		if(person == null) DataService.getPerson(config.person_id)
		.catch(function() {}).then(function(data) {
			$scope.person = data;
			$timeout(function() {
				if(data == null) $rootScope.$broadcast('content.load.error');
				else $rootScope.$broadcast('content.load.ok');
			})
		});

		$scope.changeImage = function(project, direction) {
			$timeout(function() {
				project.load(direction);
				$scope.$apply();
			})
		}
	});