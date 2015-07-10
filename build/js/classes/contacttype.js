angular.module('portfolio.classes').factory('ContactType', function() {
	var id;
	var name;
	var prefix;
	var image;

	function ContactType(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.prefix = params.prefix || "";
		this.image = params.image || "";
	}

	return ContactType;
});