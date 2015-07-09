angular.module('classes').factory('Project', function(ProjectType, Media, Technology) {
	var id;
	var name;
	var summary;
	var url;
	var highlight;
	var project_type;
	var media;
	var technology;

	function Project(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.summary = params.summary || "";
		this.highlight = params.highlight || null;
		this.url = params.url || "";

		this.project_type = [];
		console.log(params.project_type);
		console.log(params.project_type.length);
		if(params.project_type != null && params.project_type.length > 0) {
			for(var i = 0; i < params.media.length; i++) {
				if(params.project_type[i] instanceof ProjectType)
					this.project_type.push(params.project_type[i]);
			}
		}
		else if(params.project_type instanceof Media)
			this.project_type = [ params.media ];

		this.media = [];
		if(params.media != null && params.media.length > 0) {
			for(var i = 0; i < params.media.length; i++) {
				if(params.media[i] instanceof Media)
					this.media.push(params.media[i]);
			}
		}
		else if(params.media instanceof Media)
			this.media = [ params.media ];

		this.technology = [];
		if(params.technology != null && params.technology.length > 0) {
			for(var i = 0; i < params.technology.length; i++) {
				if(params.technology[i] instanceof Technology)
					this.technology.push(params.technology[i]);
			}
		}
		else if(params.technology instanceof Technology)
			this.technology = [ params.technology ];
	}

	Project.prototype = {
		getMedia: function(include_mobile) {
			var gallery = new Array();
			for(var i = 0; i < this.media.length; i++) {
				//return top-level images only
				if(this.media[i].previous == null) {
					//exclude mobile if flagged
					if(include_mobile != false || this.media[i].is_mobile == false) {
						gallery.push(this.media[i]);
					}
				}
			}
			return gallery;
		}
	}

	return Project;
});