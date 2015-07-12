angular.module('portfolio.controllers').controller('PortfolioController', 
	['$scope', '$timeout', 'DataService', 'CacheService', 'Project', 'config',
	 function($scope, $timeout, DataService, CacheService, Project, config) {

		var person = CacheService.get('person');
		if(person == null) 
			DataService.getPerson(config.person_id)
			.catch(function() {}).then(function(data) {
				$scope.person = data;
				console.log(data);
				$timeout(function() {
					if($scope.person == null) $scope.$emit('content.load.error');
					else $scope.$emit('content.load.ok');
				});
			});
		else $scope.$emit('content.load.ok');

	}]);