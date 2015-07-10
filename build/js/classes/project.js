angular.module('classes').factory('Project', function($filter, HelperService, ProjectType, Media, Technology) {
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

		this.project_type = HelperService.loadArrayWithType(params.project_type, ProjectType);
		this.media = HelperService.loadArrayWithType(params.media, Media);
		this.technology = HelperService.loadArrayWithType(params.technology, Technology);
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
		},
		getHighlight: function() {
			return $filter('findById')(this.media, this.highlight || this.media[0].id);
		}
	}

	return Project;
});