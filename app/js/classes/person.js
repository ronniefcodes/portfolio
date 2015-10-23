angular.module('portfolio.classes').factory('Person', 
['Work', 'Contact', 'Media', function(Work, Contact, Media) {
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

		this.work_history = [];
		if(params.work_history !== null) {
			if(TypeService.isArray(params.work_history)) {
				for(var i = 0, len = params.work_history.length; i < len; i++) {
					this.work_history.push(new Work(params.work_history[i]));
				}
			} else this.work_history.push(new Work(params.work_history));
		}

		this.contacts = [];
		if(params.contacts !== null) {
			if(TypeService.isArray(params.contacts)) {
				for(var i = 0, len = params.contacts.length; i < len; i++) {
					this.contacts.push(new Contact(params.contacts[i]));
				}
			} else this.contacts.push(new Contact(params.contacts));
		}
	}

	Person.prototype = {
		getFullName: function() {
			var name = this.first_name + " " + this.last_name;
			return name.trim();
		}
	}
	
	return Person;
}]);