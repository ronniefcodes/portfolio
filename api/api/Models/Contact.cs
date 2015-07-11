using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public string Image { get; set; }
        public Contact_Type Type { get; set; }

        public Contact(int id, string value, string image, Contact_Type type)
        {
            this.Id = id;
            this.Value = value;
            this.Image = image;
            this.Type = type;
        }
    }
}