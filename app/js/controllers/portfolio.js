angular.module('portfolio.controllers').controller('PortfolioController', 
	['$scope', 'DataService', 'Person', 'Skill', 'Project', 'Work', 'Contact',
	 function($scope, DataService, Person, Skill, Project, Work, Contact) {
	 	
	 	var skills = [];
	 	skills.push(new Skill({ id: 1, name: 'HTML', category: 'Programming Language', type: 'Front End' }));
	 	skills.push(new Skill({ id: 2, name: 'CSS', category: 'Programming Language', type: 'Front End' }));
	 	skills.push(new Skill({ id: 3, name: 'Javascript', category: 'Programming Language', type: 'Front End' }));
	 	skills.push(new Skill({ id: 4, name: 'JQuery', category: 'Library', type: 'Front End' }));
	 	skills.push(new Skill({ id: 5, name: 'AngularJS', category: 'Framework', type: 'Front End' }));
	 	skills.push(new Skill({ id: 6, name: 'Sublime Text', category: 'Tool', type: 'Front End' }));
	 	skills.push(new Skill({ id: 7, name: 'Photoshop', category: 'Tool', type: 'Front End' }));
	 	skills.push(new Skill({ id: 8, name: 'Java', category: 'Programming Language', type: 'Back End' }));
	 	skills.push(new Skill({ id: 9, name: 'C#', category: 'Programming Language', type: 'Back End' }));
	 	skills.push(new Skill({ id: 10, name: 'Visual Studio', category: 'Tool', type: 'Back End' }));
	 	skills.push(new Skill({ id: 11, name: 'ASP.NET', category: 'Framework', type: 'Back End' }));
	 	skills.push(new Skill({ id: 12, name: 'PHP', category: 'Programming Language', type: 'Back End' }));
	 	skills.push(new Skill({ id: 13, name: 'Wordpress', category: 'CMS', type: 'Back End' }));
	 	skills.push(new Skill({ id: 14, name: 'Sitecore', category: 'CMS', type: 'Back End' }));
	 	skills.push(new Skill({ id: 15, name: 'Sharepoint', category: 'CMS', type: 'Back End' }));
	 	skills.push(new Skill({ id: 16, name: 'SQL', category: 'Programming Language', type: 'Back End' }));
	 	skills.push(new Skill({ id: 17, name: 'Microsoft SQL Server', category: 'Database', type: 'Back End' }));
	 	skills.push(new Skill({ id: 18, name: 'Oracle Database', category: 'Database', type: 'Back End' }));

	 	var projects = [];
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Sandbox',
	 		description: 'Website for Sandbox Advertising Inc.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[5] ]
	 	}));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Heineken Cities',
	 		description: 'Microsite for Heineken Cities of the World campaign.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[8], skills[9], skills[10], skills[15], skills[16] ]
	 	}));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Nikon I Am Uncompromising',
	 		description: 'Microsite for Nikon\'s I Am Uncompromising sale.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[5] ]
	 	}));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Heineken Extra Cold',
	 		description: 'Page and map module for Heineken\'s Extra Cold draught promotion.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[8], skills[9] ]
	 	}));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Molson US Corporate Site',
	 		description: 'Site-wide updates to styling and functionality of a Sitecore website.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[8], skills[9], skills[10], skills[13] ]
	 	}));	 	
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Air Wick Enchanted Holiday',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4] ]
	 	}))

	 	var work = [];
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: '.NET Developer',
	 		company: 'Sandbox Advertising Inc.',
	 		description: 'Functionally full stack developer for Sandbox Advertising.',
	 		url: 'http://www.sandboxww.ca',
	 		start_date: new Date(2013, 9, 23),
	 		end_Date: new Date(2015, 11, 10),
	 		projects: [ projects[0], projects[1], projects[2], projects[3], projects[4] ],
	 		skills: [ skills[6] ]
	 	}));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Project Coordinator Co-op',
	 		company: 'Research In Motion Ltd.',
	 		description: 'Project Manager and Web Developer for project management team.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[8], skills[9], skills[10], skills[15], skills[16] ]
	 	}));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Business Analyst (Internship)',
	 		company: 'CIBC'
	 	}));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Data Analyst',
	 		company: 'Hydro One',
	 		skills: [ skills[7] ]
	 	}));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Web Developer',
	 		company: 'Innovapost'
	 	}));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Web Developer',
	 		company: 'Freelance Work'
	 	}))

	 	var contact = [];
	 	contact.push(new Contact({
	 		id: contact.length+1,
			value: 'ronniech@outlook.com',
			type: 'email',
			prefix: 'mailto:'
	 	}));
	 	contact.push(new Contact({
	 		id: contact.length+1,
			value: '6478283666',
			type: 'mobile',
			category: 'phone',
			prefix: 'tel:'
	 	}));
	 	contact.push(new Contact({
	 		id: contact.length+1,
	 		value: 'http://www.github.com/ronniefcodes',
	 		type: 'github',
	 		category: 'social'
	 	}));
	 	contact.push(new Contact({
	 		id: contact.length+1,
	 		value: 'http://ca.linkedin.com/in/ronniech/',
	 		type: 'linkedin',
	 		category: 'social'
	 	}))

	 	var person = new Person({
	 		id: 1,
			first_name: 'Ronnie',
			last_name: 'Cheung',
			title: 'Full Stack Developer',
			work_history: work,
			contacts: contact
	 	})

	 	console.log(JSON.stringify(person));


	 	/*DataService.load().then(function(data) {
	 		if(data instanceof Person) {
	 			$scope.person = data;
	 			$scope.$emit('content.load.complete');
	 		} else $scope.$emit('content.load.empty');
	 	}).error(function() {
	 		$scope.$emit('content.load.error');
	 	});*/
}]);