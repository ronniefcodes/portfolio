angular.module('portfolio.controllers').controller('PortfolioController', 
	function($scope, $rootScope, $timeout, 
		DataService, CacheService, Project, config) {

		var person = CacheService.get('person');
		if(person == null) DataService.getPerson(config.person_id).then(function(data) {
			$scope.person = data;
			$timeout(function() {
				$rootScope.$broadcast('content.loaded');
			});
		});

		$scope.changeImage = function(project, direction) {
			$timeout(function() {
				project.load(direction);
				$scope.$apply();
			})
		}
	});