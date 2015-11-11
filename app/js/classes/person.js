angular.module('portfolio.classes').factory('Person', 
['TypeService', 'Work', 'Skill', 'Contact', 'Media', function(TypeService, Work, Skill, Contact, Media) {
	var id,
		first_name, //string - first name
		last_name, //string - last name
		title, //string - title
		short_description, //string - short description
		summary, //string - summary
		image, //Media - background
		work_history, //array<Work> - array of work experiences
		contacts; //array<Contact> - list of contact methods

	var roles, //array<string> - type of work done
		skills; //array<Skill> - list of skills

	function Person(params, init) { 
		this.id = params.id;
		this.first_name = params.first_name || "";
		this.last_name = params.last_name || "";
		this.title = params.title || "";
		this.short_description = params.short_description || "";
		this.summary = params.summary || this.short_description;

		if(params.image !== null && params.image instanceof Media)
			this.image = params.image;

		if(TypeService.isArray(params.work_history)) {
			if(isNaN(params.work_history[0])) this.work_history = TypeService.loadArrayWithType(params.work_history, Work);
			else this.work_history = params.work_history;
		} else this.work_history = [];

		if(TypeService.isArray(params.contacts)) {
			if(isNaN(params.contacts[0])) this.contacts = TypeService.loadArrayWithType(params.contacts, Contact);
			else this.contacts = params.contacts;
		} else this.contacts = [];

		if(TypeService.isArray(params.skills)) {
			if(isNaN(params.skills[0])) this.skills = TypeService.loadArrayWithType(params.skills, Skill);
			else this.skills = params.skills;
		} else this.skills = [];

		this.roles = [];
		if(params.roles !== null && params.roles !== undefined) {
			if(TypeService.isArray(params.roles)) this.roles = params.roles;
			else this.roles.push(params.roles);
		}

		if(init === true) this.init();
	}

	Person.prototype = {
		init: function(params) {
			if(this.work_history.length > 0 && params.work !== null && params.work !== undefined) 
				this.loadWork(params.work);

			if(this.contacts.length > 0 && params.contact !== null && params.contact !== undefined) 
				this.loadContact(params.contact);

			if(params.skills !== null && params.skills !== undefined) 
				this.loadSkills(params.skills);

			this.getSkills();
			this.getRoles();
		},
		loadWork: function(work_history) {
			var loaded_work_history = [];
			for(var i = 0, len = this.work_history.length; i < len; i++) {
				for(var j = 0, len2 = work_history.length; j < len2; j++) {
					if(work_history[j].id === this.work_history[i]) 
						loaded_work_history.push(work_history[j]);
				}
			}
			this.work_history = loaded_work_history;
		},
		loadContact: function(contacts) {
			var loaded_contacts = [];
			for(var i = 0, len = this.contacts.length; i < len; i++) {
				for(var j = 0, len2 = contacts.length; j < len2; j++) {
					if(contacts[j].id === this.contacts[i]) 
						loaded_contacts.push(contacts[j]);
				}
			}
			this.contacts = loaded_contacts;
		},
		loadSkills: function(skills) {
			var loaded_skills = [];
			for(var i = 0, len = this.skills.length; i < len; i++) {
				for(var j = 0, len2 = skills.length; j < len2; j++) {
					if(skills[j].id === this.skills[i]) loaded_skills.push(skills[j]);
				}
			}
			this.skills = loaded_skills;
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
		getSkillCategories: function() {
			var categories = [];
			for(var i = 0, len = this.skills.length; i < len; i++) {
				if(categories.indexOf(this.skills[i].category) === -1) 
					categories.push(this.skills[i].category);
			}
			return categories;
		},
		getProjects: function(count) {
			var projects = [];
			for(var i = 0, len = this.work_history.length; i < len; i++) {
				projects = projects.concat(this.work_history[i].projects);
			}
			return (count !== undefined ? projects.slice(0, count) : projects);
		},
		getWork: function(project) {
			for(var i = 0, len = this.work_history.length; i < len; i++) {
				if(this.work_history[i].projects.indexOf(project) !== -1) return this.work_history[i];
			}
			return null;
		},
		getFullName: function() {
			var name = this.first_name + " " + this.last_name;
			return name.trim();
		}
	}
	
	return Person;
}]);