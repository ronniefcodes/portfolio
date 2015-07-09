angular.module('classes').factory('Person', function(Contact, Project) {
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

		this.projects = [];
		if(params.projects != null && params.projects.length > 0) {
			for(var i = 0; i < params.projects.length; i++) {
				if(params.projects[i] instanceof Project)
					this.projects.push(params.projects[i]);
			}
		}
		else if(params.projects instanceof Project)
			this.projects = [ params.projects ];

		this.contacts = [];
		if(params.contacts != null && params.contacts.length > 0) {
			for(var i = 0; i < params.contacts.length; i++) {
				if(params.contacts[i] instanceof Contact)
					this.contacts.push(params.contacts[i]);
			}
		}
		else if(params.contacts instanceof Contact)
			this.contacts = [ params.contacts ];
	}

	Person.prototype = {
		getNameAndTitle: function() {
			return this.name + " | " + this.title;
		}
	}
	
	return Person;
});