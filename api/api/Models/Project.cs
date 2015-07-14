using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Project
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonIgnore]
        public int? PersonId { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "summary")]
        public string Summary { get; set; }
        [JsonProperty(PropertyName = "url")]
        public string Url { get; set; }
        [JsonProperty(PropertyName = "highlight")]
        public int? Highlight { get; set; }
        [JsonProperty(PropertyName = "project_type")]
        public List<Project_Type> Types { get; set; }
        [JsonProperty(PropertyName = "media")]
        public List<Media> Media { get; set; }
        [JsonProperty(PropertyName = "technology")]
        public List<Technology> Technologies { get; set; }

        public Project(int id, string name, string summary, string url, int? highlight = null, int? personid = null)
        {
            this.Id = id;
            this.Name = name;
            this.Summary = summary;
            this.Url = url;
            this.Highlight = highlight;
            this.PersonId = personid;
            this.Types = new List<Project_Type>();
            this.Media = new List<Media>();
            this.Technologies = new List<Technology>();
        }
    }
}