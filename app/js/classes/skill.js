angular.module('portfolio.classes').factory('Skill', [ function() {
	var id, 
		name, //string - name of skill
		category, //string - skill category (ie. language, software)
		type; //string - type of skill (ie. front end, back end)


	function Skill(params) {
		this.id = params.id;
		this.name = params.name || "";
		this.category = params.category || "";
		this.type = params.type || "";
	}

	return Skill;
}]);