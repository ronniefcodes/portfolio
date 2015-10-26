angular.module('portfolio.classes').factory('Project', 
['$filter', 'TypeService', 'Media', 'Skill',
function($filter, TypeService, Media, Skill) {
	var id,
		title, //string - project title
		link, //string - to be used to link to project
		description, //string - description of project
		url, //string - url for project
		date, //datetime - date of project
		highlight, //int - used to identify media element to use in highlights and summaries
		media, //array<Media> - list of media elements tied to project
		skills, //array<Skill> - list of skills involved in project
		role; //array<string> - role in project (ie. front end, back end)

	var active_media; //Media - active media (for display)

	function Project(params, init) {
		this.id = params.id;
		this.title = params.title || "";
		this.link = params.link || "";
		if(this.link === "" && this.title !== "") 
			this.link = this.title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
		
		this.description = params.description || "";
		this.url = params.url || "";
		this.highlight = params.highlight;

		if(params.date !== null && params.date instanceof Date) this.date = params.date;

		this.role = [];
		if(params.role !== null && params.role !== undefined) {
			if(TypeService.isArray(params.role)) this.role = params.role;
			else this.role.push(params.role);
		}

		if(TypeService.isArray(params.media)) {
			if(isNaN(params.media[0])) this.media = TypeService.loadArrayWithType(params.media, Media);
			else this.media = params.media;
		} else this.media = [];

		if(TypeService.isArray(params.skills)) {
			if(isNaN(params.skills[0])) this.skills = TypeService.loadArrayWithType(params.skills, Skill);
			else this.skills = params.skills;
		} else this.skills = [];

		if(init === true) this.init();
	}

	Project.prototype = {
		init: function(params) {
			if(params.skills !== null && params.skills !== undefined) 
				this.loadSkills(params.skills);
			this.getRole();
			this.getHighlight();
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
		getRole: function() {
			this.role = this.role || [];
			for(var i = 0, len = this.skills.length; i < len; i++) {
				if(this.role.indexOf(this.skills[i].type) === -1) 
					this.role.push(this.skills[i].type);
			}
		},
		getHighlight: function() {
			//attempt to find 'active' media based on hightlight attribute,
			//	otherwise, fallback to first media in list
			if(this.highlight !== null) {
				for(var i = 0, len = this.media.length; i < len; i++) {
					if(this.media[i].id === this.highlight) {
						this.active_media = this.media[i];
						return;
					}
				}
			}
			if(this.media.length > 0) this.active_media = this.media[0];
		}
	}

	return Project;
}]);