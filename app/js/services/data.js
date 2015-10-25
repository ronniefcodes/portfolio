angular.module('portfolio.services').service('DataService', 
	['$http', '$q', '$filter', 'config', 'CacheService', 'Person', 'Skill', 'Project', 'Work', 'Contact',
	function($http, $q, $filter, config, CacheService, Person, Skill, Project, Work, Contact) {

	this.get = function(type) {
		//switch for type provided to load content
		switch(type) {
			case "person":
				return getPerson();
				break;
			case "contacts": 
				return getContacts();
				break;
			case "work":
				return getWork();
				break;
			case "projects":
				return getProjects();
				break;
			case "skills":
				return getSkills();
				break;
			default: 
				return null;
				break;
		}
	}

	function getPerson() {
		var response = function(response) {
			var obj = response.data, person = null;
			if(obj !== null) {
				person = new Person(obj);
				CacheService.set('work', person);
			}
			return person;
		};
		return load('person', 'content/data/person.json', response);
	}

	function getWork() {
		var response = function(response) {
			var obj = response.data, work = [];
			if(obj !== null) {
				for(var i = 0, len = obj.length; i < len; i++) {
					work.push(new Work(obj[i]));
				}
				CacheService.set('work', work);
			}
			return work;
		};
		return load('work', 'content/data/work.json', response);
	}

	function getProjects() {
		var response = function(response) {
			var obj = response.data, projects = [];
			if(obj !== null) {
				for(var i = 0, len = obj.length; i < len; i++) {
					projects.push(new Project(obj[i]));
				}
				CacheService.set('projects', projects);
			}
			return projects;
		};
		return load('projects', 'content/data/projects.json', response);
	}

	function getSkills() {
		var response = function(response) {
			var obj = response.data, skills = [];
			if(obj !== null) {
				for(var i = 0, len = obj.length; i < len; i++) {
					skills.push(new Skill(obj[i]));
				}
				CacheService.set('skills', skills);
			}
			return skills;
		};
		return load('skills', 'content/data/skills.json', response);
	}

	function getContacts() {
		var response = function(response) {
			var obj = response.data, contacts = [];
			if(obj !== null) {
				for(var i = 0, len = obj.length; i < len; i++) {
					contacts.push(new Contact(obj[i]));
				}
				CacheService.set('contacts', contacts);
			}
			return contacts;
		};
		return load('contacts', 'content/data/contact.json', response);
	}

	//check cacheservice for existing data, otherwise load from json using file name provided
	function load(type, url, return_func) {
		var defer = $q.defer();
		var data = CacheService.get(type);
		if(data === undefined || data === null) {
			return loadFromJson(url, return_func);
		} else defer.resolve(data);
		return defer.promise;		
	}

	//call http service to get file
	function loadFromJson(url, return_func) {
		var defer = $q.defer();
		$http({ method: 'get', url: url, cache: true
		}).then(function(response) {
			defer.resolve(return_func(response));
		});
		return defer.promise;
	}
}]);