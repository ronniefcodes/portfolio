using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public List<Project> Projects { get; set; }
        public List<Contact> Contacts { get; set; }

        public Person(int id, string name, string title, string summary)
        {
            this.Id = id;
            this.Name = name;
            this.Title = title;
            this.Summary = summary;
            this.Projects = new List<Project>();
            this.Contacts = new List<Contact>();
        }
    }
}