angular.module('classes').factory('Project', function(ProjectType, Media, Technology) {
	var id;
	var name;
	var summary;
	var url;
	var type;
	var media;
	var technology;

	function Project(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.summary = params.summary || "";
		this.url = params.url || "";

		if(params.type instanceof ProjectType) {
			this.type = params.type;
		} else params.type = null;

		if(params.media != null && params.media.length > 0) {
			this.media = new Array();
			for(var i = 0; i < params.media.length; i++) {
				if(params.media[i] instanceof Media)
					this.media.push(params.media[i]);
			}
		}
		else if(params.media instanceof Media)
			this.media = [ params.media ];
		else this.media = {};

		if(params.technology != null && params.technology.length > 0) {
			this.media = new Array();
			for(var i = 0; i < params.technology.length; i++) {
				if(params.technology[i] instanceof Technology)
					this.technology.push(params.technology[i]);
			}
		}
		else if(params.technology instanceof Technology)
			this.technology = [ params.technology ];
		else this.technology = {};
	}

	return Project;
});