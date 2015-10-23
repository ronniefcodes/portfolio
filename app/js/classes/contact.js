angular.module('portfolio.classes').factory('Contact', [ function() {
	var id,
		value, //value of contact method (email, url, number, etc.)
		type, //type of contact method (mobile, email)
		category, //category of contact (broader type, like social, phone)
		prefix; //prefix to be used in anchors (tel:, mailto:)

	function Contact(params) {
		this.id = params.id;
		this.value = params.value || "";
		this.type = params.type || "";
		this.category = params.category || "";
		this.prefix = params.prefix || "";
	}

	Contact.prototype = {
		getLink: function() {
			return this.type.prefix + this.value;
		}
	}

	return Contact;
}]);