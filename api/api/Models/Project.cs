using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
        public string Url { get; set; }
        public int? Highlight { get; set; }
        public List<Project_Type> Types { get; set; }
        public List<Media> Media { get; set; }
        public List<Technology> Technologies { get; set; }

        public Project(int id, string name, string summary, string url, int? highlight = null)
        {
            this.Id = id;
            this.Name = name;
            this.Summary = summary;
            this.Url = url;
            this.Highlight = highlight;
            this.Types = new List<Project_Type>();
            this.Media = new List<Media>();
            this.Technologies = new List<Technology>();
        }
    }
}