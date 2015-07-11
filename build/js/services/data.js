angular.module('portfolio.services').service('DataService', 
	function($http, $filter, config, Person, Project, ProjectType, Media, Technology, Contact, ContactType) {
	this.getPerson = function(id) {
		var promise = $http.get(config.api + "portfolio/" + id).then(function(response) {
			var obj = JSON.parse(response.data);

			if(obj == null) return null;
			
			var contacts;
			if(obj.Contacts != null) {
				contacts = [];
				for(var i = 0; i < obj.Contacts.length; i++) {
					var contact = obj.Contacts[i], contacttype;

					contacts.push(new Contact({
						id: contact.Id,
						name: contact.Name,
						image: contact.Image,
						type: new ContactType({
							id: contact.Type.Id,
							name: contact.Type.Name,
							prefix: contact.Type.Prefix,
							image: contact.Type.Image
						})
					}));
				}
			}

			var projects;
			if(obj.Projects != null) {
				projects = [];
				for(var i = 0; i < obj.Projects.length; i++) {
					var projecttypes, technologies, media;
					var project = obj.Projects[i];

					if(project.Types != null) {
						projecttypes = [];
						for(var j = 0; j < project.Types.length; j++) {
							projecttypes.push(
								new ProjectType({ id: project.Types[j].id,
												name: project.Types[j].name }));
						}
					}

					if(project.Technologies != null) {
						technologies = [];
						for(var j = 0; j < project.Technologies.length; j++) {
							technologies.push(
								new Technology({ id: project.Technologies[j].id,
												name: project.Technologies[j].name }));
						}
					}

					if(project.Media != null) {
						media = [];
						for(var j = 0; j < project.Media.length; j++) {
							media.push(
								new Media({ id: project.Media[j].Id, 
											url: project.Media[j].Url, 
											caption: project.Media[j].Caption, 
											is_mobile: project.Media[j].IsMobile, 
											next: project.Media[j].Next,
											previous: project.Media[j].Previous }));
						}
					}

					projects.push(new Project({
						id: project.Id,
						name: project.Name, 
						summary: project.Summary,
						highlight: project.Highlight,
						project_type: projecttypes,
						media: media,
						technology: technologies
					}));
				}
			}

			return new Person({
				id: obj.Id, 
				name: obj.Name, 
				title: obj.Title, 
				summary: obj.Summary, 
				projects: projects, 
				contacts: contacts
			});
		});
		return promise;
	}
});