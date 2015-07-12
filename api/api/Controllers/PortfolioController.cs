using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using api.Models;

namespace api.Controllers
{
    public class PortfolioController : ApiController
    {
        // GET api/portfolio
        public IEnumerable<string> Get()
        {
            return null;
        }

        // GET api/portfolio/5
        public string Get(int id)
        {
            /* TO DO: hook up to a database 
             Also, find a better host with a useable database
             */
            List<Technology> tech = new List<Technology>();
            tech.Add(new Technology(1, "HTML5"));
            tech.Add(new Technology(2, "CSS3"));
            tech.Add(new Technology(3, "Javascript"));
            tech.Add(new Technology(4, "JQuery"));
            tech.Add(new Technology(5, "AngularJS"));
            tech.Add(new Technology(6, "C#"));

            List<Project_Type> project_types = new List<Project_Type>();
            project_types.Add(new Project_Type(1, "Front-end Development"));
            project_types.Add(new Project_Type(2, "Back-end Development"));
            project_types.Add(new Project_Type(3, "Project Management"));
            project_types.Add(new Project_Type(4, "Business Analysis"));

            List<Media> media = new List<Media>();
            media.Add(new Media(1, "", false, "img/work/aw_eh-0.jpg", null, 2));
            media.Add(new Media(2, "", false, "img/work/aw_eh-1.jpg", 1));
            media.Add(new Media(3, "", true, "img/work/mobile/aw-eh-1.jpg", null, 4));
            media.Add(new Media(4, "", true, "img/work/mobile/aw-eh-2.jpg", 3));
            media.Add(new Media(5, "", false, "img/work/one-resolutions-1.jpg"));
            media.Add(new Media(6, "", false, "img/work/hkn-cities-index.jpg"));
            media.Add(new Media(7, "", false, "img/background.jpg"));

            List<Project> projects = new List<Project>();
            Project project = new Project(1, "Air Wick Enchanted Holidays",
                "I built both the front and back end components for this project. " +
                "This was a responsive microsite that heavily utilized parallax and scrolling " +
                "effects, requiring JS and CSS3. It included an social media feed that pulled " +
                "hashtagged image content from Facebook, Instagram and Twitter.",
                "", 1);
            project.Technologies.AddRange(new List<Technology> { tech.FirstOrDefault(t => t.Id == 1), 
                                                                tech.FirstOrDefault(t => t.Id == 2), 
                                                                tech.FirstOrDefault(t => t.Id == 3), 
                                                                tech.FirstOrDefault(t => t.Id == 4), 
                                                                tech.FirstOrDefault(t => t.Id == 6) });
            project.Media.AddRange(new List<Media> { media.FirstOrDefault(m => m.Id == 1), 
                                                    media.FirstOrDefault(m => m.Id == 2), 
                                                    media.FirstOrDefault(m => m.Id == 3), 
                                                    media.FirstOrDefault(m => m.Id == 4) });
            project.Types = new List<Project_Type> { project_types.FirstOrDefault(p => p.Id == 1), 
                                                    project_types.FirstOrDefault(p => p.Id == 2) };
            projects.Add(project);


            project = new Project(1, "Heineken #livelegendary",
                "I built both the front for this fully-responsive single-page microsite. " +
                "This site utilized heavy CSS3 transitions and animations (built using SASS), " +
                "supporting a custom grid style system, as well as a custom responsive, paginatable " +
                "gallery library that was used to render an Instagram feed.",
                "", 6);
            project.Technologies.AddRange(new List<Technology> { tech.FirstOrDefault(t => t.Id == 1), 
                                                                tech.FirstOrDefault(t => t.Id == 2), 
                                                                tech.FirstOrDefault(t => t.Id == 3), 
                                                                tech.FirstOrDefault(t => t.Id == 4)  });
            project.Media.Add(media.FirstOrDefault(m => m.Id == 6));
            project.Types.AddRange(new List<Project_Type> { project_types.FirstOrDefault(p => p.Id == 1) });
            projects.Add(project);

            project = new Project(1, "Resolutions You Can Keep",
                "This was a site made for One Advertising's New Years promotional campaign. " +
                "This site, which I built in its entirety, would allow users to view a collection of mugs " +
                "and 'order' them. The form would update upon external confirmation and reflect the claimant.",
                "", 5);
            project.Technologies.AddRange(new List<Technology> { tech.FirstOrDefault(t => t.Id == 1), 
                                                                tech.FirstOrDefault(t => t.Id == 2), 
                                                                tech.FirstOrDefault(t => t.Id == 3), 
                                                                tech.FirstOrDefault(t => t.Id == 4), 
                                                                tech.FirstOrDefault(t => t.Id == 6) });
            project.Media.Add(media.FirstOrDefault(m => m.Id == 5));
            project.Types = new List<Project_Type> { project_types.FirstOrDefault(p => p.Id == 1), 
                                                    project_types.FirstOrDefault(p => p.Id == 2) };
            projects.Add(project);

            List<Contact_Type> contact_types = new List<Contact_Type>();
            contact_types.Add(new Contact_Type(1, "website", "", ""));
            contact_types.Add(new Contact_Type(2, "email", "mailto:", "", "fa-envelope-square"));
            contact_types.Add(new Contact_Type(3, "phone", "tel:", "", "fa-phone-square"));
            contact_types.Add(new Contact_Type(4, "document", "", ""));

            List<Contact> contacts = new List<Contact>();
            //contacts.Add(new Contact(1, "http://www.ronniecheung.ca", null, null, contact_types.FirstOrDefault(c => c.Id == 1)));
            contacts.Add(new Contact(2, "https://github.com/ronniefcodes", null, "fa-git-square", contact_types.FirstOrDefault(c => c.Id == 1)));
            contacts.Add(new Contact(3, "6478283666", null, null, contact_types.FirstOrDefault(c => c.Id == 3)));
            contacts.Add(new Contact(4, "ronniech@outlook.com", null, null, contact_types.FirstOrDefault(c => c.Id == 2)));
            contacts.Add(new Contact(5, "https://ca.linkedin.com/in/ronniech", null, "fa-linkedin-square", contact_types.FirstOrDefault(c => c.Id == 1)));

            List<Person> people = new List<Person>();
            Person person = new Person(1, "Ronnie Cheung", "Full Stack Developer",
                "<p>Sometimes, I make cool things for the internet.</p><p>Most of the times I just make things.</p>",
                media.FirstOrDefault(m => m.Id == 7));
            person.Contacts = contacts;
            person.Projects = projects;
            people.Add(person);

            return JsonConvert.SerializeObject(people.FirstOrDefault(p => p.Id == id));
        }

        // POST api/portfolio
        public void Post([FromBody]string value)
        {
        }

        // PUT api/portfolio/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/portfolio/5
        public void Delete(int id)
        {
        }
    }
}