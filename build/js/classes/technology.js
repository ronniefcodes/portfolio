angular.module('portfolio.classes').factory('Technology', function() {
	var id;
	var name;

	function Technology(params) {
		this.id = params.id;
		this.name = params.name || "";
	}

	return Technology;
});