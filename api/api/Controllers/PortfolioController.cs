using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Caching;
using System.Web.Http;
using Newtonsoft.Json;
using api.Models;
using System.IO;
using System.Configuration;

namespace api.Controllers
{
    public class PortfolioController : ApiController
    {
        private List<Person> _people;
        private int _cacheduration = 30; //in minutes
        private Cache _cache;

        public static List<T> ReadFromJson<T>(string filename, Cache cache = null, string cachename = "", int duration = 30)
        {
            JsonSerializer serializer = new JsonSerializer();
            List<T> list = new List<T>();
            using (StreamReader file = File.OpenText(HttpContext.Current.Server.MapPath("~") + @"App_Data\" + filename)) {
                list = (List<T>)serializer.Deserialize(file, typeof(List<T>));
                if (cache == null) cache.Add(cachename, list, null, DateTime.Now.AddMinutes(duration), Cache.NoSlidingExpiration, CacheItemPriority.Normal, null);
            }
            return list;
        }

        public PortfolioController() {
            /* TO DO: hook up to a database 
             Also, find a better host with a useable database
             */

            if (_cache == null) _cache = HttpContext.Current.Cache;

            List<Contact_Type> ContactTypes = (List<Contact_Type>)_cache.Get("Portfolio.ContactTypes");
            if (ContactTypes == null) ContactTypes = ReadFromJson<Contact_Type>("contact_types.json", _cache, "Portfolio.ContractTypes");

            List<Contact> Contacts = (List<Contact>)_cache.Get("Portfolio.Contacts");
            if (Contacts == null) Contacts = ReadFromJson<Contact>("contacts.json", _cache, "Portfolio.Contacts");

            //tie contacts to contact types
            foreach (Contact contact in Contacts.Where(c => c.TypeId != null)) 
                contact.Type = ContactTypes.FirstOrDefault(t => t.Id == contact.TypeId);

            List<Technology> Technologies = (List<Technology>)_cache.Get("Portfolio.Technologies");
            if (Technologies == null) Technologies = ReadFromJson<Technology>("technologies.json", _cache, "Portfolio.Technologies");

            List<Media> Media = (List<Media>)_cache.Get("Portfolio.Media");
            if (Media == null) Media = ReadFromJson<Media>("media.json", _cache, "Portfolio.Media");

            List<Project_Type> ProjectTypes = (List<Project_Type>)_cache.Get("Portfolio.ProjectTypes");
            if (ProjectTypes == null) ProjectTypes = ReadFromJson<Project_Type>("project_types.json", _cache, "Portfolio.ProjectTypes");

            List<Project> Projects = (List<Project>)_cache.Get("Portfolio.Projects");
            if (Projects == null) Projects = ReadFromJson<Project>("projects.json", _cache, "Portfolio.Projects");            

            //load many-to-many relationship 'tables' and load projects objects with types and technologies
            JsonSerializer serializer = new JsonSerializer();
            using (StreamReader file = File.OpenText(HttpContext.Current.Server.MapPath("~") + @"App_Data\project_project_types.json"))
            {
                List<dynamic> Project_ProjectTypes = (List<dynamic>)serializer.Deserialize(file, typeof(List<dynamic>));
                foreach (var ppt in Project_ProjectTypes)
                    Projects.FirstOrDefault(p => p.Id == (int)ppt["Project"]).Types.Add(ProjectTypes.FirstOrDefault(t => t.Id == (int)ppt["Type"]));
            }
            using (StreamReader file = File.OpenText(HttpContext.Current.Server.MapPath("~") + @"App_Data\project_technologies.json"))
            {
                List<dynamic> Project_Technologies = (List<dynamic>)serializer.Deserialize(file, typeof(List<dynamic>));
                foreach (var pt in Project_Technologies)
                    Projects.FirstOrDefault(p => p.Id == (int)pt["Project"]).Technologies.Add(Technologies.FirstOrDefault(t => t.Id == (int)pt["Technology"]));
            }

            //load project media arrays
            foreach (Media m in Media)
                if (m.ProjectId != null) Projects.FirstOrDefault(p => p.Id == m.ProjectId).Media.Add(m);

            List<Person> People = (List<Person>)_cache.Get("Portfolio.People");
            if (People == null) People = ReadFromJson<Person>("people.json", _cache, "Portfolio.People");            
                        
            //load people objects with projects and contacts
            foreach (Project project in Projects)
                if (project.PersonId != null) People.FirstOrDefault(p => p.Id == project.PersonId).Projects.Add(project);
            foreach (Contact contact in Contacts)
                if (contact.PersonId != null) People.FirstOrDefault(p => p.Id == contact.PersonId).Contacts.Add(contact);
            foreach (Person person in People) if (person.BackgroundId != null) person.Background = Media.FirstOrDefault(m => m.Id == person.BackgroundId);

            this._people = People;
        }

        // GET api/portfolio
        public IEnumerable<string> Get()
        {            
            return null;
        }

        // GET api/portfolio/5
        public string Get(int id)
        {
            return JsonConvert.SerializeObject(this._people.FirstOrDefault(p => p.Id == id));
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