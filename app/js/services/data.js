angular.module('portfolio.services').service('DataService', 
	['$http', '$q', '$filter', 'config', 'CacheService', 'Person', 'Skill', 'Project', 'Work', 'Contact',
	function($http, $q, $filter, config, CacheService, Person, Skill, Project, Work, Contact) {

	this.load = function() {
		var defer = $q.defer();
		var data = CacheService.get('person');
		if(data === undefined || data === null) {
			$http({ 
				method: 'get', 
				url: 'content/data.json', 
				cache: true
			}).then(function(response) {
				var obj = response.data;
				if(obj !== null) {
					var person = new Person(obj);
					CacheService.set('person', person);
					defer.resolve(person);
				} else defer.resolve(null);
			});
		} else { 
			defer.resolve(data);
		}
		return defer.promise;
	}

	function loadFromJson(url, return_func) {
		var defer = $q.defer();

		$http({
			method: 'get',
			url: url,
			cache: true
		}).then(function(response) {
			defer.resolve(return_func(response));
		})

		return defer.promise;
	}

	this.loadFromJS = function() {	 	
	 	var skills = [];
	 	skills.push(new Skill({ id: 1, name: 'HTML', category: 'Programming Language', type: 'Front End' }, true));
	 	skills.push(new Skill({ id: 2, name: 'CSS', category: 'Programming Language', type: 'Front End' }, true));
	 	skills.push(new Skill({ id: 3, name: 'Javascript', category: 'Programming Language', type: 'Front End' }, true));
	 	skills.push(new Skill({ id: 4, name: 'JQuery', category: 'Library', type: 'Front End' }, true));
	 	skills.push(new Skill({ id: 5, name: 'AngularJS', category: 'Framework', type: 'Front End' }, true));
	 	skills.push(new Skill({ id: 6, name: 'Sublime Text', category: 'Tool', type: 'Front End' }, true));
	 	skills.push(new Skill({ id: 7, name: 'Photoshop', category: 'Tool', type: 'Front End' }, true));
	 	skills.push(new Skill({ id: 8, name: 'Java', category: 'Programming Language', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 9, name: 'C#', category: 'Programming Language', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 10, name: 'Visual Studio', category: 'Tool', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 11, name: 'ASP.NET', category: 'Framework', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 12, name: 'PHP', category: 'Programming Language', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 13, name: 'Wordpress', category: 'CMS', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 14, name: 'Sitecore', category: 'CMS', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 15, name: 'Sharepoint', category: 'CMS', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 16, name: 'SQL', category: 'Programming Language', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 17, name: 'Microsoft SQL Server', category: 'Database', type: 'Back End' }, true));
	 	skills.push(new Skill({ id: 18, name: 'Oracle Database', category: 'Database', type: 'Back End' }, true));

	 	var projects = [];
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Sandbox',
	 		description: 'Website for Sandbox Advertising Inc.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[5] ]
	 	}, true));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Heineken Cities',
	 		description: 'Microsite for Heineken Cities of the World campaign.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[8], skills[9], skills[10], skills[15], skills[16] ]
	 	}, true));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Nikon I Am Uncompromising',
	 		description: 'Microsite for Nikon\'s I Am Uncompromising sale.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[5] ]
	 	}, true));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Heineken Extra Cold',
	 		description: 'Page and map module for Heineken\'s Extra Cold draught promotion.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[8], skills[9] ]
	 	}, true));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Molson US Corporate Site',
	 		description: 'Site-wide updates to styling and functionality of a Sitecore website.',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[8], skills[9], skills[10], skills[13] ]
	 	}, true));	 	
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Air Wick Enchanted Holiday',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4] ]
	 	}, true));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Rocky Mountain Water Company',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[4], skills[8], skills[9], skills[10] ]
	 	}, true));
	 	projects.push(new Project({
	 		id: projects.length+1,
	 		title: 'Pulse',
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[8], skills[9], skills[10], skills[15], skills[16] ]
	 	}, true));

	 	var work = [];
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: '.NET Developer',
	 		company: 'Sandbox Advertising Inc.',
	 		description: 'Functionally full stack developer for Sandbox Advertising.',
	 		url: 'http://www.sandboxww.ca',
	 		start_date: new Date(2013, 9, 23),
	 		end_Date: new Date(2015, 11, 10),
	 		projects: [ projects[0], projects[1], projects[2], projects[3], projects[4], projects[5], projects[6] ],
	 		skills: [ skills[6] ]
	 	}, true));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Project Coordinator Co-op',
	 		company: 'Research In Motion Ltd.',
	 		description: 'Project Manager and Web Developer for project management team.',
	 		start_date: new Date(2012, 1, 1),
	 		end_date: new Date(2012, 4, 27),
	 		projects: [7],
	 		skills: [ skills[0], skills[1], skills[2], skills[3], skills[8], skills[9], skills[10], skills[15], skills[16] ]
	 	}, true));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Business Analyst (Internship)',
	 		company: 'CIBC',
	 		start_date: new Date(2011, 9),
	 		end_date: new Date(2011, 12)
	 	}, true));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Assistant Performance Analyst (Internship)',
	 		company: 'Hydro One',
	 		skills: [ skills[7] ],
	 		start_date: new Date(2011, 1),
	 		end_date: new Date(2011, 4)
	 	}, true));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Junior Technical Consultant (Internship)',
	 		company: 'Innovapost',
	 		start_date: new Date(2010, 9),
	 		end_date: new Date(2010, 12)
	 	}, true));
	 	work.push(new Work({
	 		id: work.length+1,
	 		title: 'Web Developer',
	 		company: 'Freelance Work'
	 	}, true));

	 	var contact = [];
	 	contact.push(new Contact({
	 		id: contact.length+1,
			value: 'ronniech@outlook.com',
			type: 'email',
			prefix: 'mailto:'
	 	}, true));
	 	contact.push(new Contact({
	 		id: contact.length+1,
			value: '6478283666',
			type: 'mobile',
			category: 'phone',
			prefix: 'tel:'
	 	}, true));
	 	contact.push(new Contact({
	 		id: contact.length+1,
	 		value: 'http://www.github.com/ronniefcodes',
	 		type: 'github',
	 		category: 'social'
	 	}, true));
	 	contact.push(new Contact({
	 		id: contact.length+1,
	 		value: 'http://ca.linkedin.com/in/ronniech/',
	 		type: 'linkedin',
	 		category: 'social'
	 	}, true));

	 	var person = new Person({
	 		id: 1,
			first_name: 'Ronnie',
			last_name: 'Cheung',
			title: 'Full Stack Developer',
			work_history: work,
			contacts: contact
	 	}, true);

	 	return person;
	}

}]);