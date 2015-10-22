angular.module('portfolio.classes').factory('Person', 
['$filter', 'TypeService', 'Contact', 'Project', 'Media',
function($filter, TypeService, Contact, Project, Media) {
	var id,
		first_name, //string - first name
		last_name, //string - last name
		title, //string - title
		summary, //string - summary
		image, //Media - background
		work_history, //array<Work> - array of work experiences
		contacts; //array<Contact> - list of contact methods

	var types, //array<string> - type of work done
		skills; //array<Skill> - list of skills

	function Person(params) { 
		this.id = params.id;
		this.first_name = params.first_name || "";
		this.last_name = params.last_name || "";
		this.title = params.title || "";
		this.summary = params.summary || "";

		if(params.image !== null && params.image instanceof Media)
			this.image = params.image;
	}

	Person.prototype = {
		init: function() {
			this.getProjectTypes();
			this.getTechnologies();
		},
		getFullName: function() {
			var name = this.first_name + " " + this.last_name;
			return name.trim();
		}
	}
	
	return Person;
}]);