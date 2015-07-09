angular.module('classes').factory('Contact', function(ContactType) {
	var id;
	var value;
	var type;
	var image;

	function Contact(params) {
		this.id = params.id;
		this.value = params.value || "";

		if(params.type instanceof ContactType) {
			this.type = params.type;
		}

		if(this.image == null) {
			if(this.type == null) {
				this.image = "";
			} else this.image = this.type.image;
		} else this.image = params.image;
	}

	Contact.prototype = {
		getAnchor: function() {
			return this.type.prefix + this.value;
		}
	}

	return Contact;
})