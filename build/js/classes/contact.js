angular.module('classes').factory('Contact', function(ContactType) {
	var id;
	var value;
	var type;

	function Contact(params) {
		this.id = params.id;
		this.value = params.value || "";

		if(params.type instanceof ContactType) {
			this.type = params.type;
		}
	}

	return Contact;
})