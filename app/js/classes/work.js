angular.module('portfolio.classes').factory('Work', 
['TypeService', 'Project', 'Skill', function(TypeService, Project, Skill) {
	var id,
		title, //string - title at company
		company, //string - company name
		description, //string - description of project
		url, //string - company website
		start_date, //(start_date & end_date) datetime - date started and finished at position
		end_date,
		projects, //array<Project> - projects completed as part of position
		skills, //array<Skill> - skills applied in position
		role; //array<string> - role in position (ie. front end, back end)

	function Work(params, init) {
		this.id = params.id;
		this.title = params.title || "";
		this.company = params.company || "";
		this.description = params.description || "";
		this.url = params.url || "";
		this.highlight = params.highlight;

		if(params.start_date !== null && params.start_date instanceof Date) this.start_date = params.start_date;
		if(params.end_date !== null && params.end_date instanceof Date) this.end_date = params.end_date;

		if(TypeService.isArray(params.projects)) {
			if(isNaN(params.projects[0])) this.projects = TypeService.loadArrayWithType(params.projects, Project);
			else this.projects = params.projects;
		} else this.projects = [];

		if(TypeService.isArray(params.skills)) {
			if(isNaN(params.skills[0])) this.skills = TypeService.loadArrayWithType(params.skills, Skill);
			else this.skills = params.skills;
		} else this.skills = [];

		this.role = [];
		if(params.role !== null && params.role !== undefined) {
			if(TypeService.isArray(params.role)) this.role = params.role;
			else this.role.push(params.role);
		}

		if(init === true) this.init();
	}

	Work.prototype = {
		init: function(params) {
			if(params.skills !== null && params.skills !== undefined) 
				this.loadSkills(params.skills);
			if(params.projects !== null && params.projects !== undefined) 
				this.loadProjects(params.projects);

			this.getSkills();
			this.getRole();
		},
		loadProjects : function(projects) {
			var loaded_projects = [];
			for(var i = 0, len = this.projects.length; i < len; i++) {
				for(var j = 0, len2 = projects.length; j < len2; j++) {
					if(projects[j].id === this.projects[i]) loaded_projects.push(projects[j]);
				}
			}
			this.projects = loaded_projects;
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
		getSkills: function() {
			this.skills = this.skills || [];
			for(var i = 0, len = this.projects.length; i < len; i++) {
				for(var j = 0, len2 = this.projects[i].skills.length; j < len2; j++) {
					if(this.skills.indexOf(this.projects[i].skills[j]) === -1) 
						this.skills.push(this.projects[i].skills[j]);
				}
			}
		},
		getRole: function() {
			this.role = this.role || [];
			for(var i = 0, len = this.projects.length; i < len; i++) {
				for(var j = 0, len2 = this.projects[i].role.length; j < len2; j++) {
					if(this.role.indexOf(this.projects[i].role[j]) === -1) 
						this.role.push(this.projects[i].role[j]);
				}
			}
			for(var i = 0, len = this.skills.length; i < len; i ++) {
				if(this.role.indexOf(this.skills[i].type) === -1)
					this.role.push(this.skills[i].type);
			}
		}
	}

	return Work;
}]);