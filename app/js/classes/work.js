angular.module('portfolio.classes').factory('Work', 
['$filter', 'TypeService', 'Project', 'Skill',
function($filter, TypeService, Project, Skill) {
	var id,
		title, //string - title at company
		company, //string - company name
		description, //string - description of project
		url, //string - company website
		start_date, //(start_date & end_date) datetime - date started and finished at position
		end_date,
		skills, //array<Skill> - skills applied in position
		type; //array<string> - type of project (ie. front end, back end)

	function Work(params) {
		this.id = params.id;
		this.title = params.title || "";
		this.company = params.company || "";
		this.description = params.description || "";
		this.url = params.url || "";
		this.highlight = params.highlight;

		if(params.start_date !== null && params.start_date instanceof Date) this.start_date = params.start_date;
		if(params.end_date !== null && params.end_date instanceof Date) this.end_date = params.end_date;

		this.skills = [];
		if(params.skills !== null) {
			if(TypeService.isArray(params.skills)) {
				for(var i = 0, len = params.skills.length; i < len; i++) {
					this.skills.push(new Skill(params.skills[i]));
				}
			} else this.skills.push(new Skill(params.skills));
		}

		this.type = [];
		if(params.type !== null) {
			if(TypeService.isArray(params.type)) this.type = params.type;
			else this.type.push(params.type);
		}
	}

	Work.prototype = {
	}

	return Work;
}]);