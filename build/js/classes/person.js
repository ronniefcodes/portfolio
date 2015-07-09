angular.module('classes').factory('Person', function(Contact, Project) {
	var id;
	var name;
	var title;
	var summary;
	var projects;
	var contacts;

	function Person(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.title = params.title || "";
		this.summary = params.summary || "";

		if(params.projects != null && params.projects.length > 0) {
			this.projects = new Array();
			for(var i = 0; i < params.projects.length; i++) {
				if(params.projects[i] instanceof Project)
					this.projects.push(params.projects[i]);
			}
		}
		else if(params.projects instanceof Project)
			this.projects = [ params.projects ];
		else this.contacts = {};

		if(params.contacts != null && params.contacts.length > 0) {
			this.contacts = new Array();
			for(var i = 0; i < params.contacts.length; i++) {
				if(params.contacts[i] instanceof Contact)
					this.contacts.push(params.contacts[i]);
			}
		}
		else if(params.contacts instanceof Contact)
			this.contacts = [ params.contacts ];
		else this.contacts = {};
	}

	Person.prototype = {
		getNameAndTitle: function() {
			return this.name + " | " + this.title;
		}
	}
	
	return Person;
});