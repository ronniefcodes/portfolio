angular.module('portfolio.controllers').controller('PortfolioController', 
	['$scope', 'DataService', 'Person', 
	 function($scope, DataService, Person) {
	 	//console.log(JSON.stringify(DataService.loadFromJS()));
	 	DataService.load().then(function(data) {
	 		if(data instanceof Person) {
	 			$scope.person = data;
	 			$scope.$emit('content.load.complete');
	 			console.log(data.getProjects());
	 		} else $scope.$emit('content.load.empty');
	 	});
}]);