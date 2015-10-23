angular.module('portfolio.controllers').controller('PortfolioController', 
	['$scope', 'DataService', 'Person',
	 function($scope, DataService, Person) {
	 	
	 	var skills = [];
	 	skills.push(new Skill({ id: skills.length+1, name: '', category: '', type: '' }));

	 	DataService.load().then(function(data) {
	 		if(data instanceof Person) {
	 			$scope.person = data;
	 			$scope.$emit('content.load.complete');
	 		} else $scope.$emit('content.load.empty');
	 	}).error(function() {
	 		$scope.$emit('content.load.error');
	 	});
	}]);