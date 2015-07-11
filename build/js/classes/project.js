angular.module('portfolio.classes').factory('Project', function($filter, TypeService, ProjectType, Media, Technology) {
	var id;
	var name;
	var summary;
	var url;
	var highlight;
	var project_type;
	var media;
	var technology;
	var active_media;

	function Project(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.summary = params.summary || "";
		this.highlight = params.highlight || null;
		this.url = params.url || "";

		this.project_type = TypeService.loadArrayWithType(params.project_type, ProjectType);
		this.media = TypeService.loadArrayWithType(params.media, Media);
		this.technology = TypeService.loadArrayWithType(params.technology, Technology);

		this.init();
	}

	Project.prototype = {
		init: function() {
			this.active_media = this.getHighlight();
		},
		getMedia: function(include_mobile) {
			var gallery = new Array();
			for(var i = 0; i < this.media.length; i++) {
				if(this.media[i].previous == null) {
					if(include_mobile != false || this.media[i].is_mobile == false) {
						gallery.push(this.media[i]);
					}
				}
			}
			return gallery;
		},
		getNextMedia: function(media) {
			var valid_media = this.getMedia();
			while(media.previous != null)
				media = $filter('findById')(valid_media, media.previous);
			var index = $filter('getIndex')(valid_media, media);
			if(index == valid_media.length - 1) index = 0;
			else index++;
			return valid_media[index];
		},
		getPreviousMedia: function(media) {
			var valid_media = this.getMedia();
			while(media.previous != null)
				media = $filter('findById')(valid_media, media.previous);
			var index = $filter('getIndex')(valid_media, media);
			if(index == 0) index = valid_media.length - 1;
			else index--;
			return valid_media[index];
		},
		getNextLinkedMedia: function(media) {
			var next = media;
			if(media.next != null) {
				for(var i = 0; i < this.media.length; i++) {
					if(this.media[i].id === media.next) next = this.media[i];
				}
			}
			return next;
		},
		getPreviousLinkedMedia: function(media) {
			var previous = media;
			if(media.previous != null) {
				for(var i = 0; i < this.media.length; i++) {
					if(this.media[i].id === media.previous) previous = this.media[i];
				}
			}
			return previous;
		},
		getHighlight: function() {
			var highlight = this.highlight;
			if(this.highlight == null) {
				if(this.media.length > 0) highlight = this.getMedia()[0].id;
				else return null;
			}
			return $filter('findById')(this.media, this.highlight || this.media[0].id);
		},
		load: function(dir) {
			switch(dir) {
				case 'right': this.active_media = this.getNextMedia(this.active_media);
					break;
				case 'left': this.active_media = this.getPreviousMedia(this.active_media);
					break;
				case 'up': this.active_media = this.getPreviousLinkedMedia(this.active_media);
					break;
				case 'down': this.active_media = this.getNextLinkedMedia(this.active_media);
					break;
			}
		}
	}

	return Project;
});