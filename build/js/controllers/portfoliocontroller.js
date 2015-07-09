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
		];

		var projects = [ 
			new Project({ 
				id: 1, 
				name: 'Redesigned Portfolio', 
				summary: 'This project.', 
				type: [ projecttypes[0], projecttypes[1] ]
			}),
			new Project({
				id: 2,
				name: 'Old Portfolio',
				summary: 'There was supposed to be a bizarre Choose-Your-Own-Adventure segment.',
				url: 'http://www.ronniecheung.ca',
				type: [ projecttypes[0], projecttypes[1] ]
			})
		];

		var email = new ContactType({ id: 1, name: 'Email', prefix: "Mailto:" });
		var github = new ContactType({ id: 2, name: 'GitHub' });

		var contacts = [ 
			new Contact({ id: 1, value: "ronniech@outlook.com", type: email }),
			new Contact({ id: 2, value: 'https://github.com/ronniefcodes', type: github }) ];

		var person = new Person({ id: 1, 
			name: "Ronnie Cheung", 
			title: 'Full Stack Developer', 
			summary: "I am a person.", 
			projects: projects, 
			contacts: contacts });

		$scope.person = person;
		console.log($scope.person);
	});