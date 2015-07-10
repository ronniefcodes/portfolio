angular.module('controllers').controller('PortfolioController', 
	function($scope, DataService) {
		$scope.person = DataService.getPerson(1);
	});