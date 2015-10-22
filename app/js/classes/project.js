angular.module('portfolio.classes').factory('Project', 
['$filter', 'TypeService', 'Media', 'Skill',
function($filter, TypeService, Media, Skill) {
	var id,
		title, //strign - project title
		description, //string - description of project
		url, //string - url for project
		highlight, //int - used to identify media element to use in highlights and summaries
		media, //array<Media> - list of media elements tied to project
		skills, //array<Skill> - list of skills involved in project
		type; //array<string> - type of project (ie. front end, back end)

	var active; //Media - active media (for display)

	function Project(params) {
		this.id = params.id;
		this.title = params.title || "";
		this.description = params.description || "";
		this.url = params.url || "";
		this.highlight = params.highlight;

		this.media = [];
		if(params.media !== null) {
			if(TypeService.isArray(params.media)) {
				for(var i = 0, len = params.media.length; i < len; i++) {
					this.media.push(new Media(params.media[i]));
				}
			} else this.media.push(new Media(params.media));
		}

		this.skills = [];
		if(params.skills !== null) {
			if(TypeService.isArray(params.skills)) {
				for(var i = 0, len = params.skills.length; i < len; i++) {
					this.skills.push(new Skill(params.skills[i]));
				}
			} else this.skills.push(new Skill(params.skills));
		}

		this.type = [];
		if(params.type !== null) {
			if(TypeService.isArray(params.type)) this.type = params.type;
			else this.type.push(params.type);
		}

		//this.init();
	}

	Project.prototype = {
		init: function() {
			this.active_media = this.getHighlight();
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