angular.module('portfolio.classes').factory('Contact', function(ContactType) {
	var id;
	var value;
	var type;
	var image;
	var icon;

	function Contact(params) {
		this.id = params.id;
		this.value = params.value || "";

		if(params.type instanceof ContactType) {
			this.type = params.type;
		}

		if(params.image == null || params.image == "") {
			if(this.type == null) {
				this.image = "";
			} else this.image = this.type.image;
		} else this.image = params.image;

		if(params.icon == null || params.icon == "") {
			if(this.type == null) {
				this.icon = "";
			} else this.icon = this.type.icon;
		} else this.icon = params.icon;
	}

	Contact.prototype = {
		getLink: function() {
			return this.type.prefix + this.value;
		}
	}

	return Contact;
})