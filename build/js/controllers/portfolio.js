angular.module('controllers').controller('PortfolioController', 
	function($scope, $filter, DataService, Person) {
		var person = DataService.getPerson(1);

		var highlight = $filter('findById')(person.projects[0].media, person.projects[0].highlight);

		var technologies = [], types = [];
		for(var i = 0; i < person.projects.length; i++) {
			technologies = technologies.concat(person.projects[i].technology);
			types = types.concat(person.projects[i].project_type);
		}

		console.log(types);

		person.technologies = $filter('getUniqueById')(technologies);
		person.project_types = $filter('getUniqueById')(types);

		$scope.person = person;
		console.log($scope.person);
	});