angular.module('portfolio.classes').factory('ContactType', function() {
	var id;
	var name;
	var prefix;
	var image;
	var icon;

	function ContactType(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.prefix = params.prefix || "";
		this.image = params.image || "";
		this.icon = params.icon || "";
	}

	return ContactType;
});