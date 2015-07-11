angular.module('portfolio.classes').factory('Person', 
function($filter, TypeService, Contact, Project, Media) {
	var id;
	var name;
	var title;
	var summary;
	var background;
	var projects;
	var contacts;
	var project_types;
	var technologies;

	function Person(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.title = params.title || "";
		this.summary = params.summary || "";

		if(params.background instanceof Media)
			this.background = params.background;

		this.projects = TypeService.loadArrayWithType(params.projects, Project); 
		this.contacts = TypeService.loadArrayWithType(params.contacts, Contact);

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