angular.module('services').service('DataService', 
	function($http, $filter, Person, Project, ProjectType, Media, Technology, Contact, ContactType) {

	var technologies = [
		new Technology({ id: 1, name: 'AngularJS' }),
		new Technology({ id: 2, name: 'Javascript' })
	];

	var projecttypes = [
		new ProjectType({ id: 1, name: 'Front-end'}),
		new ProjectType({ id: 2, name: 'Back-end'}),
		new ProjectType({ id: 3, name: 'Project Management'})
	];

	var media = [
		new Media({ id: 1, caption: 'screenshot', is_mobile: false, next: 2 }),
		new Media({ id: 2, caption: 'second screenshot', is_mobile: false, previous: 1 }),
		new Media({ id: 3, caption: 'mobile screenshot', is_mobile: true }),
		new Media({ id: 4, caption: 'screenshot', is_mobile: false })
	];

	var projects = [ 
		new Project({ 
			id: 1, 
			name: 'Redesigned Portfolio', 
			summary: 'This project.',
			highlight: 1,
			project_type: [ projecttypes[0] ],
			media: [ media[0], media[1], media[2] ],
			technology: technologies
		}),
		new Project({
			id: 2,
			name: 'Old Portfolio',
			summary: 'There was supposed to be a bizarre Choose-Your-Own-Adventure segment.',
			url: 'http://www.ronniecheung.ca',
			project_type: [ projecttypes[0], projecttypes[1] ],
			media: [ media[3] ]
		})
	];

	var email = new ContactType({ id: 1, name: 'Email', prefix: "Mailto:" });
	var github = new ContactType({ id: 2, name: 'GitHub' });

	var contacts = [ 
		new Contact({ id: 1, value: "ronniech@outlook.com", type: email }),
		new Contact({ id: 2, value: 'https://github.com/ronniefcodes', type: github }) ];

	var people = [
		new Person({ id: 1, name: "Title", title: 'Full Stack Developer', summary: "I am a person.", projects: projects, 
		contacts: contacts })
		];

	this.getPerson = function(id) {
		return $filter('findById')(people, id);
	}

});