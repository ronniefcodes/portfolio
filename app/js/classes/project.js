angular.module('portfolio.classes').factory('Project', 
['$filter', 'TypeService', 'Media', 'Skill',
function($filter, TypeService, Media, Skill) {
	var id,
		title, //strign - project title
		description, //string - description of project
		url, //string - url for project
		date, //datetime - date of project
		highlight, //int - used to identify media element to use in highlights and summaries
		media, //array<Media> - list of media elements tied to project
		skills, //array<Skill> - list of skills involved in project
		role; //array<string> - role in project (ie. front end, back end)

	var active; //Media - active media (for display)

	function Project(params, skip_init) {
		this.id = params.id;
		this.title = params.title || "";
		this.description = params.description || "";
		this.url = params.url || "";
		this.highlight = params.highlight;

		if(params.date !== null && params.date instanceof Date) this.date = params.date;

		this.media = TypeService.loadArrayWithType(params.media, Media);
		this.skills = TypeService.loadArrayWithType(params.skills, Skill);

		this.role = [];
		if(params.role !== null && params.role !== undefined) {
			if(TypeService.isArray(params.role)) this.role = params.role;
			else this.role.push(params.role);
		}

		if(skip_init !== true) this.init();
	}

	Project.prototype = {
		init: function() {
			this.getRole();
			//this.active_media = this.getHighlight();
		},
		getRole: function() {
			this.role = this.role || [];
			for(var i = 0, len = this.skills.length; i < len; i++) {
				if(this.role.indexOf(this.skills[i].type) === -1) 
					this.role.push(this.skills[i].type);
			}
		},
		getHighlight: function() {
			if(this.highlight !== null) return $filter('filter')(this.media, this.highlight);
			else if($filter('filter')(this.media))
			if(this.highlight === null) {
				if(this.media.length > 0) highlight = this.media[0];
				else return null;
			}
			return $filter('filter')(this.media, this.highlight);
		}
	}

	return Project;
}]);