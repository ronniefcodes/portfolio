angular.module('portfolio.classes').factory('ProjectType', function() {
	var id;
	var name;

	function ProjectType(params) {
		this.id = params.id;
		this.name = params.name || "";
	}

	return ProjectType;
});