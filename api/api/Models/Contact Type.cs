using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Contact_Type
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "prefix")]
        public string Prefix { get; set; }
        [JsonProperty(PropertyName = "image")]
        public string Image { get; set; }
        [JsonProperty(PropertyName = "icon")]
        public string Icon { get; set; }

        public Contact_Type(int id, string name, string prefix, string image = "", string icon = "")
        {
            this.Id = id;
            this.Name = name;
            this.Prefix = prefix;
            this.Image = image;
            this.Icon = icon;
        }
    }
}