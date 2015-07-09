angular.module('classes').factory('Media', function() {
	var id;
	var caption;
	var is_mobile;
	var url;
	var previous;
	var next;

	function Media(params) {
		this.id = params.id;
		this.caption = params.caption || "";
		this.is_mobile = params.is_mobile || false;
		this.url = params.url || "";
		this.previous = params.previous || null;
		this.next = params.next || null;
	}

	Media.prototype = {
		getNext: function(gallery) {

		},
		getPrevious: function(gallery) {

		}
	}

	return Media;
});