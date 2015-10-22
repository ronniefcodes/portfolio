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
			
			//initialize classes for loaded elements
			if (obj.projects != null) {
				for(var i = 0, len = obj.projects.length; i < len; i++) {
					if(obj.projects[i].media != null) {
						for(var j = 0, len2 = obj.projects[i].media.length; j < len2; j++)
							obj.projects[i].media[j] = new Media(obj.projects[i].media[j]);
					}
					if(obj.projects[i].project_type != null) {							
						for(var j = 0, len2 = obj.projects[i].project_type.length; j < len2; j++)
							obj.projects[i].project_type[j] = new ProjectType(obj.projects[i].project_type[j]);
					}
					if(obj.projects[i].technology != null) {
						for(var j = 0, len2 = obj.projects[i].technology.length; j < len2; j++)
							obj.projects[i].technology[j] = new Technology(obj.projects[i].technology[j]);
					}	
					obj.projects[i] = new Project(obj.projects[i]);
				}
			}
			if(obj.contacts != null) {
				for(var i = 0, len = obj.contacts.length; i < len; i++) {
					if(obj.contacts[i].type != null) obj.contacts[i].type = new ContactType(obj.contacts[i].type);
					obj.contacts[i] = new Contact(obj.contacts[i]);
				}
			}
			if(obj.background != null) obj.background = new Media(obj.background);

			return new Person(obj);
		});

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
}]);