angular.module('classes').factory('Person', function($filter, HelperService, Contact, Project) {
	var id;
	var name;
	var title;
	var summary;
	var projects;
	var contacts;
	var project_types;
	var technologies;

	function Person(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.title = params.title || "";
		this.summary = params.summary || "";

		this.projects = HelperService.loadArrayWithType(params.projects, Project); 
		this.contacts = HelperService.loadArrayWithType(params.contacts, Contact);

		this.init();
	}

	Person.prototype = {
		init: function() {
			this.getProjectTypes();
			this.getTechnologies();
		},
		getNameAndTitle: function() {
			return this.name + " | " + this.title;
		},
		getProjectTypes: function() {
			var types = new Array();
			for(var i = 0; i < this.projects.length; i++) {
				types = types.concat(this.projects[i].project_type);
			}
			this.project_types = $filter('getUniqueById')(types);
		},
		getTechnologies: function() {
			var technologies = new Array();
			for(var i = 0; i < this.projects.length; i++) {
				technologies = technologies.concat(this.projects[i].technology);
			}
			this.technologies = $filter('getUniqueById')(technologies);
		}
	}
	
	return Person;
});