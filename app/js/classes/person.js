angular.module('portfolio.classes').factory('Person', 
['TypeService', 'Work', 'Skill', 'Contact', 'Media', function(TypeService, Work, Skill, Contact, Media) {
	var id,
		first_name, //string - first name
		last_name, //string - last name
		title, //string - title
		summary, //string - summary
		image, //Media - background
		work_history, //array<Work> - array of work experiences
		contacts; //array<Contact> - list of contact methods

	var roles, //array<string> - type of work done
		skills; //array<Skill> - list of skills

	function Person(params) { 
		this.id = params.id;
		this.first_name = params.first_name || "";
		this.last_name = params.last_name || "";
		this.title = params.title || "";
		this.summary = params.summary || "";

		if(params.image !== null && params.image instanceof Media)
			this.image = params.image;

		this.work_history = TypeService.loadArrayWithType(params.work_history, Work);
		this.contacts = TypeService.loadArrayWithType(params.contacts, Contact);

		this.skills = TypeService.loadArrayWithType(params.skills, Skill);

		this.roles = [];
		if(params.roles !== null && params.roles !== undefined) {
			if(TypeService.isArray(params.roles)) this.roles = params.roles;
			else this.roles.push(params.roles);
		}

		this.init();
	}

	Person.prototype = {
		init: function() {
			this.getSkills();
			this.getRoles();
		},
		getRoles: function() {
			this.roles = this.roles || [];
			for(var i = 0, len = this.work_history.length; i < len; i++) {
				for(var j = 0, len2 = this.work_history[i].role.length; j < len2; j++) {
					if(this.roles.indexOf(this.work_history[i].role[j]) === -1) 
						this.roles.push(this.work_history[i].role[j]);
				}
			}
			for(var i = 0, len = this.skills.length; i < len; i ++) {
				if(this.roles.indexOf(this.skills[i].type) === -1)
					this.roles.push(this.skills[i].type);
			}
		},
		getSkills: function() {
			this.skills = this.skills || [];
			for(var i = 0, len = this.work_history.length; i < len; i++) {
				for(var j = 0, len2 = this.work_history[i].skills.length; j < len2; j++) {
					if(this.skills.indexOf(this.work_history[i].skills[j]) === -1) 
						this.skills.push(this.work_history[i].skills[j]);
				}
			}
		},
		getFullName: function() {
			var name = this.first_name + " " + this.last_name;
			return name.trim();
		}
	}
	
	return Person;
}]);