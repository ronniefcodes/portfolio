angular.module('portfolio.services').service('DataService', 
	function($http, $filter, config, Person, Project, ProjectType, Media, Technology, Contact, ContactType) {
	this.getPerson = function(id) {
		var technologies = [
			new Technology({ id: 1, name: 'AngularJS' }),
			new Technology({ id: 2, name: 'Javascript' })
		];

		var projecttypes = [
			new ProjectType({ id: 1, name: 'Front-end' }),
			new ProjectType({ id: 2, name: 'Back-end' }),
			new ProjectType({ id: 3, name: 'Project Management' })
		];

		var media = [
			new Media({ id: 1, url: 'img/work/aw_eh-0.jpg', caption: 'enchanted holiday', is_mobile: false, next: 2 }),
			new Media({ id: 2, url: 'img/work/aw_eh-1.jpg', caption: 'enchanted holiday', is_mobile: false, previous: 1 }),
			new Media({ id: 3, url: 'img/work/mobile/aw-eh-1.jpg', caption: 'enchanted holiday mobile', is_mobile: true, next: 5 }),
			new Media({ id: 4, url: 'img/work/one-resolutions-1.jpg', caption: 'screenshot', is_mobile: false }),
			new Media({ id: 5, url: 'img/work/mobile/aw-eh-2.jpg', caption: 'enchanted holiday mobile', is_mobile: true, previous: 3 }),
			new Media({ id: 6, url: 'img/work/hkn-cities-index.jpg', caption: 'heineken cities 2', is_mobile: false })
		];

		var projects = [ 
			new Project({ 
				id: 1, 
				name: 'Air Wick Enchanted Holidays', 
				summary: 'I built both the front and back end components for this project. 
				This was a responsive microsite that heavily utilized parallax and scrolling 
				effects, requiring JS and CSS3. It included an social media feed that pulled 
				hashtagged image content from Facebook, Instagram and Twitter.',
				highlight: 1,
				project_type: [ projecttypes[0], projecttypes[1] ],
				media: [ media[0], media[1], media[2], media[4] ],
				technology: technologies
			}),
			new Project({
				id: 2,
				name: 'Old Portfolio',
				summary: 'There was supposed to be a bizarre Choose-Your-Own-Adventure segment. It wasn\'t great',
				url: 'http://www.ronniecheung.ca',
				project_type: [ projecttypes[0], projecttypes[1] ],
				media: [ media[3] ],
				technology: technologies
			}),
			new Project({ 
				id: 3, 
				name: 'C', 
				summary: 'This project.',
				project_type: [ projecttypes[0] ],
				media: [ media[6] ]
			}),
			new Project({
				id: 4,
				name: 'D',
				url: 'http://www.ronniecheung.ca',
				project_type: [ projecttypes[0], projecttypes[1] ],
				technology: technologies
			}),
			new Project({ 
				id: 5, 
				name: 'E', 
				summary: 'This project.',
				project_type: [ projecttypes[0] ],
				technology: technologies
			}),
			new Project({
				id: 6,
				name: 'F',
				summary: 'There was supposed to be a bizarre Choose-Your-Own-Adventure segment. It wasn\'t great',
				url: 'http://www.ronniecheung.ca',
				project_type: [ projecttypes[0], projecttypes[1] ],
				technology: technologies
			}),
			new Project({ 
				id: 7, 
				name: 'G', 
				summary: 'This project.',
				project_type: [ projecttypes[0] ],
			}),
			new Project({
				id: 8,
				name: 'H',
				url: 'http://www.ronniecheung.ca',
				project_type: [ projecttypes[0], projecttypes[1] ],
				technology: technologies
			}),
			new Project({ 
				id: 7, 
				name: 'I', 
				summary: 'This project.',
				project_type: [ projecttypes[0] ]
			}),
			new Project({
				id: 8,
				name: 'J',
				url: 'http://www.ronniecheung.ca',
				project_type: [ projecttypes[0], projecttypes[1] ],
				technology: technologies
			})
		];

		var email = new ContactType({ id: 1, name: 'Email', prefix: "Mailto:" });
		var github = new ContactType({ id: 2, name: 'GitHub' });
		var website = new ContactType({ id: 3, name: 'Website' });

		var contacts = [ 
			new Contact({ id: 1, value: "ronniech@outlook.com", type: email }),
			new Contact({ id: 2, value: 'https://github.com/ronniefcodes', type: github }),
			new Contact({ id: 3, value: 'http://www.ronniecheung.ca', type: website }),
		];

		var people = [
			new Person({ id: 1, 
				name: "Ronnie Cheung", 
				title: 'Full Stack Developer', 
				summary: "<p>Vestibulum egestas, mi eget malesuada fringilla, justo velit tristique elit, 
				bibendum sodales est magna in enim. Praesent sit amet dictum ante. Curabitur tortor metus, 
				viverra sit amet lectus eget, venenatis consectetur tortor. Pellentesque at imperdiet eros. 
				Mauris non mollis tortor, at dignissim neque. Sed orci mi, lacinia vel massa quis, tristique 
				hendrerit dolor. Sed id mi turpis. Vestibulum sed efficitur odio. In cursus lorem venenatis 
				libero mattis, et pretium augue aliquet. Duis eget libero eu elit fringilla sodales eget id 
				felis. Aenean in est lectus. Duis et tortor accumsan, lacinia erat ac, malesuada orci. Class 
				aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec 
				feugiat, magna ac tincidunt condimentum, ipsum magna pellentesque nunc, eu commodo lectus 
				tortor id ligula. Suspendisse nec finibus nulla. Integer magna erat, eleifend et dui at, dignissim 
				gravida nunc.</p><p>Nullam malesuada sollicitudin orci, ac tristique ex imperdiet sagittis. 
				Integer a interdum massa. Pellentesque maximus euismod neque eget interdum. Quisque sodales 
				quam at consequat lobortis. Quisque id orci ac diam pulvinar posuere eu sit amet dui. Donec 
				mi tellus, ultrices in urna in, laoreet euismod ipsum. Proin vulputate ipsum sed nulla elementum, 
				et pellentesque justo mattis.</p>", 
				projects: projects, 
				contacts: contacts 
			})
		];

		return $filter('findById')(people, id);
	}
});