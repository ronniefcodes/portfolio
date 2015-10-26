angular.module('portfolio.controllers').controller('ProjectController', 
	['$scope', '$route', '$location', '$filter', 'CacheService',
	 function($scope, $route, $location, $filter, CacheService) {
	 	$scope.project = $filter('findByField')(CacheService.get('projects'),$route.current.params.project,'link');
	 	if($scope.project !== null) $scope.$emit('document.title.change', $scope.project.title);
	 	else $location.path('/');
}]);