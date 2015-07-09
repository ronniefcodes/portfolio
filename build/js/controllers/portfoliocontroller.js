angular.module('controllers').controller('PortfolioController', 
	function($scope, Person, Contact, ContactType, Project, ProjectType, Media, Technology) {
		var technologies = [
			new Technology({ id: 1, name: 'AngularJS' }),
			new Technology({ id: 2, name: 'Javascript' })
		];
		var projecttypes = [
			new ProjectType({ id: 1, name: 'Front-end'}),
			new ProjectType({ id: 1, name: 'Back-end'}),
			new ProjectType({ id: 1, name: 'Project Management'})
		]
		var email = new ContactType({ id: 1, name: "Email", prefix: "Mailto:" });
		var contacts = [ new Contact({ id: 1, value: "ronniech@outlook.com", type: email }) ];
		var person = new Person({ id: 1, name: "Ronnie Cheung", title: 'Full Stack Developer', summary: "", contacts: contacts });
		$scope.person = person;
	});