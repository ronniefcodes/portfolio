using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Person
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }        
        [JsonProperty(PropertyName = "summary")]
        public string Summary { get; set; }
        [JsonIgnore]
        public int? BackgroundId { get; set; }
        [JsonProperty(PropertyName = "background")]
        public Media Background { get; set; }
        [JsonProperty(PropertyName = "projects")]
        public List<Project> Projects { get; set; }
        [JsonProperty(PropertyName = "contacts")]
        public List<Contact> Contacts { get; set; }

        public Person(int id, string name, string title, string summary, int? backgroundid = null)
        {
            this.Id = id;
            this.Name = name;
            this.Title = title;
            this.Summary = summary;
            this.BackgroundId = backgroundid;
            this.Projects = new List<Project>();
            this.Contacts = new List<Contact>();
        }
    }
}