using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
        public PortfolioController() {
            /* TO DO: hook up to a database 
             Also, find a better host with a useable database
             */
            using (StreamReader file = File.OpenText(HttpContext.Current.Server.MapPath("~") + ConfigurationManager.AppSettings["DataFilePath"]))
            {
                JsonSerializer serializer = new JsonSerializer();
                this._people = (List<Person>)serializer.Deserialize(file, typeof(List<Person>));
            }
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