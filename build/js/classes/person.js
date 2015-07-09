angular.module('classes').factory('Person', function(Contact) {
	var id;
	var name;
	var title;
	var summary;
	var contacts;

	function Person(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.title = params.title || "";
		this.summary = params.summary || "";

		if(params.contacts != null && params.contacts.length > 0) {
			this.contacts = new Array();
			for(var i = 0; i < params.contacts.length; i++) {
				if(params.contacts[i] instanceof Contact) {
					this.contacts.push(params.contacts[i]);
				}
			}
		}
		else if(params.contacts instanceof Contact) {
			this.contacts = [ params.contacts ];
		}
		else this.contacts = {};
	}

	Person.prototype = {
		getNameAndTitle: function() {
			return this.name + " | " + this.title;
		}
	}

	
	return Person;
});