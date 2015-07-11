using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Contact_Type
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Prefix { get; set; }
        public string Image { get; set; }

        public Contact_Type(int id, string name, string prefix, string image)
        {
            this.Id = id;
            this.Name = name;
            this.Prefix = prefix;
            this.Image = image;
        }
    }
}