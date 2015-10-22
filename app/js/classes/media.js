angular.module('portfolio.classes').factory('Media', function() {
	var id,
		type, //string - type of media (ie. video, image)
		url, //string - url of media
		caption, //string - caption for object
		alt, //string - optional alt text (if an image, for example)
		is_mobile, //boolean - if media is meant for mobile devices (primarily for images)
		next, //(next & previous) int - used to note media sequence (for carousels)
		previous;

	function Media(params) {
		this.id = params.id;
		this.caption = params.caption || "";
		this.alt = params.alt || "";
		this.is_mobile = params.is_mobile === true;
		this.url = params.url || "";
		this.previous = params.previous || null;
		this.next = params.next || null;
	}

	return Media;
});