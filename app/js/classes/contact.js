angular.module('portfolio.classes').factory('Contact', [ function() {
	var id;
	var value;
	var type;
	var prefix;

	function Contact(params) {
		this.id = params.id;
		this.value = params.value || "";
		this.type = params.type || "";
		this.prefix = params.refix || "";
	}

	Contact.prototype = {
		getLink: function() {
			return this.type.prefix + this.value;
		}
	}

	return Contact;
}]);