angular.module('portfolio.controllers').controller('PortfolioController', 
	['$scope', '$location', '$q', 'DataService',
	 function($scope, $location, $q, DataService) {
	 	//scope function to handle 'close' button
	 	$scope.close = function() {
	 		var body = angular.element('body');
	 		if(body.is('.hide-intro')) body.removeClass('hide-intro');
	 		else $location.path('/');
	 	}

	 	//load all content
	 	$q.all([ loadData('skills'), loadData('contacts'), loadData('projects'), loadData('work'), loadData('person') ])
	 	.then(function() {
	 		//additional initialization of objects (matching ids with objects)
	 		for(var i = 0, len = $scope.projects.length; i < len; i++) 
	 			$scope.projects[i].init({ skills: $scope.skills });
	 		for(var i = 0, len = $scope.work.length; i < len; i++) {
	 			$scope.work[i].init({ skills: $scope.skills, projects: $scope.projects });
	 		}
	 		$scope.person.init({ skills: $scope.skills, work: $scope.work, contact: $scope.contacts });

	 		//emit data load message to rootscope so app knows to start directive functionality
	 		$scope.$emit('data.load.ok');
	 	});

	 	//use dataservice to load content, add to scope upon load
	 	function loadData(type) {
	 		var defer = $q.defer();
	 		DataService.get(type).then(function(data) {	 			
	 			$scope[type] = data;
	 			defer.resolve();
	 		});
	 		return defer.promise;
	 	}
}]);