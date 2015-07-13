angular.module('portfolio.services').service('DataService', 
	['$http', '$q', '$filter', 'config', 'Person', 'Project', 'ProjectType', 'Media', 'Technology', 'Contact', 'ContactType',
	function($http, $q, $filter, config, Person, Project, ProjectType, Media, Technology, Contact, ContactType) {
	this.getPerson = function(id) {
		var defer = $q.defer();

		$http({ 
			method: 'get', 
			url: config.api + "portfolio/" + id, 
			cache: true
		}).then(function(response) {
			var obj = JSON.parse(response.data);

			if(obj == null) return null;
			
			var contacts = [];
			if(obj.Contacts != null && obj.Contacts.prop && obj.Contacts.prop.constructor === Array) {
				for(var i = 0, len = obj.Contacts.length; i < len; i++) {
					var contact = obj.Contacts[i], contacttype;

					contacts.push(new Contact({
						id: contact.Id,
						value: contact.Value,
						image: contact.Image,
						icon: contact.Icon,
						type: new ContactType({
							id: contact.Type.Id,
							name: contact.Type.Name,
							prefix: contact.Type.Prefix,
							image: contact.Type.Image,
							icon: contact.Type.Icon
						})
					}));
				}
			}

			var projects = [];
			if(obj.Projects != null && obj.Projects.prop && obj.Projects.prop.constructor === Array) {
				for(var i = 0, len = obj.Projects.length; i < len; i++) {

					var project = obj.Projects[i];
					projects.push(new Project({
						id: project.Id,
						name: project.Name, 
						summary: project.Summary,
						highlight: project.Highlight,
						project_type: function() {
							var project_types = [];
							if(project.Types != null && project.Types.prop && project.Types.prop.constructor === Array) {
								for(var j = 0, len = project.Types.length; j < len; j++) {
									projecttypes.push(new ProjectType({ id: project.Types[j].Id,
														name: project.Types[j].Name }));
								}
							}
							return project_types;
						},
						media: function() {
							var media = [];
							if(project.Media != null && project.Media.prop && project.Media.prop.constructor === Array) {
								for(var j = 0, len = project.Media.length; j < len; j++) {
									media.push(new Media({ id: project.Media[j].Id, 
													url: project.Media[j].Url, 
													caption: project.Media[j].Caption, 
													is_mobile: project.Media[j].IsMobile, 
													next: project.Media[j].Next,
													previous: project.Media[j].Previous }));
								}
							}
							return media;
						},
						technology: function() {
							var tech = [];
							if(project.Technologies != null && 
								project.Technologies.prop && 
								project.Technologies.prop.constructor === Array) {

								for(var j = 0, len = project.Technologies.length; j < len; j++) {
									tech.push(new Technology({ id: project.Technologies[j].id,
														name: project.Technologies[j].name }));
								}
							}
							return tech;
						}
					}));
				}
			}

			var background = null;
			if(obj.Background != null) {
				background = new Media({ 
					id: obj.Background.Id, 
					url: obj.Background.Url 
				});
			}

			defer.resolve(new Person({
				id: obj.Id, 
				name: obj.Name, 
				title: obj.Title, 
				summary: obj.Summary, 
				background: background,
				projects: projects, 
				contacts: contacts
			}));
		});

		return defer.promise;
	}
}]);