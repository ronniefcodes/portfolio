angular.module('portfolio.controllers').controller('PortfolioController', 
	function($scope, $rootScope, $timeout, 
		DataService, CacheService, Project, config) {

		var person = CacheService.get('person');
		if(person == null) person = DataService.getPerson(config.person_id);
		$scope.person = person;
		
		$timeout(function() {
			$rootScope.$broadcast('content.loaded');
			console.log($scope.person);
		});

		$scope.changeImage = function(project, direction) {
			$timeout(function() {
				project.load(direction);
				$scope.$apply();
			})
		}
	});